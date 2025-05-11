// /Users/irung/Documents/cnblocks/apps/www/components/block-preview/useOptimizedIframe.ts
'use client'

import { useState, useRef, useEffect, RefObject } from 'react'
import { isUrlCached } from '../../lib/serviceWorker' // Adjusted path

const getCacheKey = (src: string) => `iframe-cache-${src}`

interface UseOptimizedIframeProps {
    previewUrl: string
    containerRef: RefObject<HTMLElement | null> // Allow null for the ref's .current or the ref itself
}

interface UseOptimizedIframeReturn {
    iframeRef: RefObject<HTMLIFrameElement | null> // Allow null
    shouldLoadIframe: boolean
    currentIframeHeight: number
    isIframeCached: boolean
    setIframeHeightState: (height: number) => void // Allow parent to manually set height if needed
}

export const useOptimizedIframe = ({
    previewUrl,
    containerRef,
}: UseOptimizedIframeProps): UseOptimizedIframeReturn => {
    const [iframeHeight, setIframeHeight] = useState(0)
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
    const [cachedHeight, setCachedHeight] = useState<number | null>(null)
    const [isIframeCached, setIsIframeCached] = useState(false)

    const iframeRef = useRef<HTMLIFrameElement | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoadIframe(true)
                    observerRef.current?.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current)
        }

        return () => {
            observerRef.current?.disconnect()
        }
    }, [containerRef])

    useEffect(() => {
        const checkCache = async () => {
            try {
                const isCached = await isUrlCached(previewUrl)
                setIsIframeCached(isCached)
                if (isCached) {
                    // If already in SW cache, we can load eagerly
                    setShouldLoadIframe(true) 
                }
            } catch (error) {
                console.error('Error checking service worker cache status:', error)
            }
        }

        checkCache()

        try {
            const cacheKey = getCacheKey(previewUrl)
            const cached = localStorage.getItem(cacheKey)
            if (cached) {
                const { height, timestamp } = JSON.parse(cached)
                const now = Date.now()
                // Cache for 24 hours
                if (now - timestamp < 24 * 60 * 60 * 1000) { 
                    setCachedHeight(height)
                    setIframeHeight(height) // Initialize with cached height
                } else {
                    localStorage.removeItem(cacheKey) // Expire old cache
                }
            }
        } catch (error) {
            console.error('Error retrieving iframe height from localStorage:', error)
        }
    }, [previewUrl])

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe || !shouldLoadIframe) return

        const handleLoad = () => {
            try {
                // Ensure contentWindow and body are accessible
                if (iframe.contentWindow && iframe.contentWindow.document.body) {
                    const contentHeight = iframe.contentWindow.document.body.scrollHeight
                    setIframeHeight(contentHeight)
                    setCachedHeight(contentHeight) // Update cached height for next time

                    const cacheKey = getCacheKey(previewUrl)
                    const cacheValue = JSON.stringify({
                        height: contentHeight,
                        timestamp: Date.now(),
                    })
                    localStorage.setItem(cacheKey, cacheValue)
                }
            } catch (e) {
                // Common error if iframe content is cross-origin and doesn't allow access
                console.warn('Error accessing iframe content for height calculation:', e)
            }
        }

        iframe.addEventListener('load', handleLoad)
        return () => {
            iframe.removeEventListener('load', handleLoad)
        }
    }, [shouldLoadIframe, previewUrl])

    useEffect(() => {
        if (!containerRef.current || shouldLoadIframe || isIframeCached) return

        // Preload the iframe document if it's not in SW cache and not yet visible
        const linkElement = document.createElement('link')
        linkElement.rel = 'preload'
        linkElement.href = previewUrl
        linkElement.as = 'document'

        // Avoid adding duplicate preload links
        if (!document.head.querySelector(`link[rel="preload"][href="${previewUrl}"]`)) {
            document.head.appendChild(linkElement)
        }

        return () => {
            const existingLink = document.head.querySelector(`link[rel="preload"][href="${previewUrl}"]`)
            if (existingLink) {
                document.head.removeChild(existingLink)
            }
        }
    }, [previewUrl, shouldLoadIframe, containerRef, isIframeCached])

    return {
        iframeRef,
        shouldLoadIframe,
        currentIframeHeight: cachedHeight || iframeHeight || 0, // Ensure it's always a number
        isIframeCached,
        setIframeHeightState: setIframeHeight // Expose setter if needed
    }
}

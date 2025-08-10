'use client'
import React, { RefObject, useMemo } from 'react'
import { cn } from '@tailark/core/lib/utils'
import { clearIframeCache } from '@/lib/serviceWorker'

interface IframeRendererProps {
    src: string
    title: string
    ariaLabel?: string
    id: string
    iframeRef: RefObject<HTMLIFrameElement | null>
    isCached: boolean
    className?: string
}

const IframeRenderer: React.FC<IframeRendererProps> = ({ src, title, ariaLabel, id, iframeRef, isCached, className }) => {
    const handleLoad = () => {
        clearIframeCache(src)
    }

    const urlWithCacheBusting = useMemo(() => {
        try {
            const url = new URL(src, window.location.origin)
            url.searchParams.set('_', Date.now().toString())
            return url.toString()
        } catch {
            return src
        }
    }, [src])

    return (
        <iframe
            key={`${id}-iframe`}
            loading={isCached ? 'eager' : 'lazy'}
            allowFullScreen
            ref={iframeRef}
            title={title}
            aria-label={ariaLabel || `${title}-preview`}
            className={cn('absolute inset-0 size-full', className)}
            src={urlWithCacheBusting}
            id={id}
            onLoad={handleLoad}
            sandbox="allow-scripts allow-same-origin"
        />
    )
}

export default IframeRenderer

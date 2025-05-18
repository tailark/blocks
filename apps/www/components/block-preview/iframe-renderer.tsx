'use client'
import React, { CSSProperties, RefObject, useMemo } from 'react'
import { cn } from '@tailark/core/lib/utils'
import { clearIframeCache } from '@/lib/serviceWorker'

interface IframeRendererProps {
    src: string
    title: string
    ariaLabel?: string
    id: string
    iframeRef: RefObject<HTMLIFrameElement | null>
    height: number
    isCached: boolean
    className?: string
    style?: React.CSSProperties
}

const IframeRenderer: React.FC<IframeRendererProps> = ({ src, title, ariaLabel, id, iframeRef, height, isCached, className, style }) => {
    const handleLoad = () => {
        clearIframeCache(src)
    }

    const urlWithCacheBusting = useMemo(() => {
        try {
            const url = new URL(src, window.location.origin)
            url.searchParams.set('_', Date.now().toString())
            return url.toString()
        } catch (e) {
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
            height={height}
            className={cn('block h-[var(--iframe-height)] min-h-56 w-full duration-200', !height && '@starting:opacity-0 @starting:blur-xl', className)}
            src={urlWithCacheBusting}
            id={id}
            onLoad={handleLoad}
            sandbox="allow-scripts allow-same-origin"
            style={
                {
                    ...style,
                    '--iframe-height': `${height}px`,
                    display: 'block',
                    willChange: 'height',
                } as CSSProperties
            }
        />
    )
}

export default IframeRenderer

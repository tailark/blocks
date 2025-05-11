import React, { RefObject } from 'react'
import { cn } from '@tailark/core/lib/utils'

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
    return (
        <iframe
            key={`${id}-iframe`}
            loading={isCached ? 'eager' : 'lazy'}
            allowFullScreen
            ref={iframeRef}
            title={title}
            aria-label={ariaLabel || `${title}-preview`}
            height={height}
            className={cn('block h-[var(--iframe-height)] min-h-56 w-full duration-200', !height && '@starting:opacity-0 @starting:blur-xl', isCached && '!opacity-100 !blur-none', className)}
            src={src}
            id={id}
            sandbox="allow-scripts allow-same-origin"
            style={
                {
                    ...style,
                    '--iframe-height': `${height}px`,
                    display: 'block',
                    willChange: 'opacity, filter, height',
                } as React.CSSProperties
            }
        />
    )
}

export default IframeRenderer

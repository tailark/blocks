'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Check, Code2, Eye, Maximize, Terminal } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { Separator } from '@tailark/core/ui/separator'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { useMedia } from 'use-media'
import { Button } from '@tailark/core/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@tailark/core/ui/tooltip'
import { cn, stringToNumber } from '@tailark/core/lib/utils'
import Link from 'next/link'
import { OpenInV0Button } from './open-in-v0'
import { isUrlCached } from '@/lib/serviceWorker'
import { CodeEditor, File } from './code-editor'

export interface BlockPreviewProps {
    code?: string
    codes?: File[]
    preview: string
    title: string
    id: string
    description?: string
    category: string
    previewOnly?: boolean
}

const radioItem = 'rounded-(--radius) duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted'

const DEFAULTSIZE = 100
const SMSIZE = 30
const MDSIZE = 62
const LGSIZE = 82

const getCacheKey = (src: string) => `iframe-cache-${src}`

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, codes, preview, title, id, category, previewOnly }) => {
    const [width, setWidth] = useState(DEFAULTSIZE)
    const [mode, setMode] = useState<'preview' | 'code'>('preview')
    const [iframeHeight, setIframeHeight] = useState(0)
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
    const [cachedHeight, setCachedHeight] = useState<number | null>(null)
    const [isIframeCached, setIsIframeCached] = useState(false)

    const terminalCode = `pnpm dlx shadcn@latest add https://tailark.com/r/${category}-${stringToNumber(id)}.json`
    const registryCode = `https://tailark.com/r/${category}-${stringToNumber(id)}.json`

    const { copied: cliCopied, copy: cliCopy } = useCopyToClipboard({ code: terminalCode, title: id, category, eventName: 'block_cli_copy' })
    const { copied: registryCopied, copy: registryCopy } = useCopyToClipboard({ code: registryCode, title: id, category, eventName: 'block_registry_copy' })

    const ref = useRef<ImperativePanelGroupHandle>(null)
    const isLarge = useMedia('(min-width: 1024px)')

    const iframeRef = useRef<HTMLIFrameElement>(null)
    const observer = useRef<IntersectionObserver | null>(null)
    const blockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoadIframe(true)
                    observer.current?.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (blockRef.current) {
            observer.current.observe(blockRef.current)
        }

        return () => {
            observer.current?.disconnect()
        }
    }, [])

    useEffect(() => {
        const checkCache = async () => {
            try {
                const isCached = await isUrlCached(preview)
                setIsIframeCached(isCached)
                if (isCached) {
                    setShouldLoadIframe(true)
                }
            } catch (error) {
                console.error('Error checking cache status:', error)
            }
        }

        checkCache()

        try {
            const cacheKey = getCacheKey(preview)
            const cached = localStorage.getItem(cacheKey)
            if (cached) {
                const { height, timestamp } = JSON.parse(cached)
                const now = Date.now()
                if (now - timestamp < 24 * 60 * 60 * 1000) {
                    setCachedHeight(height)
                    setIframeHeight(height)
                }
            }
        } catch (error) {
            console.error('Error retrieving cache:', error)
        }
    }, [preview])

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe || !shouldLoadIframe) return

        const handleLoad = () => {
            try {
                const contentHeight = iframe.contentWindow!.document.body.scrollHeight
                setIframeHeight(contentHeight)

                const cacheKey = getCacheKey(preview)
                const cacheValue = JSON.stringify({
                    height: contentHeight,
                    timestamp: Date.now(),
                })
                localStorage.setItem(cacheKey, cacheValue)
            } catch (e) {
                console.error('Error accessing iframe content:', e)
            }
        }

        iframe.addEventListener('load', handleLoad)
        return () => {
            iframe.removeEventListener('load', handleLoad)
        }
    }, [shouldLoadIframe, preview])

    useEffect(() => {
        if (!blockRef.current || shouldLoadIframe) return

        const linkElement = document.createElement('link')
        linkElement.rel = 'preload'
        linkElement.href = preview
        linkElement.as = 'document'

        if (!document.head.querySelector(`link[rel="preload"][href="${preview}"]`)) {
            document.head.appendChild(linkElement)
        }

        return () => {
            const existingLink = document.head.querySelector(`link[rel="preload"][href="${preview}"]`)
            if (existingLink) {
                document.head.removeChild(existingLink)
            }
        }
    }, [preview, shouldLoadIframe])

    return (
        <section
            id={id}
            className="group mb-16 scroll-my-6 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="relative border-y">
                <div
                    aria-hidden
                    className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                    <div className="to-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                    <div className="to-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                </div>

                <div className="relative z-10 mx-auto flex max-w-7xl justify-between py-1.5 pl-8 pr-6 [--color-border:var(--color-zinc-200)] md:py-2 lg:pl-5 lg:pr-2 dark:[--color-border:var(--color-zinc-800)]">
                    <div className="-ml-3 flex items-center gap-3">
                        {code && (
                            <>
                                <RadioGroup.Root className="flex gap-0.5">
                                    <RadioGroup.Item
                                        onClick={() => setMode('preview')}
                                        aria-label="Block preview"
                                        value="100"
                                        checked={mode == 'preview'}
                                        className={radioItem}>
                                        <Eye className="size-3.5 sm:opacity-50" />
                                        <span className="hidden text-[13px] sm:block">Preview</span>
                                    </RadioGroup.Item>

                                    <RadioGroup.Item
                                        onClick={() => setMode('code')}
                                        aria-label="Code"
                                        value="0"
                                        checked={mode == 'code'}
                                        className={radioItem}>
                                        <Code2 className="size-3.5 sm:opacity-50" />
                                        <span className="hidden text-[13px] sm:block">Code</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>

                                <Separator
                                    orientation="vertical"
                                    className="hidden !h-4 border-r lg:block"
                                />
                            </>
                        )}
                        {previewOnly && (
                            <>
                                <span className="ml-2 text-sm capitalize">{title}</span>
                                <Separator
                                    orientation="vertical"
                                    className="!h-4 border-r"
                                />
                            </>
                        )}
                        <TooltipButton
                            tooltip="View in full screen"
                            icon={<Maximize className="size-4" />}
                            asLink={{
                                href: preview,
                                target: '_blank',
                            }}
                        />
                        <Separator
                            orientation="vertical"
                            className="hidden !h-4 border-r lg:block"
                        />
                        <span className="text-muted-foreground hidden text-sm lg:block">{width < MDSIZE ? 'Mobile' : width < LGSIZE ? 'Tablet' : 'Desktop'}</span>{' '}
                    </div>

                    <div className="flex items-center gap-2">
                        {code && (
                            <>
                                <Button
                                    onClick={cliCopy}
                                    size="sm"
                                    className="size-8 md:w-fit"
                                    variant="ghost"
                                    aria-label="copy code">
                                    {cliCopied ? <Check className="size-4" /> : <Terminal className="!size-3.5 opacity-50" />}
                                    <span className="hidden font-mono text-xs md:block">
                                        pnpm dlx shadcn add {category}-{stringToNumber(id)}
                                    </span>
                                </Button>
                                <Separator
                                    className="!h-4 border-r"
                                    orientation="vertical"
                                />
                                <TooltipButton
                                    tooltip="Registry MCP URL"
                                    icon={registryCopied ? <Check className="size-4" /> : <MCPLogo />}
                                    onClick={registryCopy}
                                />
                                <Separator
                                    className="!h-4 border-r"
                                    orientation="vertical"
                                />
                                <OpenInV0Button
                                    {...{ title, category }}
                                    block={`${category}-${stringToNumber(id)}`}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative">
                <div
                    aria-hidden
                    className="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0">
                    <div className="from-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b"></div>
                    <div className="from-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
                    <div className={cn('bg-white dark:bg-transparent', mode == 'code' && 'hidden')}>
                        <PanelGroup
                            direction="horizontal"
                            tagName="div"
                            ref={ref}>
                            <Panel
                                id={`block-${title}`}
                                order={1}
                                onResize={(size) => {
                                    setWidth(Number(size))
                                }}
                                defaultSize={DEFAULTSIZE}
                                minSize={SMSIZE}
                                className="h-fit border-x">
                                <div ref={blockRef}>
                                    {shouldLoadIframe ? (
                                        <iframe
                                            key={`${category}-${title}-iframe`}
                                            loading={isIframeCached ? 'eager' : 'lazy'}
                                            allowFullScreen
                                            ref={iframeRef}
                                            title={title}
                                            height={cachedHeight || iframeHeight}
                                            className={cn('h-(--iframe-height) block min-h-56 w-full duration-200 will-change-auto', !cachedHeight && '@starting:opacity-0 @starting:blur-xl', isIframeCached && '!opacity-100 !blur-none')}
                                            src={preview}
                                            id={`block-${title}`}
                                            style={
                                                {
                                                    '--iframe-height': `${cachedHeight || iframeHeight}px`,
                                                    display: 'block',
                                                } as React.CSSProperties
                                            }
                                        />
                                    ) : (
                                        <div className="flex min-h-56 items-center justify-center">
                                            <div className="border-primary size-6 animate-spin rounded-full border-2 border-t-transparent" />
                                        </div>
                                    )}
                                </div>
                            </Panel>

                            {isLarge && (
                                <>
                                    <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400" />
                                    <Panel
                                        id={`code-${title}`}
                                        order={2}
                                        defaultSize={100 - DEFAULTSIZE}
                                        className="-mr-[0.5px] ml-px"></Panel>
                                </>
                            )}
                        </PanelGroup>
                    </div>

                    <div className="bg-white dark:bg-transparent">
                        {mode == 'code' && (
                            <CodeEditor
                                files={codes}
                                code={code as string}
                                lang="tsx"
                                maxHeight={iframeHeight}
                                {...{ id, category }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlockPreview

interface TooltipButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    tooltip: string
    icon: React.ReactNode
    asChild?: boolean
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    className?: string
    children?: React.ReactNode
    asLink?: {
        href: string
        target?: string
    }
}

const TooltipButton = ({ onClick, tooltip, icon, asChild = false, variant = 'ghost', size = 'sm', className, children, asLink }: TooltipButtonProps) => {
    const buttonContent = (
        <>
            {icon}
            {children}
        </>
    )

    const buttonProps = {
        onClick: asLink ? undefined : onClick,
        variant,
        size,
        className: cn('size-8', className),
        asChild: asLink ? true : asChild,
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {asLink ? (
                        <Button {...buttonProps}>
                            <Link
                                href={asLink.href}
                                target={asLink.target || '_blank'}>
                                {buttonContent}
                            </Link>
                        </Button>
                    ) : (
                        <Button {...buttonProps}>{buttonContent}</Button>
                    )}
                </TooltipTrigger>
                <TooltipContent className="border">
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

const MCPLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        fillRule="evenodd"
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        className={cn('size-4', className)}>
        <title>ModelContextProtocol</title>
        <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z" />
        <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z" />
    </svg>
)

'use client'

import React, { useState, useRef } from 'react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { useMedia } from 'use-media'
import { cn, stringToNumber } from '@tailark/core/lib/utils'
import { CodeEditor, File as CodeFile } from '@/components/code-editor'

import { useOptimizedIframe } from './useOptimizedIframe'
import IframeRenderer from './iframe-renderer'
import LoadingSpinner from './loading-spinner'
import BlockPreviewToolbar, { DEFAULTSIZE } from './toolbar'

export interface BlockPreviewProps {
    code?: string
    codes?: CodeFile[]
    previewLink: string
    title: string
    id: string
    category: string
    previewOnly?: boolean
    kit?: string
}

const BlockPreview: React.FC<BlockPreviewProps> = ({ code, codes, previewLink, title, id, category, kit, previewOnly = false }) => {
    const [mode, setMode] = useState<'preview' | 'code'>('preview')

    const registryUrl = kit === 'dusk-kit' ? `https://tailark.com/r/${category}-${stringToNumber(id)}.json` : `https://tailark.com/r/${kit?.replace('-kit', '')}-${category}-${stringToNumber(id)}.json`

    const terminalCode = `pnpm dlx shadcn@latest add ${registryUrl}`
    const registryCode = registryUrl

    const { copied: cliCopied, copy: cliCopy } = useCopyToClipboard({
        code: terminalCode,
        title: id,
        category,
        eventName: 'block_cli_copy',
    })

    const { copied: registryLinkCopied, copy: registryLinkCopy } = useCopyToClipboard({ code: registryCode, title: id, category, eventName: 'block_registry_copy' })

    const panelGroupRef = useRef<ImperativePanelGroupHandle>(null)
    const isLargeScreen = useMedia('(min-width: 1024px)')

    const iframeContainerRef = useRef<HTMLDivElement>(null)

    const { iframeRef, shouldLoadIframe, currentIframeHeight, isIframeCached } = useOptimizedIframe({
        previewUrl: previewLink,
        containerRef: iframeContainerRef,
    })

    const codeContentForEditor = codes || (code ? [{ name: 'index.tsx', language: 'tsx', code, active: true }] : [])
    const codeAvailable = !!(code || (codes && codes.length > 0))

    return (
        <section
            id={id}
            className="border-foreground/[0.075] group mb-16 scroll-my-6 border-b">
            <div className="border-foreground/[0.075] relative border-y">
                <div
                    aria-hidden
                    className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)] to-75%"></div>
                    <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)] to-75%"></div>
                </div>

                <BlockPreviewToolbar
                    onModeChange={setMode}
                    onCliCopy={cliCopy}
                    onRegistryLinkCopy={registryLinkCopy}
                    {...{ panelGroupRef, mode, setMode, codeAvailable, previewOnly, previewLink, title, id, category, cliCopied, cliCopy, registryUrl, registryLinkCopied }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 lg:px-0">
                <div className={cn('border-foreground/[0.075] border-x')}>
                    <div
                        aria-hidden
                        className="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0">
                        <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)]"></div>
                        <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)]"></div>
                    </div>
                    <div className={cn('bg-white dark:bg-transparent', mode === 'code' && 'hidden')}>
                        <PanelGroup
                            direction="horizontal"
                            tagName="div"
                            ref={panelGroupRef}
                            id={`block-panel-group-${id}`}>
                            <Panel
                                id={`block-panel-${id}`}
                                order={1}
                                defaultSize={DEFAULTSIZE}
                                minSize={30}
                                className="border-foreground/[0.075] h-fit min-h-56 lg:border-r">
                                <div
                                    ref={iframeContainerRef}
                                    className="min-h-56">
                                    {shouldLoadIframe ? (
                                        <IframeRenderer
                                            src={previewLink}
                                            title={title}
                                            ariaLabel={`${category}-${title}-block-preview`}
                                            id={`iframe-${id}`}
                                            iframeRef={iframeRef}
                                            height={currentIframeHeight}
                                            isCached={isIframeCached}
                                        />
                                    ) : (
                                        <LoadingSpinner />
                                    )}
                                </div>
                            </Panel>

                            {isLargeScreen && (
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

                    {mode === 'code' && codeAvailable && !previewOnly && (
                        <CodeEditor
                            files={codeContentForEditor}
                            id={id}
                            category={category}
                            code={code as string}
                            lang="tsx"
                            maxHeight={currentIframeHeight}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default BlockPreview

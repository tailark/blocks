'use client'

import React from 'react'
import { Check, Code2, Eye, Maximize, Terminal } from 'lucide-react'
import { type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { Separator } from '@tailark/core/ui/separator'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { OpenInV0Button } from './open-in-v0'
import TooltipButton from './tooltip-button'
import { MCPLogo } from './mcp-logo'
import { Button } from '@tailark/core/ui/button'
import { titleToNumber } from '@/lib/utils'

const radioItem = 'rounded-md duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted'

export const DEFAULTSIZE = 100
export const SMSIZE = 30
export const MDSIZE = 62
export const LGSIZE = 82

interface BlockPreviewToolbarProps {
    mode: 'preview' | 'code'
    onModeChange: (mode: 'preview' | 'code') => void
    codeAvailable: boolean
    previewOnly?: boolean
    title: string
    id: string
    previewLink: string
    category: string
    cliCopied: boolean
    registryLinkCopied: boolean
    registryUrl: string
    onCliCopy: React.MouseEventHandler<HTMLButtonElement>
    onRegistryLinkCopy: React.MouseEventHandler<HTMLButtonElement>
    panelGroupRef: React.RefObject<ImperativePanelGroupHandle | null>
}

const BlockPreviewToolbar: React.FC<BlockPreviewToolbarProps> = ({ mode, onModeChange, codeAvailable, previewOnly, registryUrl, title, id, category, registryLinkCopied, cliCopied, onCliCopy, onRegistryLinkCopy, previewLink }) => {
    return (
        <div className="relative z-10 mx-auto flex max-w-7xl justify-between py-1.5 pl-8 pr-6 [--color-border:var(--color-zinc-200)] md:py-2 lg:pl-5 lg:pr-2 dark:[--color-border:var(--color-zinc-800)]">
            <div className="-ml-3 flex items-center gap-3">
                {codeAvailable && !previewOnly && (
                    <>
                        <RadioGroupPrimitive.Root
                            className="flex gap-0.5"
                            value={mode}
                            onValueChange={(value: 'preview' | 'code') => onModeChange(value)}>
                            <RadioGroupPrimitive.Item
                                value="preview"
                                aria-label="Block preview"
                                className={radioItem}>
                                <Eye className="size-3.5 sm:opacity-50" />
                                <span className="hidden text-[13px] sm:block">Preview</span>
                            </RadioGroupPrimitive.Item>

                            <RadioGroupPrimitive.Item
                                value="code"
                                aria-label="Code"
                                className={radioItem}>
                                <Code2 className="size-3.5 sm:opacity-50" />
                                <span className="hidden text-[13px] sm:block">Code</span>
                            </RadioGroupPrimitive.Item>
                        </RadioGroupPrimitive.Root>

                        <Separator
                            orientation="vertical"
                            className="hidden !h-4 lg:block"
                        />
                    </>
                )}
                {previewOnly && (
                    <>
                        <h2 className="ml-3 text-sm font-medium">{title}</h2>
                        <Separator
                            orientation="vertical"
                            className="hidden !h-4 lg:block"
                        />
                        <TooltipButton
                            tooltip="View in full screen"
                            className="size-8"
                            icon={<Maximize className="size-4" />}
                            asLink={{
                                href: previewLink,
                                target: '_blank',
                            }}
                        />
                    </>
                )}
            </div>

            {!previewOnly && (
                <div className="flex items-center gap-1.5">
                    <Button
                        onClick={onCliCopy}
                        size="sm"
                        className="size-8 shadow-none md:w-fit"
                        variant="ghost"
                        aria-label="copy code">
                        {cliCopied ? <Check className="size-4" /> : <Terminal className="!size-3.5" />}
                        <span className="hidden font-mono text-xs md:block">
                            pnpm dlx shadcn@latest add {category}-{titleToNumber(id)}
                        </span>
                    </Button>

                    <Separator
                        orientation="vertical"
                        className="!h-4"
                    />

                    <TooltipButton
                        tooltip="Registry MCP URL"
                        className="size-8"
                        icon={registryLinkCopied ? <Check className="size-4" /> : <MCPLogo />}
                        onClick={onRegistryLinkCopy}
                    />

                    <Separator
                        orientation="vertical"
                        className="!h-4"
                    />

                    <OpenInV0Button
                        title={title}
                        category={category}
                        registryUrl={registryUrl}
                    />
                </div>
            )}
        </div>
    )
}

export default BlockPreviewToolbar

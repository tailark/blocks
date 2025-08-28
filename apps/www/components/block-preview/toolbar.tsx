'use client'

import React from 'react'
import { Code2, Eye, Maximize } from 'lucide-react'
import { Separator } from '@tailark/core/ui/separator'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { OpenInV0Button } from './open-in-v0'
import TooltipButton from './tooltip-button'
import { titleToNumber } from '@/lib/utils'
import { Button } from '@tailark/core/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@tailark/core/ui/select'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Bun } from '@tailark/core/components/logos/bun'
import { Yarn } from '@tailark/core/components/logos/yarn'
import { NPM } from '@tailark/core/components/logos/npm'
import { Pnpm } from '@tailark/core/components/logos/pnpm'
import { useStore } from '@nanostores/react'
import { promptStore, setPrompt } from '@/lib/store/prompt'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@tailark/core/ui/tooltip'

const radioItem = 'rounded-md duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted'

export const DEFAULTSIZE = 100
export const SMSIZE = 30
export const MDSIZE = 62
export const LGSIZE = 82

interface BlockPreviewToolbarProps {
    kit?: string
    mode: 'preview' | 'code'
    onModeChange: (mode: 'preview' | 'code') => void
    onCliCopy: (e: React.MouseEvent<HTMLButtonElement>) => void
    codeAvailable: boolean
    previewOnly?: boolean
    title: string
    id: string
    previewLink: string
    category: string
    cliCopied: boolean
}

export const prompts = {
    npm: 'npx',
    yarn: 'yarn',
    pnpm: 'pnpm dlx',
    bun: 'bunx --bun',
}

export type Prompt = keyof typeof prompts

const BlockPreviewToolbar: React.FC<BlockPreviewToolbarProps> = ({ mode, onModeChange, codeAvailable, previewOnly, title, id, previewLink, category, cliCopied, onCliCopy, kit }) => {
    const prompt = useStore(promptStore)

    return (
        <div className="relative z-10 mx-auto flex h-12 max-w-7xl justify-between pl-8 pr-6 [--color-border:var(--color-zinc-200)] md:py-2 lg:pl-5 lg:pr-2 dark:[--color-border:var(--color-zinc-800)]">
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
                    <div className="flex items-center gap-1.5">
                        <div className="group/cli flex items-center [--from-color:transparent] hover:[--from-color:var(--color-muted)]">
                            <div className="peer">
                                <Select
                                    defaultValue={prompt}
                                    value={prompt}
                                    onValueChange={(value: Prompt) => setPrompt(value)}>
                                    <TooltipProvider>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <SelectTrigger
                                                    aria-label="Select a package manager"
                                                    className="border-(--from-color) hover:bg-muted h-8 w-9 rounded-md rounded-r-none border-y border-l border-r-0 px-0 shadow-none *:mx-auto *:data-[slot=select-icon]:hidden">
                                                    <SelectValue placeholder="Select a package manager" />
                                                </SelectTrigger>
                                            </TooltipTrigger>
                                            <TooltipContent>Change package manager</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <SelectContent
                                        position="item-aligned"
                                        align="center"
                                        className="ring-foreground/10 w-10 min-w-10 -translate-x-[0.45px] translate-y-[0.45px] border-transparent p-0 shadow-lg shadow-black/10 ring-1 dark:shadow-black/30">
                                        <SelectGroup className="my-0 w-10 divide-y p-0">
                                            <SelectLabel className="sr-only">Package managers</SelectLabel>
                                            <SelectItem
                                                value="npm"
                                                className="flex h-8 w-full justify-center rounded-none px-0 *:data-[slot=select-item-indicator]:hidden">
                                                <NPM className="m-auto size-5" />
                                            </SelectItem>
                                            <SelectItem
                                                value="yarn"
                                                className="flex h-8 w-full justify-center rounded-none px-0 *:data-[slot=select-item-indicator]:hidden">
                                                <Yarn className="m-auto size-3.5" />
                                            </SelectItem>
                                            <SelectItem
                                                value="pnpm"
                                                className="flex h-8 w-full justify-center rounded-none px-0 *:data-[slot=select-item-indicator]:hidden">
                                                <Pnpm className="text-foreground m-auto size-3.5" />
                                            </SelectItem>
                                            <SelectItem
                                                value="bun"
                                                className="flex h-8 w-full justify-center rounded-none px-0 *:data-[slot=select-item-indicator]:hidden">
                                                <Bun className="m-auto size-3.5" />
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                onClick={onCliCopy}
                                variant="ghost"
                                size="sm"
                                aria-label="Copy CLI"
                                data-slot="btn"
                                className={cn('hover:bg-linear-to-l hover:from-muted peer-hover:bg-linear-to-r border-(--from-color) peer-hover:from-muted relative rounded-l-none border-y border-r pl-0.5 transition-none hover:bg-transparent hover:from-85%')}>
                                <AnimatePresence mode="popLayout">
                                    {cliCopied && (
                                        <motion.span
                                            key="copied"
                                            initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 my-auto size-fit text-emerald-600 dark:text-emerald-400">
                                            Copied!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                <span className={cn('hidden origin-left font-mono text-xs duration-300 md:block', cliCopied && 'scale-90 opacity-0 blur')}>
                                    {prompts[prompt]} shadcn add @tailark/{kit}
                                    {category}-{titleToNumber(id)}
                                </span>
                            </Button>
                        </div>
                    </div>

                    <Separator
                        orientation="vertical"
                        className="!h-4"
                    />

                    <OpenInV0Button
                        title={title}
                        category={category}
                        registryUrl={`https://tailark.com/r/${category}-${titleToNumber(id)}.json`}
                    />
                </div>
            )}
        </div>
    )
}

export default BlockPreviewToolbar

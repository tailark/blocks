import { useState } from 'react'
import { CheckIcon, ChevronDown, Copy } from 'lucide-react'
import CodeBlock, { CodeBlockProps } from './code-block'
import type { BundledLanguage } from 'shiki/bundle/web'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { cn } from '@tailark/core/lib/utils'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { Button } from '@tailark/core/ui/button'

export type File = {
    name: string
    lang?: BundledLanguage
    code: string
}

interface CodeEditorProps extends CodeBlockProps {
    files?: File[]
    id: string
    category: string
}
interface CopyButtonProps {
    copied: boolean
    onCopy: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CopyButton = ({ copied, onCopy }: CopyButtonProps) => {
    return (
        <Button
            className="bg-muted/10 hover:bg-muted/25 dark:hover:bg-muted/50 absolute right-2 top-2 h-7 border border-white/15 pl-2.5 text-white shadow shadow-black/25 hover:text-white"
            variant="ghost"
            size="sm"
            onClick={onCopy}>
            {copied ? <CheckIcon className="!size-3" /> : <Copy className="!size-3 opacity-50" />}
            Copy
        </Button>
    )
}

export const CodeEditor = ({ files, code, id, category, lang = 'tsx', maxHeight, className }: CodeEditorProps) => {
    const [activeFileIndex, setActiveFileIndex] = useState(0)

    const currentCode = files && files[activeFileIndex]?.code ? files[activeFileIndex].code : (code as string) || ''

    const { copied, copy } = useCopyToClipboard({ code: currentCode, title: id, category, eventName: 'block_copy' })

    return (
        <>
            {files && files.length > 1 ? (
                <div className="scheme-dark flex">
                    <div className="hidden w-64 bg-zinc-950 font-mono text-white [--color-background:var(--color-zinc-900)] [--color-foreground:white] [--color-muted:var(--color-zinc-800)] sm:block dark:bg-zinc-900/25">
                        <div className="pb-5.5 pt-1.5 font-mono text-xs">
                            <div>
                                <div className="pr-5.5 dark:hover:bg-muted/50 flex items-center gap-1.5 py-2 pl-4 hover:bg-white/5">
                                    <ChevronDown className="size-4 opacity-50" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        viewBox="0 0 16 16">
                                        <path
                                            fill="none"
                                            stroke="#cad3f5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
                                            strokeWidth={1}></path>
                                        <path
                                            fill="none"
                                            stroke="#a6da95"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 10.278c0-.576.468-1.044 1.044-1.044h1.045v-.19a1.044 1.044 0 0 1 2.088 0v.19h1.045c.576 0 1.044.468 1.044 1.044v1.045h.19a1.044 1.044 0 1 1 0 2.088h-.19v1.045c0 .576-.468 1.044-1.044 1.044h-1.045v-.19a1.044 1.044 0 1 0-2.088 0v.19H8v-2.089h.19a1.044 1.044 0 0 0 0-2.088H8Z"
                                            strokeWidth={1}></path>
                                    </svg>
                                    <span>components</span>
                                </div>

                                <RadioGroup.Root
                                    value={String(activeFileIndex)}
                                    onValueChange={(value) => setActiveFileIndex(parseInt(value, 10))}>
                                    {files.map(({ name }, index) => (
                                        <RadioGroup.Item
                                            key={index}
                                            aria-label={`${name} code`}
                                            value={String(index)}
                                            className="pr-5.5 dark:hover:bg-muted/50 dark:data-[state=checked]:bg-muted/50 flex w-full items-center gap-1.5 py-2 pl-12 hover:bg-zinc-800/50 data-[state=checked]:bg-zinc-800/50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-3.5"
                                                viewBox="0 0 128 128">
                                                <g fill="#0288d1">
                                                    <circle
                                                        cx={64}
                                                        cy={64}
                                                        r={11.4}></circle>
                                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
                                                </g>
                                            </svg>
                                            <span>{name}</span>
                                        </RadioGroup.Item>
                                    ))}
                                </RadioGroup.Root>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full sm:w-[calc(100%-16rem)]">
                        <CopyButton
                            copied={copied}
                            onCopy={copy}
                        />
                        <CodeBlock
                            code={files[activeFileIndex].code}
                            maxHeight={maxHeight}
                            lang={files[activeFileIndex].lang as BundledLanguage}
                            className={cn('max-w-full overflow-auto', className)}
                        />
                    </div>
                </div>
            ) : (
                <div className="relative">
                    <CopyButton
                        copied={copied}
                        onCopy={copy}
                    />
                    <CodeBlock
                        code={code}
                        maxHeight={maxHeight}
                        lang={lang}
                        className={cn('lg:*:!border-l-0', className)}
                    />
                </div>
            )}
        </>
    )
}

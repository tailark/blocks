'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Check, Code2, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CodeBlock from './code-block'

import { useCopyToClipboard } from '@/hooks/useClipboard'

export default function SnippetPreview({ displayedCode, codeToCopy, description }: { codeToCopy: string; displayedCode: string; description: string }) {
    const { copied, copy } = useCopyToClipboard({ code: codeToCopy, eventName: 'snippet_copy' })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost" aria-label="View code snippet">
                    <Code2 />
                </Button>
            </DialogTrigger>
            <DialogContent className="!max-w-xl">
                <DialogHeader>
                    <DialogTitle>Snippet Code</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <div className="relative grid w-full">
                    <Button onClick={copy} size="icon" variant="ghost" className="absolute right-0.5 top-0.5 size-8 rounded-md text-white/75 hover:bg-white/10 hover:text-white" aria-label="Copy code snippet">
                        {copied ? <Check /> : <Copy className="size-3" />}
                    </Button>
                    <CodeBlock code={displayedCode} lang="tsx" className="[&_pre]:min-h-auto [&_pre]:rounded-(--radius) [&_pre]:max-w-[33rem]! !w-full [&_pre]:border-none dark:[&_pre]:!bg-zinc-900" />
                </div>
            </DialogContent>
        </Dialog>
    )
}

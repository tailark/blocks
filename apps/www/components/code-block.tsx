// This code is adapted from Origin UI
// Source: https://github.com/origin-space/originui/blob/main/components/code-block.tsx
'use client'

import { cn } from '@/lib/utils'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { JSX, useLayoutEffect, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import type { BundledLanguage } from 'shiki/bundle/web'
import { codeToHast } from 'shiki/bundle/web'

export async function highlight(code: string, lang: BundledLanguage) {
    const hast = await codeToHast(code, {
        lang,
        theme: 'github-dark',
    })

    return toJsxRuntime(hast, {
        Fragment,
        jsx,
        jsxs,
    }) as JSX.Element
}

type Props = {
    code: string | null
    lang: BundledLanguage
    initial?: JSX.Element
    preHighlighted?: JSX.Element | null
    maxHeight?: number
    className?: string
}

export default function CodeBlock({ code, lang, initial, maxHeight, preHighlighted, className }: Props) {
    const [content, setContent] = useState<JSX.Element | null>(preHighlighted || initial || null)

    useLayoutEffect(() => {
        // If we have pre-highlighted content, use that
        if (preHighlighted) {
            setContent(preHighlighted)
            return
        }

        let isMounted = true

        if (code) {
            highlight(code, lang).then((result) => {
                if (isMounted) setContent(result)
            })
        } else {
            setContent(<pre className="rounded-lg bg-zinc-950 p-4">No code available</pre>)
        }

        return () => {
            isMounted = false
        }
    }, [code, lang, preHighlighted])

    return content ? (
        <div className={cn('[&_code]:text-[13px]/2 [&_pre]:max-h-(--pre-max-height) [&_code]:font-mono [&_pre]:min-h-[32rem] [&_pre]:overflow-auto [&_pre]:border-l [&_pre]:!bg-zinc-950 [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:!bg-zinc-900/50', className)} style={{ '--pre-max-height': `${maxHeight}px` } as React.CSSProperties}>
            {content}
        </div>
    ) : (
        <pre className="rounded-lg bg-zinc-950 p-4">Loading...</pre>
    )
}

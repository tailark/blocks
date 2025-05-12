import BlockRenderer from './block-renderer'
import { cn } from '@tailark/core/lib/utils'
import { use } from 'react'

export default function PreviewPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = use(params)

    if (!slug || slug.length < 3) {
        return <div className="flex h-screen items-center justify-center">Invalid path. Please use the format /preview/kit-name/category/variant.</div>
    }

    const [kitShortName, category, variant] = slug

    return (
        <div
            data-theme={kitShortName === 'mist' && 'mist'}
            className={cn(kitShortName === 'mist' && 'scheme-light bg-background')}>
            <BlockRenderer
                kitShortName={kitShortName}
                category={category}
                variant={variant}
            />
        </div>
    )
}

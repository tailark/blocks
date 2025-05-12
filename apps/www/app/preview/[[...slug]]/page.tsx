import BlockRenderer from './block-renderer'
import { cn } from '@tailark/core/lib/utils'
import { use } from 'react'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params

    if (!slug || slug.length < 3) {
        return { title: 'Preview | Tailark' }
    }

    const [kitShortName, category, variant] = slug
    const categoryDisplay = category
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    const variantDisplay = variant
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

    return {
        title: `${categoryDisplay} ${variantDisplay} | Tailark ${kitShortName.charAt(0).toUpperCase() + kitShortName.slice(1)}`,
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tailark.com'),
        openGraph: {
            title: `${kitShortName} - ${category} ${variant}`,
            images: [`/og?type=preview&slug=${slug.join(',')}`],
        },
        twitter: {
            card: 'summary_large_image',
            images: [`/og?type=preview&slug=${slug.join(',')}`],
        },
    }
}

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

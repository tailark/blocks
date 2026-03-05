import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blocks } from '@/data/blocks'
import BlockPreview from '@/components/block-preview'
import { stringToNumber } from '@tailark/core/lib/utils'
import { slugToTitle } from '@/lib/utils'
import CategoryNotFound from '@/components/category-not-found'
import { ChevronRight } from 'lucide-react'

interface PageProps {
    params: Promise<{ kit: string; category: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { kit, category } = await params
    const categoryDisplay = slugToTitle(category)
    const kitDisplay = slugToTitle(kit)

    return {
        title: `${kitDisplay} ${categoryDisplay} Blocks | Tailark`,
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tailark.com'),
        openGraph: {
            title: `${kit} - ${category}`,
            images: [`/og?type=category&slug=${kit},${category}`],
        },
        twitter: {
            card: 'summary_large_image',
            images: [`/og?type=category&slug=${kit},${category}`],
        },
    }
}

export async function generateStaticParams() {
    const paths = new Set<string>()
    blocks.forEach((b) => {
        if (b.kit && typeof b.category === 'string') {
            const kit = b.kit.replace('-kit', '')
            paths.add(JSON.stringify({ kit, category: b.category }))
        }
    })
    return Array.from(paths).map((p) => JSON.parse(p))
}

export default function KitCategoryPage({ params }: { params: Promise<{ kit: string; category: string }> }) {
    const { kit, category } = use(params)
    const kitFullName = `${kit}-kit`

    const categoryBlocks = blocks.filter((b) => b.kit === kitFullName && b.category === category).sort((a, b) => stringToNumber(a.id) - stringToNumber(b.id))

    if (categoryBlocks.length === 0) {
        const kitExists = blocks.some((b) => b.kit === kitFullName)
        if (kitExists) {
            return (
                <CategoryNotFound
                    categoryName={category}
                    kitName={kitFullName}
                />
            )
        }
        notFound()
    }

    const categoryDisplay = slugToTitle(category)
    const kitDisplay = slugToTitle(kit)

    return (
        <>
            <h1 className="sr-only text-3xl font-bold sm:text-4xl md:text-nowrap">
                {kitDisplay} <span className="capitalize">{categoryDisplay}</span> blocks
            </h1>
            <div className="mx-auto max-w-7xl">
                <nav className="text-muted-foreground flex items-center gap-1 px-4 pb-4 pt-8 text-sm">
                    <Link
                        href="/blocks"
                        className="hover:text-foreground transition-colors">
                        Blocks
                    </Link>
                    <ChevronRight className="size-3.5" />
                    <Link
                        href={`/blocks?kits=${kit}`}
                        className="hover:text-foreground capitalize transition-colors">
                        {kit}
                    </Link>
                    <ChevronRight className="size-3.5" />
                    <span className="text-foreground capitalize">{category.replace(/-/g, ' ')}</span>
                </nav>
            </div>
            <div className="h-2" />
            {categoryBlocks.map((block, index) => (
                <BlockPreview
                    {...block}
                    key={`${block.kit}-${block.slug}-${index}`}
                />
            ))}
        </>
    )
}

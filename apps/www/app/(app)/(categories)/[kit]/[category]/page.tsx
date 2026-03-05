import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blocks } from '@/data/blocks'
import BlockPreview from '@/components/block-preview'
import { stringToNumber } from '@tailark/core/lib/utils'
import { slugToTitle } from '@/lib/utils'
import CategoryNotFound from '@/components/category-not-found'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@tailark/core/ui/breadcrumb'

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
        <div className="mx-auto max-w-7xl">
            <h1 className="sr-only">
                {kitDisplay} <span className="capitalize">{categoryDisplay}</span> blocks
            </h1>
            <Breadcrumb className="px-4 pb-4 pt-8">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/blocks">Blocks</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link
                                className="capitalize"
                                href={`/blocks?kits=${kit}`}>
                                {kit}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="capitalize">{category.replace(/-/g, ' ')}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {categoryBlocks.map((block, index) => (
                <BlockPreview
                    {...block}
                    key={`${block.kit}-${block.slug}-${index}`}
                />
            ))}
        </div>
    )
}

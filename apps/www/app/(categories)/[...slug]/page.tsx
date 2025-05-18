import React, { use } from 'react'
import { notFound } from 'next/navigation'
import { blocks } from '@/data/blocks'
import BlockPreview from '@/components/block-preview'
import { stringToNumber } from '@tailark/core/lib/utils'
import CategoryNotFound from '@/components/category-not-found'

interface PageProps {
    params: Promise<{ slug: string[] }>
}

function getKitAndCategory(slug: string[]): { kitShortName: string; category: string; kitFullName: string } | null {
    if (slug[0] === '.well-known') {
        return null
    }

    if (slug.length < 1 || slug.length > 2) {
        return null
    }

    let kitShortName: string
    let category: string

    if (slug.length === 1) {
        kitShortName = 'dusk'
        category = slug[0]
    } else {
        kitShortName = slug[0]
        category = slug[1]
    }
    const kitFullName = `${kitShortName}-kit`
    return { kitShortName, category, kitFullName }
}

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateStaticParams() {
    const uniquePaths = new Set<string>()
    blocks.forEach((block) => {
        if (!block || typeof block.kit !== 'string') {
            console.warn('Skipping block in generateStaticParams due to missing kit:', block)
            return
        }

        const kitShortName = block.kit.replace('-kit', '')
        if (block.kit === 'dusk-kit') {
            if (typeof block.category === 'string') {
                uniquePaths.add(JSON.stringify({ slug: [block.category] }))
            }
        } else {
            if (typeof block.category === 'string') {
                uniquePaths.add(JSON.stringify({ slug: [kitShortName, block.category] }))
            }
        }
    })

    return Array.from(uniquePaths).map((pathStr) => JSON.parse(pathStr))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const parsed = getKitAndCategory(slug)

    if (!parsed) {
        return { title: 'Blocks | Tailark' }
    }

    const { kitShortName, category } = parsed
    const kitDisplay = kitShortName === 'default' ? '' : kitShortName.charAt(0).toUpperCase() + kitShortName.slice(1)
    const categoryDisplay = category
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

    return {
        title: `Shadcn ${categoryDisplay} Blocks | Tailark ${kitDisplay}`,
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tailark.com'),
        openGraph: {
            title: `${kitShortName} - ${category}`,
            images: [`/og?type=category&slug=${slug.join(',')}`],
        },
        twitter: {
            card: 'summary_large_image',
            images: [`/og?type=category&slug=${slug.join(',')}`],
        },
    }
}

export default function BlocksCategoryPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = use(params)
    if (slug[0] === '_next' || slug[0] === '.well-known') {
        return null
    }
    const parsed = getKitAndCategory(slug)

    if (!parsed) {
        console.error('Invalid slug length for blocks category page:', slug)
        notFound()
    }

    const { kitFullName, category } = parsed

    const categoryBlocks = blocks
        .filter((b) => b.kit === kitFullName && b.category === category)
        .sort((a, b) => {
            return stringToNumber(a.id) - stringToNumber(b.id)
        })

    if (categoryBlocks.length === 0) {
        const kitExists = blocks.some((b) => b.kit === kitFullName)

        if (kitExists) {
            return (
                <CategoryNotFound
                    categoryName={category}
                    kitName={kitFullName}
                />
            )
        } else {
            console.error(`Kit '${kitFullName}' not found.`)
            notFound()
        }
    }

    const kitDisplay = kitFullName === 'dusk-kit' ? 'Shadcn' : kitFullName.replace('-kit', '').charAt(0).toUpperCase() + kitFullName.replace('-kit', '').slice(1)
    const categoryDisplay = category
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

    return (
        <>
            <section>
                <h1 className="sr-only text-3xl font-bold sm:text-4xl md:text-nowrap">
                    {kitDisplay} <span className="capitalize">{categoryDisplay}</span> blocks
                </h1>
                <div className="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"></div>
            </section>

            {categoryBlocks.map((block, index) => (
                <BlockPreview
                    {...block}
                    key={`${block.kit}-${block.slug}-${index}`}
                />
            ))}
        </>
    )
}

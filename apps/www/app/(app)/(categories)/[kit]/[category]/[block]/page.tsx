import { notFound } from 'next/navigation'
import { blocks } from '@/data/blocks'
import BlockPreview from '@/components/block-preview'
import { DiscoverBlockCard } from '@/app/(discover)/components/discover-card'
import { mistBlocksImages, veilBlocksImages, duskBlocksImages } from '@/data/blocks-images'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@tailark/core/ui/button'
import { ChevronRight } from 'lucide-react'
import { titleToNumber, slugToTitle } from '@/lib/utils'

interface PageProps {
    params: Promise<{ kit: string; category: string; block: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { kit, category, block: blockId } = await params
    const kitFullName = `${kit}-kit`
    const currentBlock = blocks.find((b) => b.kit === kitFullName && b.category === category && b.id === blockId)

    if (!currentBlock) {
        return { title: 'Block Not Found' }
    }

    const blockDisplay = slugToTitle(blockId)
    const categoryDisplay = slugToTitle(category)

    const title = `${blockDisplay} - ${categoryDisplay} | Tailark`
    const description = currentBlock.description || `${blockDisplay} block from the ${categoryDisplay} category`
    const ogImage = `/og?title=${kit}-${category}-${blockId}`

    return {
        title,
        description,
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://tailark.com'),
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://tailark.com/${kit}/${category}/${blockId}`,
            siteName: 'Tailark',
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        alternates: {
            canonical: `/${kit}/${category}/${blockId}`,
        },
    }
}

export async function generateStaticParams() {
    return blocks
        .filter((b) => b.kit && typeof b.category === 'string' && typeof b.id === 'string')
        .map((b) => ({
            kit: b.kit!.replace('-kit', ''),
            category: b.category,
            block: b.id,
        }))
}

const imageClasses = 'border-4 relative pointer-events-none border-background rounded-lg ring-1 ring-foreground/5'

export default async function BlockDetailPage({ params }: PageProps) {
    'use cache'
    const { kit, category, block: blockId } = await params
    const kitFullName = `${kit}-kit`

    const currentBlock = blocks.find((b) => b.kit === kitFullName && b.category === category && b.id === blockId)

    if (!currentBlock) {
        notFound()
    }

    const relatedBlocks = blocks.filter((b) => b.kit === kitFullName && b.category === category && b.id !== blockId)

    const categoryDisplay = slugToTitle(category)

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tailark.com' },
            { '@type': 'ListItem', position: 2, name: 'Blocks', item: 'https://tailark.com/blocks' },
            { '@type': 'ListItem', position: 3, name: kit.charAt(0).toUpperCase() + kit.slice(1), item: `https://tailark.com/blocks?kits=${kit}` },
            { '@type': 'ListItem', position: 4, name: categoryDisplay, item: `https://tailark.com/${kit}/${category}` },
            { '@type': 'ListItem', position: 5, name: blockId.replace(/-/g, ' '), item: `https://tailark.com/${kit}/${category}/${blockId}` },
        ],
    }

    return (
        <div className="bg-muted/50 dark:bg-background min-h-[calc(100vh-3.5rem)]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
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
                    <Link
                        href={`/${kit}/${category}`}
                        className="hover:text-foreground capitalize transition-colors">
                        {category.replace(/-/g, ' ')}
                    </Link>
                    <ChevronRight className="size-3.5" />
                    <span className="text-foreground capitalize">{blockId.replace(/-/g, ' ')}</span>
                </nav>

                <BlockPreview
                    id={blockId}
                    title={currentBlock.title}
                    previewLink={currentBlock.previewLink}
                    category={category}
                    kit={currentBlock.kit}
                    code={currentBlock.code}
                    codes={currentBlock.codes}
                />

                {relatedBlocks.length > 0 && (
                    <div className="py-8">
                        <div className="mb-6 flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium capitalize">
                                More {category.replace(/-/g, ' ')}
                                {category.endsWith('s') ? '' : 's'}
                            </h2>
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="h-7 px-3">
                                <Link href={`/${kit}/${category}`}>Preview all →</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 3 }, (_, columnIndex) => (
                                <div key={columnIndex}>
                                    {relatedBlocks
                                        .filter((_, index) => index % 3 === columnIndex)
                                        .map((block) => {
                                            const blockKitName = block.kit?.replace('-kit', '') || kit
                                            const kitImages = blockKitName === 'mist' ? mistBlocksImages : blockKitName === 'veil' ? veilBlocksImages : duskBlocksImages
                                            const blockMeta = kitImages.find((img) => img.category === block.category && img.variant === block.id)
                                            const registryItem = blockKitName === 'dusk' ? `${block.category}-${titleToNumber(block.id)}` : `${blockKitName}-${block.category}-${titleToNumber(block.id)}`
                                            return (
                                                <DiscoverBlockCard
                                                    key={block.slug}
                                                    href={`/${blockKitName}/${category}/${block.id}`}
                                                    title={block.id.replace(/-/g, ' ')}
                                                    subtitle={category.replace(/-/g, ' ')}
                                                    imageSrc={`https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${blockKitName}/${block.category}-${titleToNumber(block.id)}.png`}
                                                    imageAlt={block.title}
                                                    imageWidth={blockMeta?.width || 400}
                                                    imageHeight={blockMeta?.height || 400}
                                                    aspectRatio={blockMeta?.aspectRatio || 1}
                                                    imageClassName={imageClasses}
                                                    category={category}
                                                    registryItem={registryItem}
                                                    eventName="block_cli_copy"
                                                />
                                            )
                                        })}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

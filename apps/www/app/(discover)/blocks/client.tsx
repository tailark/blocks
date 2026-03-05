'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { categoryOrder, unsortedBlockCategories } from '@/data/blocks/metadata'
import { useDiscover } from '../components/discover-provider'
import type { Block } from '@/data/blocks/types'
import { cn, titleToNumber } from '@/lib/utils'
import { DiscoverBlockCard } from '../components/discover-card'
import { Pagination } from '../components/pagination'
import { mistBlocksImages, veilBlocksImages, duskBlocksImages } from '@/data/blocks-images'

export const imageClasses = 'border-4 relative pointer-events-none border-background rounded-lg ring-1 ring-foreground/5'

const FREE_KITS = ['mist-kit', 'dusk-kit', 'veil-kit']

interface QuartzVariant {
    id: string
    title: string
    slug: string
    metadata?: { imageUrl?: string; width?: number; height?: number; aspect?: number }
}

interface QuartzCategory {
    name: string
    variants: QuartzVariant[]
    metadata?: { imageUrl?: string; width?: number; height?: number; aspect?: number }
}

function getVariantSortValue(variant: string): number {
    return titleToNumber(variant)
}

export function BlocksClient() {
    const { searchQuery, selectedCategories, selectedKits, selectedLicences, setFilterGroups, setPlaceholder, columns, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, viewMode } = useDiscover()

    const [allBlocks, setAllBlocks] = useState<Block[]>([])

    useEffect(() => {
        setPlaceholder('Search blocks...')
    }, [setPlaceholder])

    useEffect(() => {
        const fetchAllBlocks = async () => {
            try {
                const baseUrl = 'https://pro.tailark.com'

                const [localResult, quartzResult] = await Promise.allSettled([fetch('/api/blocks', { cache: 'force-cache' }).then((r) => r.json()), fetch(`${baseUrl}/api/catalog`).then((r) => (r.ok ? r.json() : null))])

                const localBlocks: Block[] = localResult.status === 'fulfilled' ? localResult.value : []
                const quartzData = quartzResult.status === 'fulfilled' ? quartzResult.value : null

                const quartzBlocks: Block[] =
                    quartzData?.blocks?.flatMap(
                        (category: QuartzCategory) =>
                            category.variants?.map((variant: QuartzVariant) => ({
                                id: variant.id,
                                slug: `${category.name}-${variant.id}`,
                                title: variant.title || `${category.name} ${variant.id}`,
                                description: `Quartz ${category.name} block`,
                                category: category.name,
                                previewLink: `https://pro.tailark.com/preview/quartz/${category.name}/${variant.id}`,
                                kit: 'quartz-kit',
                                imageUrl: variant.metadata?.imageUrl,
                                imageWidth: variant.metadata?.width,
                                imageHeight: variant.metadata?.height,
                                aspectRatio: variant.metadata?.aspect,
                                categoryCoverUrl: category.metadata?.imageUrl,
                                categoryCoverWidth: category.metadata?.width,
                                categoryCoverHeight: category.metadata?.height,
                                categoryCoverAspect: category.metadata?.aspect,
                            })) || []
                    ) || []

                setAllBlocks([...localBlocks, ...quartzBlocks])
            } catch (err) {
                console.error('Error fetching blocks:', err)
                setAllBlocks([])
            }
        }
        fetchAllBlocks()
    }, [])

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(allBlocks.map((block) => block.category)))

        const categories = uniqueCategories.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a)
            const indexB = categoryOrder.indexOf(b)

            if (indexA === -1) return 1
            if (indexB === -1) return -1

            return indexA - indexB
        })

        const categoriesGroup = {
            title: 'Categories',
            key: 'categories',
            items: categories.map((category) => ({
                name: category,
                quantity: allBlocks.filter((block) => block.category === category).length,
            })),
        }

        const uniqueKits = Array.from(new Set(allBlocks.map((block) => block.kit).filter(Boolean))) as string[]
        const allKits = [...uniqueKits]
        if (!allKits.includes('quartz-kit')) {
            allKits.push('quartz-kit')
        }
        const kitsGroup = {
            title: 'Kits',
            key: 'kits',
            items: allKits.map((kit) => ({
                name: kit.replace('-kit', ''),
                quantity: allBlocks.filter((block) => block.kit === kit).length,
            })),
        }

        const licencesGroup = {
            title: 'Licence',
            key: 'licences',
            items: [
                { name: 'free', quantity: allBlocks.filter((block) => FREE_KITS.includes(block.kit || '')).length },
                { name: 'pro', quantity: allBlocks.filter((block) => block.kit === 'quartz-kit').length },
            ],
        }

        setFilterGroups([kitsGroup, licencesGroup, categoriesGroup])
    }, [allBlocks, setFilterGroups])

    const filteredBlocks = useMemo(
        () =>
            allBlocks
                .filter((block) => {
                    if (selectedCategories.length > 0 && !selectedCategories.includes(block.category)) {
                        return false
                    }

                    if (selectedKits.length > 0 && (!block.kit || !selectedKits.includes(block.kit.replace('-kit', '')))) {
                        return false
                    }

                    if (selectedLicences.length > 0) {
                        const isFree = FREE_KITS.includes(block.kit || '')
                        const isPro = block.kit === 'quartz-kit'
                        if (selectedLicences.includes('free') && !selectedLicences.includes('pro') && !isFree) {
                            return false
                        }
                        if (selectedLicences.includes('pro') && !selectedLicences.includes('free') && !isPro) {
                            return false
                        }
                    }

                    if (searchQuery) {
                        const query = searchQuery.toLowerCase()
                        const category = block.category.toLowerCase()
                        const id = block.id.toLowerCase()
                        return category.includes(query) || id.includes(query) || block.title.toLowerCase().includes(query)
                    }

                    return true
                })
                .sort((a, b) => {
                    const categoryIndexA = categoryOrder.indexOf(a.category)
                    const categoryIndexB = categoryOrder.indexOf(b.category)

                    if (categoryIndexA !== categoryIndexB) {
                        if (categoryIndexA === -1) return 1
                        if (categoryIndexB === -1) return -1
                        return categoryIndexA - categoryIndexB
                    }

                    return getVariantSortValue(a.id) - getVariantSortValue(b.id)
                }),
        [allBlocks, selectedCategories, selectedKits, selectedLicences, searchQuery]
    )

    useEffect(() => {
        setCurrentPage(1)
    }, [viewMode, setCurrentPage])

    const totalPages = Math.ceil(filteredBlocks.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedBlocks = filteredBlocks.slice(startIndex, endIndex)

    const categoriesWithBlocks = useMemo(() => {
        const categoryKitMap = new Map<
            string,
            {
                category: string
                kit: string
                count: number
                coverUrl?: string
                coverWidth?: number
                coverHeight?: number
                coverAspect?: number
            }
        >()

        for (const block of filteredBlocks) {
            const key = `${block.category}-${block.kit}`
            const existing = categoryKitMap.get(key)
            if (existing) {
                existing.count++
            } else {
                categoryKitMap.set(key, {
                    category: block.category,
                    kit: block.kit || 'mist-kit',
                    count: 1,
                    coverUrl: block.categoryCoverUrl,
                    coverWidth: block.categoryCoverWidth,
                    coverHeight: block.categoryCoverHeight,
                    coverAspect: block.categoryCoverAspect,
                })
            }
        }

        return Array.from(categoryKitMap.values())
            .map((item) => {
                const categoryMeta = unsortedBlockCategories.find((cat) => cat.name === item.category)
                const kitName = item.kit.replace('-kit', '')
                const imageUrl = item.kit === 'quartz-kit' && item.coverUrl ? item.coverUrl : `https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${kitName}/${item.category}-1.png`
                let kitImageData: { width: number; height: number; aspectRatio: number } | undefined
                if (item.kit !== 'quartz-kit') {
                    const kitImages = kitName === 'mist' ? mistBlocksImages : kitName === 'veil' ? veilBlocksImages : duskBlocksImages
                    kitImageData = kitImages.find((img) => img.category === item.category && img.variant === 'one')
                }
                return {
                    name: item.category,
                    kit: item.kit,
                    kitName,
                    count: item.count,
                    imageUrl,
                    width: item.coverWidth || kitImageData?.width || categoryMeta?.width,
                    height: item.coverHeight || kitImageData?.height || categoryMeta?.height,
                    aspectRatio: item.coverAspect || kitImageData?.aspectRatio || categoryMeta?.aspectRatio,
                }
            })
            .sort((a, b) => {
                const indexA = categoryOrder.indexOf(a.name)
                const indexB = categoryOrder.indexOf(b.name)
                if (indexA !== indexB) {
                    if (indexA === -1) return 1
                    if (indexB === -1) return -1
                    return indexA - indexB
                }
                return a.kitName.localeCompare(b.kitName)
            })
    }, [filteredBlocks])

    const columnGroups: Block[][] = useMemo(() => {
        const groups: Block[][] = Array.from({ length: columns }, () => [])
        if (viewMode === 'content') {
            paginatedBlocks.forEach((block, index) => {
                groups[index % columns].push(block)
            })
        }
        return groups
    }, [columns, viewMode, paginatedBlocks])

    if (filteredBlocks.length === 0) {
        return (
            <div className="flex min-h-[400px] items-center justify-center p-6">
                <div className="text-center">
                    <p className="text-muted-foreground text-sm">No blocks found matching your search or filters.</p>
                </div>
            </div>
        )
    }

    const displayTotalPages = viewMode === 'categories' ? Math.ceil(categoriesWithBlocks.length / itemsPerPage) : totalPages

    const paginatedCategories = viewMode === 'categories' ? categoriesWithBlocks.slice(startIndex, endIndex) : []

    return (
        <div className="flex h-[calc(100%-3rem)] min-w-72 flex-col">
            <div className="p-2 lg:p-4">
                <Suspense>
                    {viewMode === 'categories' ? (
                        <div className={cn('grid [--opacity:1] hover:[--opacity:0.9]', columns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2')}>
                            {Array.from({ length: columns }, (_, colIndex: number) => (
                                <div key={colIndex}>
                                    {paginatedCategories
                                        .filter((_, index: number) => index % columns === colIndex)
                                        .map((category) => {
                                            const isQuartz = category.kit === 'quartz-kit'
                                            const catKitName = category.kit?.replace('-kit', '') || 'dusk'
                                            const categoryHref = isQuartz ? `https://pro.tailark.com/${category.name}` : `/${catKitName}/${category.name}`
                                            return (
                                                <DiscoverBlockCard
                                                    key={`${category.kit}-${category.name}`}
                                                    href={categoryHref}
                                                    title={`${category.kitName} ${category.name.replace(/-/g, ' ')}`}
                                                    subtitle={`${category.count} block${category.count !== 1 ? 's' : ''}`}
                                                    imageSrc={category.imageUrl}
                                                    imageAlt={`${category.name} ${category.kitName} category`}
                                                    imageWidth={category.width || 686}
                                                    imageHeight={category.height || 400}
                                                    aspectRatio={category.aspectRatio || 1.715}
                                                    imageClassName={imageClasses}
                                                    category={category.name}
                                                    registryItem=""
                                                    eventName="block_cli_copy"
                                                    showToolbar={false}
                                                    licence={category.kit === 'quartz-kit' ? 'pro' : 'free'}
                                                    openInNewTab={isQuartz}
                                                />
                                            )
                                        })}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={cn('grid [--opacity:1] hover:[--opacity:0.75]', columns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2')}>
                            {columnGroups.map((group, groupIndex) => (
                                <div key={groupIndex}>
                                    {group.map((block) => {
                                        const kitName = block.kit?.replace('-kit', '') || 'mist'
                                        const isQuartz = block.kit === 'quartz-kit'
                                        const blockHref = isQuartz ? `https://pro.tailark.com/${block.category}/${block.id}` : `/${kitName}/${block.category}/${block.id}`
                                        // Use imageUrl from block if available (quartz), otherwise construct URL
                                        const imageSrc = block.imageUrl || `https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${kitName}/${block.category}-${titleToNumber(block.id)}.png`

                                        // Client-side aspect ratio lookup for non-quartz blocks
                                        let imageWidth = block.imageWidth
                                        let imageHeight = block.imageHeight
                                        let aspectRatio = block.aspectRatio

                                        if (!isQuartz && !block.aspectRatio) {
                                            const kitImages = kitName === 'mist' ? mistBlocksImages : kitName === 'veil' ? veilBlocksImages : duskBlocksImages
                                            const imageData = kitImages.find((img) => img.category === block.category && img.variant === block.id)
                                            if (imageData) {
                                                imageWidth = imageData.width
                                                imageHeight = imageData.height
                                                aspectRatio = imageData.aspectRatio
                                            }
                                        }

                                        const registryItem = `${block.category}-${titleToNumber(block.id)}`
                                        return (
                                            <DiscoverBlockCard
                                                key={`${block.kit}-${block.slug}`}
                                                href={blockHref}
                                                title={block.id.replace(/-/g, ' ')}
                                                subtitle={`${kitName} ${block.category.replace(/-/g, ' ')}`}
                                                imageSrc={imageSrc}
                                                imageAlt={block.title}
                                                imageWidth={imageWidth || 686}
                                                imageHeight={imageHeight || 400}
                                                aspectRatio={aspectRatio || 1.715}
                                                imageClassName={imageClasses}
                                                category={block.category || ''}
                                                registryItem={registryItem}
                                                eventName="block_cli_copy"
                                                theme={kitName}
                                                licence={isQuartz ? 'pro' : 'free'}
                                                disableV0={isQuartz}
                                                openInNewTab={isQuartz}
                                            />
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </Suspense>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={displayTotalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                totalItems={viewMode === 'categories' ? categoriesWithBlocks.length : filteredBlocks.length}
            />
        </div>
    )
}

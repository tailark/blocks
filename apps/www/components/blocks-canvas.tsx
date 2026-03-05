'use client'
import Link from 'next/link'
import { useState, useEffect, useMemo, ReactNode } from 'react'
import { BlockImage } from './block-image'
import { cn } from '@/lib/utils'
import { categoryOrder } from '@/data/blocks/metadata'

export type KitId = 'quartz' | 'dusk' | 'mist' | 'veil'

export interface BlockCategory {
    name: string
    quantity: number
    width: number
    height: number
    imageUrl?: string
    kit?: KitId
    metadata?: {
        aspect: number
        width: number
        height: number
        imageUrl?: string
    }
}

const kits: { id: KitId; name: string }[] = [
    { id: 'quartz', name: 'Quartz' },
    { id: 'dusk', name: 'Dusk' },
    { id: 'mist', name: 'Mist' },
    { id: 'veil', name: 'Veil' },
]

function sortByCategory<T extends { name: string }>(items: T[]): T[] {
    return [...items].sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.name)
        const indexB = categoryOrder.indexOf(b.name)
        if (indexA !== -1 && indexB !== -1) return indexA - indexB
        if (indexA !== -1) return -1
        if (indexB !== -1) return 1
        return a.name.localeCompare(b.name)
    })
}

function distributeToColumns<T>(items: T[], columnCount: number): T[][] {
    const columns: T[][] = Array.from({ length: columnCount }, () => [])
    items.forEach((item, index) => {
        columns[index % columnCount].push(item)
    })
    return columns
}

interface KitSwitcherProps {
    activeKit: KitId
    onKitChange: (kit: KitId) => void
}

const KitSwitcher = ({ activeKit, onKitChange }: KitSwitcherProps) => (
    <div className="mb-4 flex items-center justify-center">
        {kits.map((kit) => (
            <button
                key={kit.id}
                onClick={() => onKitChange(kit.id)}
                className={cn('cursor-pointer rounded-full px-3.5 py-2 font-medium transition-colors', activeKit === kit.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                {kit.name}
            </button>
        ))}
    </div>
)

export const BlocksCanvas = () => {
    const [activeKit, setActiveKit] = useState<KitId>('quartz')
    const [categories, setCategories] = useState<BlockCategory[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCatalog = async () => {
            setLoading(true)
            try {
                let data: { blocks: BlockCategory[] }

                if (activeKit === 'quartz') {
                    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://pro.tailark.com' : 'http://localhost:3000'
                    const res = await fetch(`${baseUrl}/api/catalog`)
                    if (!res.ok) throw new Error('Failed to fetch catalog')
                    const json = await res.json()
                    data = {
                        blocks: json.blocks.map((block: { name: string; quantity: number; metadata?: { aspect: number; width: number; height: number; imageUrl?: string } }) => ({
                            name: block.name,
                            quantity: block.quantity,
                            width: block.metadata?.width ?? 686,
                            height: block.metadata?.height ?? 400,
                            imageUrl: block.metadata?.imageUrl,
                            kit: 'quartz' as KitId,
                            metadata: block.metadata,
                        })),
                    }
                } else {
                    const res = await fetch(`/api/kit-categories?kit=${activeKit}`)
                    if (!res.ok) throw new Error('Failed to fetch kit categories')
                    const json = await res.json()
                    data = {
                        blocks: json.blocks.map((block: { name: string; quantity: number; width: number; height: number; imageUrl?: string }) => ({
                            ...block,
                            kit: activeKit,
                        })),
                    }
                }

                setCategories(data.blocks)
            } catch (err) {
                console.error('Error fetching catalog:', err)
                setCategories([])
            } finally {
                setLoading(false)
            }
        }
        fetchCatalog()
    }, [activeKit])

    const { visibleCategoryColumns, tallestColumnIndex } = useMemo(() => {
        const cols = distributeToColumns(sortByCategory(categories), 3)
        const heights = cols.map((col) => col.reduce((sum, cat) => sum + (cat.height || 0), 0))
        const maxH = Math.max(...heights)
        return { visibleCategoryColumns: cols, tallestColumnIndex: heights.indexOf(maxH) }
    }, [categories])

    return (
        <div className="mt-12">
            <KitSwitcher
                activeKit={activeKit}
                onKitChange={setActiveKit}
            />
            <div className={cn('bg-muted/50 max-w-380 relative mx-auto overflow-hidden border-y p-4 transition-opacity duration-200 2xl:rounded-t-3xl 2xl:border-x', loading && 'opacity-50')}>
                <div className="grid gap-4 *:grid md:grid-cols-3">
                    {visibleCategoryColumns.map((column, colIndex) => (
                        <div
                            key={colIndex}
                            className={cn('grid gap-4', colIndex !== tallestColumnIndex && 'grid-rows-[auto_1fr]')}>
                            <div className="grid h-fit gap-4">
                                {column.map((category) => (
                                    <BlockCard
                                        key={category.name}
                                        category={category}
                                    />
                                ))}
                            </div>
                            {colIndex !== tallestColumnIndex && <CardContainer />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function getCategoryUrl(category: BlockCategory): string {
    const kit = category.kit
    const name = category.name
    if (kit === 'quartz') {
        return `https://pro.tailark.com/${name}` // target="_blank" handled in Link
    }
    if (kit === 'dusk') {
        return `/${name}`
    }
    if (kit === 'mist') {
        return `/mist/${name}`
    }
    if (kit === 'veil') {
        return `/veil/${name}`
    }
    return `/${name}`
}

const CardContainer = ({ children }: { children?: ReactNode }) => {
    return (
        <div
            aria-hidden={!!children}
            className="bg-card shadow-black/4 hover:bg-card/75 dark:hover:bg-card/75 dark:bg-background ring-foreground/7.5 relative overflow-hidden rounded-xl shadow ring">
            {children}
        </div>
    )
}

const BlockCard = ({ category }: { category: BlockCategory }) => {
    return (
        <CardContainer>
            <div className="px-6 pt-6 xl:px-12 xl:pt-12">
                <div
                    className="bg-card overflow-hidden rounded-lg border"
                    style={{ aspectRatio: category.metadata?.aspect }}>
                    <BlockImage category={category} />
                </div>
            </div>
            <p className="text-foreground my-6 flex flex-col items-center justify-between gap-1 px-1 pt-1 text-sm">
                <Link
                    href={getCategoryUrl(category)}
                    target={category.kit === 'quartz' ? '_blank' : undefined}
                    className="font-medium capitalize before:absolute before:inset-0">
                    {category.name.replace(/-/g, ' ')}
                </Link>

                <span className="text-muted-foreground font-mono">{category.quantity} blocks</span>
            </p>
        </CardContainer>
    )
}

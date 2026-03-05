import { cache } from 'react'
import type { BlockCategory, KitId } from '@/components/marketing/blocks-canvas'

interface CatalogBlock {
    name: string
    quantity: number
    metadata?: {
        aspect: number
        width: number
        height: number
        imageUrl?: string
    }
}

interface KitCategoryBlock {
    name: string
    quantity: number
    width: number
    height: number
    imageUrl?: string
}

export const getQuartzCatalog = cache(async (): Promise<BlockCategory[]> => {
    try {
        const res = await fetch('https://pro.tailark.com/api/catalog', {
            next: { revalidate: 900 }, // 15 minutes
        })
        if (!res.ok) return []
        const json = await res.json()
        return json.blocks.map((block: CatalogBlock) => ({
            name: block.name,
            quantity: block.quantity,
            width: block.metadata?.width ?? 686,
            height: block.metadata?.height ?? 400,
            imageUrl: block.metadata?.imageUrl,
            kit: 'quartz' as KitId,
            metadata: block.metadata,
        }))
    } catch {
        return []
    }
})

export const getKitCategories = cache(async (kit: KitId): Promise<BlockCategory[]> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
        const res = await fetch(`${baseUrl}/api/kit-categories?kit=${kit}`, {
            next: { revalidate: 900 },
        })
        if (!res.ok) return []
        const json = await res.json()
        return json.blocks.map((block: KitCategoryBlock) => ({
            ...block,
            kit,
        }))
    } catch {
        return []
    }
})

export const getAllKitCategories = cache(async (): Promise<Record<KitId, BlockCategory[]>> => {
    const [quartz, dusk, mist, veil] = await Promise.all([
        getQuartzCatalog(),
        getKitCategories('dusk'),
        getKitCategories('mist'),
        getKitCategories('veil'),
    ])
    return { quartz, dusk, mist, veil }
})

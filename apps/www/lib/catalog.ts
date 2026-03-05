import { cache } from 'react'
import type { BlockCategory, KitId } from '@/components/marketing/blocks-canvas'
import { blocks } from '@/data/blocks'
import { mistBlocksImages, veilBlocksImages, duskBlocksImages } from '@/data/blocks-images'
import { categoryOrder } from '@/data/blocks/metadata'
import { variantNames } from '@/lib/utils'

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

const coverVariants: Record<string, Record<string, number>> = {
    dusk: {
        'hero-section': 5,
        'logo-cloud': 1,
        'features': 7,
        'integrations': 2,
        'content': 3,
        'stats': 4,
        'team': 2,
        'testimonials': 3,
        'call-to-action': 1,
        'footer': 2,
        'pricing': 5,
        'comparator': 1,
        'faqs': 2,
        'login': 2,
        'sign-up': 1,
        'forgot-password': 2,
        'contact': 2,
    },
    veil: {
        'hero-section': 3,
        'logo-cloud': 1,
        'features': 1,
        'integrations': 2,
        'content': 3,
        'stats': 3,
        'team': 2,
        'testimonials': 2,
        'call-to-action': 4,
        'footer': 6,
        'pricing': 3,
        'comparator': 1,
        'faqs': 5,
        'login': 3,
        'sign-up': 1,
        'forgot-password': 2,
        'contact': 1,
    },
    mist: {
        'hero-section': 1,
        'logo-cloud': 1,
        'features': 6,
        'integrations': 3,
        'content': 1,
        'stats': 4,
        'team': 2,
        'testimonials': 3,
        'call-to-action': 1,
        'footer': 1,
        'pricing': 2,
        'comparator': 1,
        'faqs': 1,
        'login': 1,
        'sign-up': 1,
        'forgot-password': 1,
        'contact': 1,
    },
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
    const kitName = `${kit}-kit`
    const kitBlocks = blocks.filter((b) => b.kit === kitName)

    const categoryMap = new Map<string, number>()
    for (const block of kitBlocks) {
        const count = categoryMap.get(block.category) || 0
        categoryMap.set(block.category, count + 1)
    }

    const kitCoverVariants = coverVariants[kit] || {}
    const kitImages = kit === 'mist' ? mistBlocksImages : kit === 'veil' ? veilBlocksImages : duskBlocksImages

    return Array.from(categoryMap.entries())
        .map(([name, quantity]) => {
            const coverVariantNum = kitCoverVariants[name] || 1
            const variantName = variantNames[coverVariantNum - 1] || 'one'
            const imageData = kitImages.find((img) => img.category === name && img.variant === variantName)
            return {
                name,
                quantity,
                width: imageData?.width ?? 686,
                height: imageData?.height ?? 400,
                imageUrl: `https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${kit}/${name}-${coverVariantNum}.png`,
                kit,
            }
        })
        .sort((a, b) => {
            const indexA = categoryOrder.indexOf(a.name)
            const indexB = categoryOrder.indexOf(b.name)
            if (indexA !== -1 && indexB !== -1) return indexA - indexB
            if (indexA !== -1) return -1
            if (indexB !== -1) return 1
            return a.name.localeCompare(b.name)
        })
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

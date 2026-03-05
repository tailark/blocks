import { blocks } from '@/data/blocks'
import { mistBlocksImages, veilBlocksImages, duskBlocksImages } from '@/data/blocks-images'
import { NextResponse } from 'next/server'
import { categoryOrder } from '@/data/blocks/metadata'
import { variantNames } from '@/lib/utils'

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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const kit = searchParams.get('kit')

    if (!kit) {
        return NextResponse.json({ error: 'Kit parameter required' }, { status: 400 })
    }

    const kitName = `${kit}-kit`
    const kitBlocks = blocks.filter((b) => b.kit === kitName)

    const categoryMap = new Map<string, number>()
    for (const block of kitBlocks) {
        const count = categoryMap.get(block.category) || 0
        categoryMap.set(block.category, count + 1)
    }

    const kitCoverVariants = coverVariants[kit] || {}
    const kitImages = kit === 'mist' ? mistBlocksImages : kit === 'veil' ? veilBlocksImages : duskBlocksImages

    const categories = Array.from(categoryMap.entries())
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

    return NextResponse.json({ blocks: categories })
}

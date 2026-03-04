import { blocks } from '@/data/blocks'
import { NextResponse } from 'next/server'

const categoryOrder = [
    'hero-section',
    'logo-cloud',
    'features',
    'integrations',
    'content',
    'stats',
    'team',
    'testimonials',
    'call-to-action',
    'footer',
    'pricing',
    'comparator',
    'faqs',
    'login',
    'sign-up',
    'forgot-password',
    'contact',
]

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

    const categories = Array.from(categoryMap.entries())
        .map(([name, quantity]) => ({
            name,
            quantity,
            width: 686,
            height: 400,
            imageUrl: `https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${kit}/${name}-${quantity}.png`,
        }))
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

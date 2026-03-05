import { NextResponse } from 'next/server'
import type { Page } from '@/data/pages/types'

interface CatalogPageVariant {
    id: string
    title?: string
    slug?: string
    metadata?: { imageUrl?: string; width?: number; height?: number; aspect?: number }
}

interface CatalogPageCategory {
    name: string
    theme?: string
    variants?: CatalogPageVariant[]
}

export async function GET() {
    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://pro.tailark.com' : 'http://localhost:3000'

    try {
        const catalogRes = await fetch(`${baseUrl}/api/catalog`, { next: { revalidate: 3600 } })
        if (catalogRes.ok) {
            const catalog = await catalogRes.json()
            const pages: Page[] =
                catalog.pages?.flatMap((entry: CatalogPageCategory) =>
                    (entry.variants ?? []).map((variant: CatalogPageVariant) => ({
                        id: variant.id,
                        theme: entry.theme ?? 'quartz',
                        category: entry.name,
                        variant: variant.id,
                        title: variant.title ?? `${entry.name} ${variant.id}`,
                        imageUrl: variant.metadata?.imageUrl,
                        previewLink: `${baseUrl}/preview/${entry.theme ?? 'quartz'}/${entry.name}/${variant.id}`,
                    }))
                ) ?? []
            return NextResponse.json(pages)
        }
    } catch {
        // Pro API unavailable
    }

    return NextResponse.json([] as Page[])
}

import React from 'react'
import type { Metadata } from 'next'
import { blocks } from '@/data/blocks'

export async function generateMetadata({ params }: { params: Promise<{ kit: string; category: string; variant: string }> }): Promise<Metadata> {
    // Await the params promise directly as generateMetadata is not a component
    const { kit: kitShortName, category, variant } = await params
    const kitFullName = `${kitShortName}-kit`
    const block = blocks.find((b) => b.id === variant && b.category === category && b.kit === kitFullName)

    return {
        title: block ? `${block.title} | Tailark` : 'Block Preview | Tailark',
        description: block ? block.description : 'Preview of Tailark UI blocks',
    }
}

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
    return <div className="preview-layout">{children}</div>
}

import React from 'react'
import type { Metadata } from 'next'
import { blocks } from '@/data/blocks'

export async function generateMetadata({ params }: { params: Promise<{ category: string; variant: string }> }): Promise<Metadata> {
    const { category, variant } = await params
    const slug = `${category}-${variant}`
    const block = blocks.find((b) => b.slug === slug)

    return {
        title: block ? `${block.title} | Tailark` : 'Block Preview | Tailark',
        description: block ? block.description : 'Preview of Tailark UI blocks',
    }
}

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
    return <div className="preview-layout">{children}</div>
}

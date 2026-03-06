import { Metadata } from 'next'
import { BlocksClient } from './client'

export const metadata: Metadata = {
    title: 'Blocks - Tailark',
    description: 'Hundreds of beautifuly crafted marketing blocks that seamlessly integrates with others to help you build high-performing marketing sites.',
    openGraph: {
        title: 'Blocks - Tailark',
        description: 'Hundreds of beautifuly crafted marketing blocks that seamlessly integrates with others to help you build high-performing marketing sites.',
        type: 'website',
        url: 'https://tailark.com/blocks',
        siteName: 'Tailark',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blocks - Tailark',
        description: 'Hundreds of beautifuly crafted marketing blocks that seamlessly integrates with others to help you build high-performing marketing sites.',
    },
    keywords: 'shadcn, ui, blocks, marketing, components, tailwind, react, nextjs, tailark, responsive, design system, templates, template, hero section, features, footers, contact forms, Bento, Call To Action, Testimonials, logo cloud, integrations, content, team, pricing, login, sign in, logout, stats FAQ sections',
    alternates: {
        canonical: '/blocks',
    },
}

export default function BlocksPage() {
    return <BlocksClient />
}

import PagesDiscoveryClient from './client'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Complete Pages - Tailark Pro',
    description: 'Ship even faster with complete pages, fully customizable, in four unique styles, complete with exclusive blocks and illustrations.',
    openGraph: {
        title: 'Complete Pages - Tailark Pro',
        description: 'Ship even faster with complete pages, fully customizable, in four unique styles, complete with exclusive blocks and illustrations.',
        type: 'website',
        url: 'https://pro.tailark.com/pages',
        siteName: 'Tailark Pro',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Complete Pages - Tailark Pro',
        description: 'Ship even faster with complete pages, fully customizable, in four unique styles, complete with exclusive blocks and illustrations.',
    },
    keywords: 'shadcn, ui, blocks, marketing, components, tailwind, react, nextjs, tailark, responsive, design system, templates, template, hero section, features, footers, contact forms, Bento, Call To Action, Testimonials, logo cloud, integrations, content, team, pricing, login, sign in, logout, stats FAQ sections',
    alternates: {
        canonical: '/pages',
    },
}

export default async function PagesDiscoveryPage() {
    'use cache'
    return <PagesDiscoveryClient />
}

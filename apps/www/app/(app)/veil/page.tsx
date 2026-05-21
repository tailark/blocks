import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { Atom } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@veil/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Veil Kit | Tailark',
    description: 'Build super minimalist, distraction-free marketing websites.',
}

const blocks = [
    {
        kit: 'veil',
        category: 'hero-section',
        id: 'two',
        title: 'Hero section',
        previewLink: '/preview/veil/hero-section/two',
    },
    {
        kit: 'veil',
        category: 'hero-section',
        id: 'three',
        title: 'Hero section',
        previewLink: '/preview/veil/hero-section/three',
    },
    {
        kit: 'veil',
        category: 'logo-cloud',
        id: 'two',
        title: 'Logo cloud',
        previewLink: '/preview/veil/logo-cloud/two',
    },
    {
        kit: 'veil',
        category: 'features',
        id: 'one',
        title: 'Features section',
        previewLink: '/preview/veil/features/one',
    },
    {
        kit: 'veil',
        category: 'features',
        id: 'two',
        title: 'Features section',
        previewLink: '/preview/veil/features/two',
    },
    {
        kit: 'veil',
        category: 'features',
        id: 'three',
        title: 'Features section',
        previewLink: '/preview/veil/features/three',
    },
    {
        kit: 'veil',
        category: 'stats',
        id: 'three',
        title: 'Stats section',
        previewLink: '/preview/veil/stats/three',
    },
    {
        kit: 'veil',
        category: 'pricing',
        id: 'one',
        title: 'Pricing section',
        previewLink: '/preview/veil/pricing/one',
    },
    {
        kit: 'veil',
        category: 'pricing',
        id: 'three',
        title: 'Pricing section',
        previewLink: '/preview/veil/pricing/three',
    },
    {
        kit: 'veil',
        category: 'comparator',
        id: 'one',
        title: 'Comparator section',
        previewLink: '/preview/veil/comparator/one',
    },
    {
        kit: 'veil',
        category: 'team',
        id: 'one',
        title: 'Team section',
        previewLink: '/preview/veil/team/one',
    },
    {
        kit: 'veil',
        category: 'contact',
        id: 'one',
        title: 'Contact section',
        previewLink: '/preview/veil/contact/one',
    },
    {
        kit: 'veil',
        category: 'login',
        id: 'one',
        title: 'Login section',
        previewLink: '/preview/veil/login/one',
    },
    {
        kit: 'veil',
        category: 'faqs',
        id: 'five',
        title: 'FAQs section',
        previewLink: '/preview/veil/faqs/five',
    },
    {
        kit: 'veil',
        category: 'testimonials',
        id: 'two',
        title: 'Testimonials section',
        previewLink: '/preview/veil/testimonials/two',
    },
    {
        kit: 'veil',
        category: 'call-to-action',
        id: 'three',
        title: 'Call to action section',
        previewLink: '/preview/veil/call-to-action/three',
    },
    {
        kit: 'veil',
        category: 'footer',
        id: 'five',
        title: 'Footer',
        previewLink: '/preview/veil/footer/five',
    },
]

export default async function Home() {
    'use cache'
    return (
        <>
            <section
                data-theme="veil"
                className="dark:bg-background bg-white">
                <div className="mx-4 max-w-7xl px-4 pb-12 pt-24 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="inline-flex flex-wrap justify-center gap-2 text-balance font-serif text-4xl font-medium sm:text-5xl">
                            Shadcn Blocks <span className="text-muted-foreground">for</span> Super Simple <MistKitLogo /> Websites
                        </h1>
                        <p className="text-forground/60 mx-auto mb-6 mt-4 max-w-md text-balance text-lg">Build super minimalist, distraction-free marketing websites.</p>

                        <Button asChild>
                            <Link href="/veil/hero-section">
                                Explore blocks <span className="border-l-background/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="ml-3 pr-2.5"
                            asChild>
                            <Link
                                target="_blank" rel="noopener noreferrer"
                                href="https://github.com/tailark/blocks/blob/main/packages/veil-kit/README.md">
                                Docs
                                <ArrowUpRight className="size-3.5! opacity-50" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {blocks.map((block, index) => (
                    <BlockPreview
                        key={index}
                        previewOnly
                        {...block}
                    />
                ))}
            </section>
            <div
                data-theme="veil"
                className="dark:bg-background bg-white">
                <SiteFooter />
            </div>
        </>
    )
}

const MistKitLogo = () => (
    <div
        aria-hidden
        className="inset-ring inset-ring-foreground/25 bg-linear-to-b dark:inset-shadow-2xs inset-shadow-white/25 rounded-(--radius) from-primary to-foreground/50 relative flex size-11 translate-y-0.5 items-center justify-center shadow-lg shadow-black/20 dark:shadow-white/10">
        <Atom className="mask-b-from-25% z-1 relative size-6 fill-white stroke-white drop-shadow-sm" />
        <Atom className="z-2 absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
        <Atom
            strokeDasharray="1 2"
            className="absolute inset-0 m-auto size-10 stroke-white stroke-[0.2px] opacity-65 drop-shadow-sm"
        />
    </div>
)

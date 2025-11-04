import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@tailark/core/ui/button'
import { BookOpen, CircleArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wiki-Style Marketing Blocks | Tailark Mist',
    description: 'Build elegant, wiki-style marketing websites with pre-built UI blocks based on Shadcn UI',
}

export default function Home() {
    const blocks = [
        {
            kit: 'mist',
            category: 'hero-section',
            id: 'one',
            title: 'Hero section',
            previewLink: '/preview/mist/hero-section/one',
        },
        {
            kit: 'mist',
            category: 'features',
            id: 'one',
            title: 'Features section',
            previewLink: '/preview/mist/features/one',
        },
        {
            kit: 'mist',
            category: 'features',
            id: 'six',
            title: 'Features section',
            previewLink: '/preview/mist/features/six',
        },
        {
            kit: 'mist',
            category: 'features',
            id: 'ten',
            title: 'Features section',
            previewLink: '/preview/mist/features/ten',
        },
        {
            kit: 'mist',
            category: 'stats',
            id: 'four',
            title: 'Stats section',
            previewLink: '/preview/mist/stats/four',
        },
        {
            kit: 'mist',
            category: 'pricing',
            id: 'one',
            title: 'Pricing section',
            previewLink: '/preview/mist/pricing/one',
        },
        {
            kit: 'mist',
            category: 'pricing',
            id: 'two',
            title: 'Pricing section',
            previewLink: '/preview/mist/pricing/two',
        },
        {
            kit: 'mist',
            category: 'comparator',
            id: 'one',
            title: 'Comparator section',
            previewLink: '/preview/mist/comparator/one',
        },
        {
            kit: 'mist',
            category: 'team',
            id: 'one',
            title: 'Team section',
            previewLink: '/preview/mist/team/one',
        },
        {
            kit: 'mist',
            category: 'contact',
            id: 'one',
            title: 'Contact section',
            previewLink: '/preview/mist/contact/one',
        },
        {
            kit: 'mist',
            category: 'login',
            id: 'one',
            title: 'Login section',
            previewLink: '/preview/mist/login/one',
        },
        {
            kit: 'mist',
            category: 'faqs',
            id: 'two',
            title: 'FAQs section',
            previewLink: '/preview/mist/faqs/two',
        },
        {
            kit: 'mist',
            category: 'testimonials',
            id: 'two',
            title: 'Testimonials section',
            previewLink: '/preview/mist/testimonials/two',
        },
        {
            kit: 'mist',
            category: 'footer',
            id: 'three',
            title: 'Footer',
            previewLink: '/preview/mist/footer/three',
        },
    ]
    return (
        <>
            <section>
                <div className="mx-4 max-w-7xl px-4 py-12 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-md text-center">
                        <h1 className="inline-flex flex-wrap justify-center gap-2 text-balance text-3xl font-semibold sm:text-4xl">
                            Shadcn Blocks <span className="text-muted-foreground">for</span> Wiki-Style <MistKitLogo /> Websites
                        </h1>
                        <p className="text-forground/60 mx-auto mb-6 mt-4 max-w-md text-balance text-lg">Craft Sleek, Notion-Inspired Marketing Pages. Built on top of Shadcn UI.</p>

                        <Button asChild>
                            <Link href="/mist/hero-section">Explore blocks</Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="ml-3 pr-3.5"
                            asChild>
                            <Link
                                target="_blank"
                                href="https://github.com/tailark/blocks/blob/main/packages/mist-kit/README.md">
                                Docs
                                <CircleArrowOutUpRightIcon
                                    strokeWidth={2}
                                    className="size-3! opacity-50"
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            {blocks.map((block, index) => (
                <BlockPreview
                    key={index}
                    previewOnly
                    {...block}
                />
            ))}
            <SiteFooter />
        </>
    )
}

const MistKitLogo = () => (
    <div
        aria-hidden
        className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-lime-300 to-teal-600 shadow-lg shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
        <BookOpen className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
        <BookOpen className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
        <div className="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"></div>
    </div>
)

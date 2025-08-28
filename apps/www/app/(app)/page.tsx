import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@tailark/core/ui/button'
import { ArrowRight, MoonStar } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    const blocks = [
        {
            kit: 'dusk',
            category: 'hero-section',
            id: 'one',
            title: 'Hero section',
            previewLink: '/preview/dusk/hero-section/one',
        },
        {
            kit: 'dusk',
            category: 'hero-section',
            id: 'nine',
            title: 'Hero section',
            previewLink: '/preview/dusk/hero-section/nine',
        },
        {
            kit: 'dusk',
            category: 'features',
            id: 'eleven',
            title: 'Features section',
            previewLink: '/preview/dusk/features/eleven',
        },
        {
            kit: 'dusk',
            category: 'features',
            id: 'nine',
            title: 'Features section',
            previewLink: '/preview/dusk/features/nine',
        },
        {
            kit: 'dusk',
            category: 'integrations',
            id: 'three',
            title: 'Integrations section',
            previewLink: '/preview/dusk/integrations/three',
        },
        {
            kit: 'dusk',
            category: 'team',
            id: 'one',
            title: 'Team section',
            previewLink: '/preview/dusk/team/one',
        },
        {
            kit: 'dusk',
            category: 'pricing',
            id: 'five',
            title: 'Pricing section',
            previewLink: '/preview/dusk/pricing/five',
        },
        {
            kit: 'dusk',
            category: 'comparator',
            id: 'one',
            title: 'Comparator section',
            previewLink: '/preview/dusk/comparator/one',
        },
        {
            kit: 'dusk',
            category: 'faqs',
            id: 'two',
            title: 'FAQs section',
            previewLink: '/preview/dusk/faqs/two',
        },
        {
            kit: 'dusk',
            category: 'contact',
            id: 'two',
            title: 'Contact section',
            previewLink: '/preview/dusk/contact/two',
        },
    ]
    return (
        <>
            <section>
                <div className="mx-4 max-w-7xl px-4 py-12 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-sm text-center">
                        <Link
                            href="/docs"
                            className="rounded-(--radius) dark:hover:bg-muted/25 ring-foreground/[0.065] mx-auto flex w-fit items-center gap-2 p-1 pr-3 shadow-sm ring-1">
                            <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                            <span className="text-sm">Shadcn CLI 3.0 Support</span>
                            <span className="bg-(--color-border) block h-4 w-px"></span>

                            <ArrowRight className="size-4" />
                        </Link>
                        <h1 className="mt-8 inline-flex flex-wrap justify-center gap-2 text-balance text-3xl font-semibold sm:text-4xl">
                            Shadcn Blocks <span className="text-muted-foreground">for</span> Modern <DuskKitLogo /> Websites
                        </h1>
                        <p className="text-forground/60 mx-auto mb-6 mt-4 max-w-md text-balance text-lg">Modern, Responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button asChild>
                            <Link href="/hero-section">Explore blocks</Link>
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

const DuskKitLogo = () => (
    <div
        aria-hidden
        className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-purple-300 to-blue-600 shadow-lg shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
        <div className="absolute inset-x-0 inset-y-2.5 border-y border-dotted border-white/25"></div>
        <div className="absolute inset-x-2.5 inset-y-0 border-x border-dotted border-white/25"></div>
        <MoonStar className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
        <MoonStar className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    </div>
)

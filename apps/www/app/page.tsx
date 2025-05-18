import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@tailark/core/ui/button'
import { MoonStar } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <SiteHeader />
            <section>
                <div className="mx-4 max-w-7xl px-4 py-12 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-sm text-center">
                        <h1 className="inline-flex flex-wrap justify-center gap-2 text-balance text-3xl font-semibold sm:text-4xl">
                            Shadcn Blocks <span className="text-muted-foreground">for</span> Mordern <DuskKitLogo /> Websites
                        </h1>
                        <p className="text-forground/60 mx-auto mb-6 mt-4 max-w-md text-balance text-lg">Modern, Responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button asChild>
                            <Link href="/hero-section">Explore blocks</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/hero-section/one"
                category="page"
                title="Hero section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/hero-section/nine"
                category="page"
                title="Hero section"
                id="nine"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/features/eleven"
                category="page"
                title="Features section"
                id="eleven"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/features/nine"
                category="page"
                title="Features section"
                id="nine"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/integrations/three"
                category="page"
                title="Integrations section"
                id="three"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/team/one"
                category="page"
                title="Team section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/pricing/five"
                category="page"
                title="Pricing section"
                id="five"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/comparator/one"
                category="page"
                title="Comparator section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/faqs/two"
                category="page"
                title="FAQs section"
                id="two"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/dusk/contact/two"
                category="page"
                title="Contact section"
                id="two"
            />
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

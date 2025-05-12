import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@tailark/core/ui/button'
import { BookOpen, CircleArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wiki-Style Marketing Blocks | Tailark Mist',
    description: 'Build elegant, wiki-style marketing websites with pre-built UI blocks based on Shadcn UI',
}

export default function Home() {
    return (
        <>
            <SiteHeader />
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
                                href="https://github.com/tailark/blocks/packages/mist-kit?tab=readme-ov-file">
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
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/hero-section/one"
                category="page"
                title="Hero section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/features/one"
                category="page"
                title="Features section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/features/six"
                category="page"
                title="Features section"
                id="six"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/features/ten"
                category="page"
                title="Features section"
                id="ten"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/stats/four"
                category="page"
                title="About page"
                id="four"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/pricing/two"
                category="page"
                title="Pricing page"
                id="two"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/comparator/one"
                category="page"
                title="Comparator section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/team/one"
                category="page"
                title="Team section"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/contact/one"
                category="page"
                title="Contact page"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/login/one"
                category="page"
                title="Login page"
                id="one"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/faqs/two"
                category="page"
                title="FAQs section"
                id="two"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/testimonials/two"
                category="page"
                title="Testimonials section"
                id="two"
            />
            <BlockPreview
                previewOnly
                previewLink="/preview/mist/footer/three"
                category="page"
                title="Footer"
                id="three"
            />
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

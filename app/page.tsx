import BlockPreview from '@/components/BlockPreview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <SiteHeader />
            <section>
                <div className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-balance text-3xl font-bold sm:text-4xl">Shadcn Marketing Blocks</h1>
                        <p className="mb-6 mt-3 text-balance text-base">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button>
                            <Link href="/hero-section">Explore blocks</Link>
                        </Button>
                        <p className="text-muted-foreground mt-12 text-sm">
                            <span className="text-primary font-semibold">Just Released:</span> New block categories including{' '}
                            <Link
                                href="/integrations"
                                className="text-blue-600 hover:underline dark:text-blue-400">
                                Integrations
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:underline dark:text-blue-400">
                                Forgot Password
                            </Link>
                            . We've also added 3 new{' '}
                            <Link
                                href="/faqs"
                                className="text-blue-600 hover:underline dark:text-blue-400">
                                FAQ
                            </Link>{' '}
                            blocks to enhance your site's user experience.
                        </p>
                    </div>
                </div>
            </section>
            <BlockPreview
                previewOnly
                preview="/examples/home/one"
                category="page"
                title="Home page"
            />
            <BlockPreview
                previewOnly
                preview="/examples/pricing/one"
                category="page"
                title="Pricing page"
            />
            <BlockPreview
                previewOnly
                preview="/examples/about/one"
                category="page"
                title="About page"
            />
            <SiteFooter />
        </>
    )
}

import BlockPreview from '@/components/block-preview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@tailark/core/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <SiteHeader />
            <section>
                <div className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-muted-foreground mb-12 text-balance text-sm">
                            <span className="text-primary font-semibold">NSUI is now Tailark:</span> same modern marketing blocks, new name. Built with shadcn UI and TailwindCSS.
                        </p>
                        <h1 className="text-balance text-3xl font-bold sm:text-4xl">Shadcn Marketing Blocks</h1>
                        <p className="mb-6 mt-3 text-balance text-base">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button>
                            <Link href="/hero-section">Explore blocks</Link>
                        </Button>
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
                preview="/examples/about/one"
                category="page"
                title="About page"
            />
            <SiteFooter />
        </>
    )
}

import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export const revalidate = false
export const dynamic = 'force-static'

export default function EarlyAccess() {
    return (
        <div className="bg-muted/25 dark:bg-background flex min-h-dvh flex-col pt-8 [--color-muted-foreground:var(--color-zinc-600)] [--color-primary:var(--color-indigo-500)] [--color-ring:var(--color-primary)] md:pt-16 dark:[--color-muted-foreground:var(--color-zinc-300)] dark:[--color-primary-foreground:var(--color-white)]">
            <div className="mx-auto w-full max-w-2xl px-4 py-10">
                <div>
                    <h1 className="text-foreground mb-8 text-4xl font-bold tracking-tight">Tailark Registry</h1>
                    <div className="text-muted-foreground mt-6 space-y-6">
                        <p>
                            Tailark Quartz is a comprehensive Shadcn UI kit designed to <span className="text-foreground font-medium">help you build and scale beautiful marketing websites</span>. Our vision is to provide a complete and scalable solution with a vast library of flexible, customizable blocks that empower you to create stunning sites without being constrained by rigid templates.
                        </p>
                        <p>As we are currently in an early beta phase, some parts of Quartz are still under active development. This means you might encounter issues, and some features, like the registry, are not yet available. We are working hard to optimize all blocks and roll out new features progressively.</p>

                        <p>Here’s what you can expect in the coming weeks:</p>

                        <p>We appreciate your support and feedback during this early access phase. Your input is invaluable as we continue to build and improve Tailark Quartz.</p>
                    </div>
                </div>

                <div
                    id="docs"
                    className="pt-12 md:pt-24">
                    <h2 className="text-foreground font-medium">MCP</h2>
                    <p className="text-muted-foreground mt-6">The registry for Quartz is not yet available. Here’s how you can manually add the theme and components to get started.</p>
                </div>
            </div>

            <div className="mx-auto mt-auto w-full max-w-2xl pt-12">
                <SiteFooter />
            </div>
        </div>
    )
}

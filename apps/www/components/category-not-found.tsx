import React from 'react'
import { Button } from '@tailark/core/ui/button'
import Link from 'next/link'
import { BorderBeam } from '@tailark/core/magicui/border-beam'

export default function CategoryNotFound({ categoryName, kitName }: { categoryName: string; kitName: string }) {
    const categoryDisplay = categoryName
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')

    const kitDisplay = kitName === 'dusk-kit' ? 'Shadcn' : kitName.replace('-kit', '').charAt(0).toUpperCase() + kitName.replace('-kit', '').slice(1)

    return (
        <section className="bg-muted mb-6 flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center gap-4 border-b py-16 text-center md:mb-12 dark:bg-transparent">
            <div
                aria-hidden
                className="-mt-16 flex gap-4 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                <div className="rounded-(--radius) size-32 -translate-x-1/3 translate-y-1/2">
                    <div className="rounded-(--radius) bg-background absolute inset-0 border shadow-md"></div>
                    <BorderBeam
                        size={100}
                        duration={12}
                        delay={6}
                        className="from-transparent via-indigo-400 to-sky-300"
                    />
                </div>
                <div className="rounded-(--radius) relative size-32 overflow-hidden">
                    <div className="rounded-(--radius) bg-background absolute inset-0 border shadow-md"></div>
                    <BorderBeam
                        size={200}
                        duration={12}
                        className="from-transparent via-lime-400 to-transparent"
                    />
                </div>
            </div>

            <h2 className="text-xl font-semibold">Blocks Not Yet Created</h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-md text-balance">
                The <span className="text-foreground font-medium">{categoryDisplay}</span> category doesn't have any blocks for the <span className="text-foreground font-medium">{kitDisplay}</span> kit yet.
            </p>
            <Button
                asChild
                variant="outline"
                size="sm">
                <Link
                    href="https://github.com/tailark/blocks"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contribute Blocks
                </Link>
            </Button>
        </section>
    )
}

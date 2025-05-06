import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ArrowUp, Globe, Plus } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="bg-muted [--color-primary:var(--color-indigo-500)]">
                <section className="overflow-hidden">
                    <div className="py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                            <div className="perspective-midrange text-left">
                                <div className="rotate-x-12 before:bg-background">
                                    <div className="bg-background/75 inset-ring-1 inset-ring-background border-foreground/10 mx-auto max-w-sm rounded-2xl border p-3 shadow-xl backdrop-blur-3xl">
                                        <div className="bg-foreground/5 space-y-3 rounded-lg p-3">
                                            <div className="text-muted-foreground text-sm">Ask Anything</div>

                                            <div className="flex justify-between">
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="size-7 rounded-2xl bg-transparent shadow-none">
                                                        <Plus />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="size-7 rounded-2xl bg-transparent shadow-none">
                                                        <Globe />
                                                    </Button>
                                                </div>

                                                <Button
                                                    size="icon"
                                                    className="size-7 rounded-2xl bg-black">
                                                    <ArrowUp strokeWidth={3} />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Manage projects from beginning to end</h1>

                                <p className="mx-auto my-6 max-w-2xl text-balance text-lg">Highly customizable components for building modern websites</p>

                                <div className="flex items-center justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="#link">
                                            <span className="text-nowrap">Get Started Now</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-muted-foreground text-sm">Trusted by teams at :</p>
                                <div className="mt-4 flex items-center justify-center gap-12">
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

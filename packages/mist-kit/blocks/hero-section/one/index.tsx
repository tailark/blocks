import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="bg-muted/50 overflow-hidden [--color-primary:var(--color-emerald-500)]">
                <section>
                    <div className="relative py-24">
                        <div className="mx-auto max-w-5xl px-6">
                            <div>
                                <h1 className="mt-8 max-w-2xl text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Build 10x Faster with Mist</h1>
                                <p className="my-6 max-w-2xl text-balance text-2xl">Write. Plan. Collaborate. With a little help from AI.</p>

                                <div className="flex items-center gap-3">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
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
                                <div className="mt-4 flex items-center gap-12">
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

                            <div className="relative -mr-56 mt-16 sm:mr-0">
                                <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-black/10 shadow-lg shadow-black/10">
                                    <img
                                        src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fshared%2Fnotion-products%2Fprojects.png&w=3840&q=75"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

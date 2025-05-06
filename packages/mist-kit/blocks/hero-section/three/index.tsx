import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="bg-muted overflow-hidden">
                <section>
                    <div className="relative py-36">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="w-1/2">
                                <div>
                                    <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Let your AI Personal assistant manage your meetings.</h1>
                                    <p className="my-6 max-w-2xl text-balance text-xl">Highly customizable components for building modern websites</p>

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
                            </div>

                            <div className="absolute inset-y-0 left-1/2 right-0 overflow-hidden">
                                <img
                                    className="-translate-x-1/20 absolute inset-0 mix-blend-darken"
                                    src="https://images.unsplash.com/photo-1577713523629-77904e534cc4?q=80&w=2357&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="rounded-(--radius) absolute -right-20 bottom-6 left-20 top-20 my-auto border border-black/5 shadow-xl"
                                    src="/card.png"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

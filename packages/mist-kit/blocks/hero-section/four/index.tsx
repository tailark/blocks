import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ArrowUp, Globe, Plus, Sparkle } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-orange-50 [--muted:hsl(27_31%_93%)]">
                <section>
                    <div className="relative py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <div className="w-1/2">
                                <div>
                                    <h1 className="mt-8 max-w-3xl text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Build modern websites faster with Tailark</h1>
                                    <p className="my-6 max-w-2xl text-balance text-lg">Highly customizable components for building modern websites</p>

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
                        </div>
                        <div className="ml-auto w-1/2 overflow-hidden border">
                            <img
                                className="-translate-y-1/10 absolute inset-0 translate-x-1/4 scale-150 mix-blend-darken"
                                src="https://images.unsplash.com/photo-1743260671521-603dce521b6a?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <div className="bg-background/75 inset-ring-1 inset-ring-background border-foreground/10 translate-x-4/5 absolute inset-0 m-auto size-fit max-w-sm translate-y-6 rounded-2xl border p-6 shadow-xl backdrop-blur-3xl">
                                <div className="flex gap-1">
                                    <div className="bg-foreground/10 size-2 rounded-full" />
                                    <div className="bg-foreground/10 size-2 rounded-full" />
                                    <div className="bg-foreground/10 size-2 rounded-full" />
                                </div>

                                <div className="mt-6 text-center">
                                    <div className="flex justify-center gap-1">
                                        <div className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 relative flex size-5 items-center justify-center rounded-full border from-purple-300 to-indigo-600 shadow-md shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
                                            <div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15"></div>
                                            <div className="absolute inset-px aspect-square rounded-full border border-dashed border-white/25"></div>
                                            <Sparkle className="size-3 fill-white stroke-white drop-shadow-sm" />
                                        </div>
                                        <span className="text-[15px] font-medium">Mist AI</span>
                                    </div>
                                    <p className="text-foreground/75 mx-auto mt-3 max-w-40 text-balance leading-tight">Your Personnal AI When it really matters</p>
                                    <div className="border-background bg-foreground/10 inline-flex h-0.5 w-20 border-b"></div>
                                </div>

                                <div className="mb-8 mt-4 space-y-6">
                                    <div className="max-w-3/4 ml-auto w-fit">
                                        <p className="border-foreground/5 bg-foreground/5 mb-2 rounded-l-2xl rounded-t-2xl rounded-br border p-4 text-sm">Mollitia rerum est quisquam nobis ut cumque, dolore earum a voluptate esse. Illo, rerum esse?</p>
                                        <span className="text-muted-foreground block text-right text-xs">Now</span>
                                    </div>
                                    <div className="max-w-3/4 w-fit">
                                        <Sparkle className="size-4 fill-white stroke-white drop-shadow-md" />
                                        <p className="mt-2 text-sm">Mollitia rerum est quisquam nobis ut cumque, dolore earum a voluptate esse. Illo, rerum esse?</p>
                                    </div>
                                </div>

                                <div className="bg-foreground/5 -mx-3 -mb-3 space-y-3 rounded-lg p-3">
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
                </section>
            </main>
        </>
    )
}

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import Image from 'next/image'
import { Apple, Box, Rocket } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="bg-muted overflow-hidden">
                <section>
                    <div className="relative pb-36">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="perspective-midrange relative overflow-hidden pt-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                                <div className="rotate-y-12 relative h-80 overflow-hidden">
                                    <div className="bg-background max-w-76 m-auto rounded-3xl border p-2 shadow-xl">
                                        <Image
                                            className="rounded-2xl border border-black/5"
                                            src="/mist/notion-mobile-2.png"
                                            alt="app screen"
                                            width="2880"
                                            height="1842"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl lg:mt-8">
                                        Your <span className="bg-linear-to-r/increasing to-primary from-emerald-300 bg-clip-text text-transparent">Personal AI</span>, With you Anywhere
                                    </h1>
                                    <p className="mx-auto my-6 max-w-2xl text-balance text-xl">Craft. Build. Ship Modern Websites.</p>

                                    <div className="flex items-center justify-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline">
                                            <Link href="#link">
                                                <Apple className="fill-foreground" />
                                                <span className="text-nowrap">Get it Now</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline">
                                            <Link href="#link">
                                                <Box className="fill-foreground" />
                                                <span className="text-nowrap">Get it Now</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="text-muted-foreground text-sm">Trusted by teams at :</p>
                                    <div className="mt-4 flex items-center justify-center gap-12">
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-5 w-fit"
                                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                                alt="Nvidia Logo"
                                                height="20"
                                                width="auto"
                                            />
                                        </div>

                                        <div className="flex">
                                            <img
                                                className="mx-auto h-4 w-fit"
                                                src="https://html.tailus.io/blocks/customers/column.svg"
                                                alt="Column Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-4 w-fit"
                                                src="https://html.tailus.io/blocks/customers/github.svg"
                                                alt="GitHub Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-5 w-fit"
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
                    </div>
                </section>
            </main>
        </>
    )
}

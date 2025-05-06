import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { Sparkle } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main>
                <section className="overflow-hidden">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                            <div>
                                <Link
                                    href="#"
                                    className="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150">
                                    <div
                                        aria-hidden
                                        className="border-background bg-linear-to-b dark:inset-shadow-2xs relative flex size-5 items-center justify-center rounded border from-pink-300 to-indigo-600 shadow-md shadow-black/20 ring-1 ring-black/10">
                                        <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
                                        <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
                                        <Sparkle className="size-3 fill-white stroke-white drop-shadow" />
                                    </div>
                                    <span className="font-medium">Introducing Mist Agents</span>
                                </Link>
                                <h1 className="mx-auto mt-8 max-w-xl text-balance text-4xl font-bold sm:text-5xl lg:text-6xl">Rapidly Deliver Apps that Works</h1>
                                <p className="text-foreground mx-auto my-6 max-w-xl text-balance text-xl">Craft. Build. Ship Modern Websites With AI Support.</p>

                                <div className="flex items-center justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 mx-auto max-w-5xl px-6">
                                <div className="mt-12 md:mt-16">
                                    <img
                                        src="https://illustrations.popsy.co/white/graphic-design.svg"
                                        alt=""
                                        className="absolute -right-12 -top-12 w-1/3 sm:-top-20 lg:-top-36"
                                    />
                                    <div className="bg-background md:rounded-(--radius) relative mx-auto overflow-hidden rounded border border-black/15 shadow-lg shadow-black/5">
                                        <Image
                                            src="/mist/notion-2.png"
                                            alt="app screen"
                                            width="2880"
                                            height="1842"
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

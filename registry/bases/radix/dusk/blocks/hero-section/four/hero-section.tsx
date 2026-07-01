import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/four/header'

import { ArrowUp, Link, Mic2, Plus } from 'lucide-react'
import { Kbd } from '@/registry/bases/radix/dusk/ui/kdb'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/four/logo-cloud'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="@container overflow-x-hidden">
                <section>
                    <div className="pt-32 lg:pt-16">
                        <div className="relative mx-auto grid max-w-7xl items-center px-6 md:grid-cols-2 md:gap-12">
                            <div className="text-center md:text-left">
                                <h1 className="mb-10 text-balance text-5xl font-medium tracking-tight">Build Software businesses can rely on</h1>

                                <div className="flex gap-2 max-md:justify-center">
                                    <Button>Get Started</Button>
                                    <Button
                                        variant="ghost"
                                        aria-label="Download App"
                                        className="hover:bg-transparent"
                                    >
                                        <Kbd>D</Kbd>
                                        Download App
                                    </Button>
                                </div>
                            </div>
                            <div className="h-100 md:h-180 relative flex items-center">
                                <div className="absolute inset-0 z-10 m-auto h-fit md:-translate-y-7 md:px-12">
                                    <div className="relative">
                                        <div className="bg-card ring-foreground/15 mt-auto h-fit rounded-3xl p-3 shadow-xl shadow-black/25 ring">
                                            <div className="text-muted-foreground p-2 pb-3 text-sm">Ask Tailark what you need...</div>
                                            <div className="flex justify-between gap-3">
                                                <div className="flex items-center gap-1">
                                                    <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                                                        <Plus />
                                                    </div>
                                                    <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                                                        <Mic2 />
                                                    </div>
                                                </div>

                                                <div className="bg-foreground text-background flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                                                    <ArrowUp />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Image
                                    src="https://images.unsplash.com/photo-1618003787019-95b65cc875d2?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="flower background"
                                    className="mask-b-from-65% size-full scale-90 object-cover object-[25%_50%] mix-blend-lighten"
                                    width={2148}
                                    height={1611}
                                    sizes="(max-width: 768px) 100vw, 720px"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

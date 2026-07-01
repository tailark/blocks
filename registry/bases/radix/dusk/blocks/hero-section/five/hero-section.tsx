import Link from 'next/link'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/five/header'
import { ChevronRight } from 'lucide-react'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/five/logo-cloud'
import HeroVideo from '@/registry/bases/radix/dusk/blocks/hero-section/five/hero-video'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="lg:min-h-200 sm:aspect-3/2 min-[1996px]:max-h-240 relative mx-auto flex aspect-square flex-col justify-end lg:aspect-auto xl:aspect-video">
                        <div className="relative z-10 flex flex-col justify-end">
                            <div className="mx-auto w-full max-w-7xl px-6 pb-6 lg:pb-12">
                                <div className="flex flex-wrap items-end justify-between gap-4 lg:w-2/3">
                                    <h1 className="max-w-md text-balance text-5xl md:text-6xl">Build 10x Faster with Ada</h1>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            asChild
                                            className="pr-2.5"
                                        >
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                                <ChevronRight className="ml-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mask-y-from-45% mask-b-to-90% 2xl:mask-x-from-90% pointer-events-none absolute inset-0">
                            <HeroVideo />
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

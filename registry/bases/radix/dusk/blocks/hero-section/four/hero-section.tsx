import React from 'react'
import Link from 'next/link'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import Image from 'next/image'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/four/header'
import { Hourglass } from '@/registry/bases/radix/dusk/blocks/hero-section/four/hourglass'
import { InfiniteSlider } from '@/registry/core/ui/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/registry/core/ui/motion-primitives/progressive-blur'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { FirebaseFull } from '@/registry/core/ui/svgs/firebase'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { Claude } from '@/registry/core/ui/svgs/claude'
import { Figma } from '@/registry/core/ui/svgs/figma'
import { Cisco } from '@/registry/core/ui/svgs/cisco'
import { ArrowUp, AudioLines, Github, ImageIcon, Lightbulb, Mic2, Paperclip, Plus, ShoppingBag, Telescope } from 'lucide-react'
import { Kbd } from '@/registry/bases/radix/dusk/ui/kdb'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="@container overflow-x-hidden">
                <section>
                    <div className="pt-16">
                        <div className="relative mx-auto grid max-w-7xl items-center px-6 md:grid-cols-2 md:gap-12">
                            <div className="text-center md:text-left">
                                <h1 className="mb-10 text-balance text-5xl font-medium tracking-tight">
                                    <span className="text-muted-foreground">Understand, operate, and </span> transform your SAP systems.
                                </h1>

                                <div>
                                    <Kbd>D</Kbd>

                                    <span className="ml-2 text-sm font-medium">Download App</span>
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

                                <img
                                    src="/gr-bg.png"
                                    alt=""
                                    className="mask-y-from-85% mask-x-from-65% size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-4">
                    <div className="relative m-auto max-w-7xl px-6">
                        <div className="**:fill-foreground relative flex items-center justify-between py-6">
                            <Bolt
                                height={24}
                                width={58}
                            />
                            <VercelFull
                                height={24}
                                width={100}
                            />
                            <SupabaseFull className="h-7" />
                            <Hulu
                                height={20}
                                width={60}
                            />
                            <Spotify
                                height={28}
                                width={90}
                            />
                            <Beacon
                                height={26}
                                width={92}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

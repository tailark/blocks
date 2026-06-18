'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/five/header'
import { ChevronRight } from 'lucide-react'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { Beacon } from '@/registry/core/ui/svgs/beacon'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="">
                        <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-6 lg:aspect-video">
                            <div className="mx-auto w-full max-w-7xl px-6 pb-6 lg:pb-12">
                                <div className="flex items-end justify-between lg:w-2/3">
                                    <h1 className="max-w-md text-balance text-5xl md:text-6xl">Build 10x Faster with Ada</h1>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            asChild
                                            className="pr-2.5">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                                <ChevronRight className="ml-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mask-y-from-45% mask-b-to-90% pointer-events-none absolute inset-0 aspect-video overflow-hidden">
                            <video
                                autoPlay
                                loop
                                className="size-full object-cover"
                                src="https://videos.pexels.com/video-files/18419650/18419650-uhd_2560_1440_30fps.mp4"
                                onLoadedMetadata={(event) => {
                                    event.currentTarget.playbackRate = 0.5
                                }}
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-background py-6">
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

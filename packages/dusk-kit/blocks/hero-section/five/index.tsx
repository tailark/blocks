import React from 'react'
import Link from 'next/link'
import { Button } from '@tailark/core/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@tailark/core/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@tailark/core/motion-primitives/progressive-blur'
import { ChevronRight } from 'lucide-react'
import { Spotify } from '@tailark/core/components/logos/spotify'
import { VercelFull } from '@tailark/core/components/logos/vercel'
import { Supabase } from '@tailark/core/components/logos/supabase'
import { Hulu } from '@tailark/core/components/logos/hulu'
import { Bolt } from '@tailark/core/components/logos/bolt'
import { Firebase } from '@tailark/core/components/logos/firebase'
import { Beacon } from '@tailark/core/components/logos/beacon'
import { Claude } from '@tailark/core/components/logos/claude'
import { Figma } from '@tailark/core/components/logos/figma'
import { Cisco } from '@tailark/core/components/logos/cisco'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="">
                        <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-6 lg:aspect-video">
                            <div className="mx-auto w-full max-w-7xl pb-6 lg:px-12 lg:pb-32">
                                <div className="max-w-lg">
                                    <h1 className="text-balance text-5xl md:text-6xl xl:text-7xl">Build 10x Faster with NS</h1>
                                    <p className="mt-6 text-balance text-lg">Highly customizable components.</p>

                                    <div className="mt-8 flex items-center gap-2">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 rounded-full pl-5 pr-3 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                                <ChevronRight className="ml-1" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                            <Link href="#link">
                                                <span className="text-nowrap">Request a demo</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-2/3 pointer-events-none absolute inset-1 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                className="not-dark:invert size-full -scale-x-100 object-cover"
                                src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"></video>
                        </div>
                    </div>
                </section>
                <section className="bg-background py-6">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <Bolt
                                        height={22}
                                        width={56}
                                    />
                                    <VercelFull
                                        height={22}
                                        width={84}
                                    />
                                    <Supabase className="h-6" />
                                    <Hulu
                                        height={18}
                                        width={56}
                                    />
                                    <Spotify
                                        height={24}
                                        width={80}
                                    />
                                    <Firebase
                                        height={24}
                                        width={80}
                                    />
                                    <Beacon
                                        height={24}
                                        width={80}
                                    />
                                    <Claude
                                        height={26}
                                        width={90}
                                    />
                                    <Figma
                                        height={24}
                                        width={24}
                                    />
                                    <Cisco
                                        height={30}
                                        width={60}
                                    />
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

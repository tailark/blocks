import React from 'react'
import Link from 'next/link'
import { Button } from '@mist/components/ui/button'
import { HeroHeader } from './header'
import Image from 'next/image'
import { Spotify } from '@tailark/core/components/logos/spotify'
import { VercelFull } from '@tailark/core/components/logos/vercel'
import { Supabase } from '@tailark/core/components/logos/supabase'
import { Hulu } from '@tailark/core/components/logos/hulu'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="bg-muted/50 overflow-hidden">
                <section>
                    <div className="relative py-24">
                        <div className="mx-auto max-w-5xl px-6">
                            <div>
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold lg:text-6xl">Build 10x Faster with Mist</h1>
                                <p className="text-foreground my-6 max-w-2xl text-balance text-2xl">Craft. Build. Ship Modern Websites With AI Support.</p>

                                <div className="flex flex-col items-center gap-3 *:w-full sm:flex-row sm:*:w-fit">
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
                                <p className="text-muted-foreground font-medium">Trusted by teams at :</p>
                                <div className="**:fill-foreground mt-4 flex items-center gap-12">
                                    <Spotify
                                        height={22}
                                        width={73}
                                    />
                                    <VercelFull
                                        height={20}
                                        width={76}
                                    />
                                    <Supabase className="h-[22px]" />
                                    <Hulu
                                        height={16}
                                        width={50}
                                    />
                                </div>
                            </div>

                            <div className="relative -mr-56 mt-16 sm:mr-0">
                                <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                                    <Image
                                        src="/mist/tailark-2.png"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
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

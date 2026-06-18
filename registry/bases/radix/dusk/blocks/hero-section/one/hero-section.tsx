import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/registry/core/ui/motion-primitives/text-effect'
import { AnimatedGroup, type AnimatedGroupProps } from '@/registry/core/ui/motion-primitives/animated-group'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/one/header'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { FirebaseFull } from '@/registry/core/ui/svgs/firebase'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { Claude } from '@/registry/core/ui/svgs/claude'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'

const transitionVariants: AnimatedGroupProps['variants'] = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div className="mx-auto max-w-7xl lg:px-12">
                            <div className="px-6 text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="group mx-auto flex w-fit items-center gap-3 rounded-full p-1 pl-4 transition-colors duration-300">
                                        <span className="text-sm font-medium">New:</span>
                                        <span className="text-muted-foreground text-sm">Introducing Support for AI Models</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-medium tracking-tight md:text-7xl lg:mt-16">
                                    Modern Solutions for Customer Engagement
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="text-muted-foreground mx-auto mt-4 max-w-2xl text-balance text-lg">
                                    Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <Button
                                        key={1}
                                        asChild>
                                        <Link href="#">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>

                                    <Button
                                        key={2}
                                        asChild
                                        variant="ghost">
                                        <Link href="#">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>

                            <div className="mask-b-from-55% relative mt-8 overflow-hidden p-1 max-sm:-mr-56 sm:mt-16">
                                <div className="bg-background ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 relative rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t">
                                    <div className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl"></div>
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/mail2.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/mail2-light.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs **:fill-foreground mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14 md:grid-cols-4">
                            <div className="flex items-center">
                                <Bolt className="mx-auto h-5 w-full" />
                            </div>
                            <div className="flex items-center">
                                <VercelFull className="mx-auto h-4 w-full" />
                            </div>
                            <div className="flex items-center">
                                <SupabaseFull className="mx-auto h-6" />
                            </div>
                            <div className="flex items-center">
                                <Hulu className="mx-auto h-4 w-full" />
                            </div>
                            <div className="flex items-center">
                                <Spotify className="mx-auto h-6 w-full" />
                            </div>
                            <div className="flex items-center">
                                <FirebaseFull className="mx-auto h-6 w-full" />
                            </div>
                            <div className="flex items-center">
                                <Beacon className="mx-auto h-4 w-full" />
                            </div>

                            <div className="flex items-center">
                                <Claude className="mx-auto h-5 w-full" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

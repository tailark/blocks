import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'

import { HeroHeader } from '@/registry/bases/radix/veil/blocks/hero-section/one/header'

import { Supabase } from '@/registry/core/ui/svgs/supabase'
import { Slack } from '@/registry/core/ui/svgs/slack'
import { Twilio } from '@/registry/core/ui/svgs/twilio'
import { Linear } from '@/registry/core/ui/svgs/linear'
import { Figma } from '@/registry/core/ui/svgs/figma'
import { Vercel } from '@/registry/core/ui/svgs/vercel'
import { Firebase } from '@/registry/core/ui/svgs/firebase'
import { ClerkIconLight as Clerk } from '@/registry/core/ui/svgs/clerk'
import { Claude } from '@/registry/core/ui/svgs/claude'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-background">
                    <div className="relative py-32 md:pt-44">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5">
                            <Image
                                src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="hero background"
                                width={2268}
                                height={1740}
                                className="size-full object-cover object-top"
                            />
                        </div>
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="mx-auto max-w-md text-center">
                                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Ship faster. Integrate smarter.</h1>
                                <p className="text-muted-foreground mt-4 text-balance">Veil is your all-in-one engine for adding seamless integrations to your app.</p>

                                <Button
                                    asChild
                                    className="mt-6 pr-1.5"
                                >
                                    <Link href="#link">
                                        <span className="text-nowrap">Start Building</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="mx-auto mt-24 max-w-xl">
                                <div className="**:fill-foreground grid scale-95 grid-cols-3 gap-12">
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Supabase className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Supabase</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Slack className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Slack</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Figma className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Figma</span>
                                        </Card>
                                    </div>
                                    <div className="mr-auto">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Vercel className="size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Vercel</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Firebase className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Firebase</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Linear className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Linear</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Twilio className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Twilio</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Claude className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Claude AI</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-8 w-fit items-center gap-2 rounded-xl px-3 sm:h-10 sm:px-4">
                                            <Clerk className="size-3 sm:size-4" />
                                            <span className="text-nowrap font-medium max-sm:text-xs">Clerk </span>
                                        </Card>
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

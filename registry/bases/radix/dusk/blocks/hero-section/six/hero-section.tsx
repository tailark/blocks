import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowRight, Mail, SendHorizonal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from './header'

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

            <main>
                <section className="overflow-hidden">
                    <div className="relative pt-40">
                        <div className="grid gap-16">
                            <div className="relative mx-auto max-w-7xl px-6">
                                <Link
                                    href="/"
                                    className="flex w-fit items-center gap-2 font-medium">
                                    <span className="text-sm">New</span>
                                    <span className="text-muted-foreground text-sm">Introducing Tailark Dusk 1.0</span>

                                    <ArrowRight className="size-3.5" />
                                </Link>

                                <div className="mt-8 grid grid-cols-2 gap-6">
                                    <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl xl:text-7xl">Agentic Creative canvas</h1>
                                    <div className="mx-auto flex max-w-md flex-col-reverse gap-6">
                                        <Button
                                            className="w-fit"
                                            asChild>
                                            <Link href="#">
                                                <span className="hidden md:block">Get Started</span>

                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Link>
                                        </Button>

                                        <p className="text-muted-foreground text-balance text-lg">Modern websites and applications that look and feel the way you mean it.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto max-w-7xl">
                                <div className="bg-muted relative aspect-video overflow-hidden rounded-3xl">
                                    <div className="bg-background min-w-7xl ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 absolute left-16 top-16 z-10 rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t">
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

                                    <img
                                        src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="size-full rotate-180 rounded-3xl object-cover object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background py-16">
                    <div className="relative m-auto max-w-7xl px-6">
                        <div className="**:fill-foreground relative flex items-center justify-between">
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

import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/six/header'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/six/logo-cloud'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="overflow-hidden">
                    <div className="relative pt-24 lg:pt-40">
                        <div className="space-y-12 md:space-y-16">
                            <div className="relative mx-auto max-w-7xl px-6">
                                <Link
                                    href="/"
                                    className="flex w-fit items-center gap-2 font-medium">
                                    <span>New</span>
                                    <span className="text-muted-foreground">Introducing Tailark Dusk 1.0</span>

                                    <ArrowRight className="size-3.5" />
                                </Link>

                                <div className="mt-8 grid items-end gap-4 md:grid-cols-2 md:gap-6">
                                    <h1 className="text-balance text-5xl font-medium tracking-tight md:text-6xl xl:text-7xl">Agentic Creative canvas</h1>
                                    <div className="mx-auto flex max-w-md flex-col gap-6">
                                        <p className="text-muted-foreground text-balance text-lg">Modern websites and applications that look and feel the way you mean it.</p>

                                        <Button
                                            className="w-fit"
                                            asChild>
                                            <Link href="#">Get Started</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto max-w-7xl max-xl:px-2">
                                <div className="bg-muted md:aspect-5/3 relative aspect-square overflow-hidden rounded-3xl lg:aspect-video">
                                    <div className="bg-background min-w-4xl lg:min-w-5xl xl:min-w-7xl ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 absolute left-4 top-4 z-10 rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t lg:left-16 lg:top-16">
                                        <div className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl"></div>
                                        <Image
                                            className="bg-background aspect-15/8 relative rounded-2xl"
                                            src="/mail2.png"
                                            alt="app screen"
                                            width="2700"
                                            height="1440"
                                        />
                                    </div>

                                    <Image
                                        src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        width={1313}
                                        height={1000}
                                        sizes="(max-width: 768px) 100vw, 1280px"
                                        className="size-full rotate-180 rounded-3xl object-cover object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

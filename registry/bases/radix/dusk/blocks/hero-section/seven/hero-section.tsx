import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/six/header'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/seven/logo-cloud'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="overflow-hidden">
                    <div className="relative pt-24 md:pt-40 lg:pb-20 xl:pt-64">
                        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
                            <div>
                                <Link
                                    href="/"
                                    className="flex w-fit items-center gap-2 font-medium">
                                    <span className="text-sm">New</span>
                                    <span className="text-muted-foreground text-sm">Introducing Tailark CRM 1.0</span>

                                    <ArrowRight className="size-3.5" />
                                </Link>

                                <div className="mt-8 flex max-w-md flex-col gap-4">
                                    <h1 className="text-balance text-5xl font-medium tracking-tight md:text-6xl">
                                        One CRM. <span className="text-muted-foreground">Every customer.</span>
                                    </h1>

                                    <div className="flex max-w-md flex-col gap-6">
                                        <p className="text-muted-foreground">Leads, deals, tasks, and conversations — all through a single unified CRM. Start selling in seconds.</p>

                                        <div className="flex gap-3">
                                            <Button
                                                className="w-fit"
                                                asChild>
                                                <Link href="#">Get Started</Link>
                                            </Button>
                                            <Button
                                                className="w-fit"
                                                variant="outline"
                                                asChild>
                                                <Link href="#">Talk to sales</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:aspect-5/3 lg:aspect-5/4 relative aspect-square overflow-hidden rounded-3xl lg:ml-auto lg:max-w-xl">
                                <div className="bg-background min-w-3xl ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 absolute left-6 top-6 z-10 rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t lg:left-8 lg:top-8">
                                    <div
                                        aria-hidden
                                        className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl"
                                    />
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
                                    alt="background"
                                    width={1313}
                                    height={1000}
                                    sizes="(max-width: 768px) 100vw, 720px"
                                    className="size-full rotate-180 rounded-3xl object-cover object-bottom"
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

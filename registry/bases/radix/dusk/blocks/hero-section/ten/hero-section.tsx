import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/ten/header'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/ten/logo-cloud'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="pt-40 xl:pt-48">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-end gap-4 md:grid-cols-2 md:gap-6">
                            <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">Build Software businesses can rely on</h1>
                            <div className="flex max-w-md flex-col gap-4 md:mx-auto">
                                <p className="text-muted-foreground text-balance text-lg">Leads, deals, tasks, and conversations. </p>

                                <Button
                                    className="w-fit"
                                    asChild
                                >
                                    <Link href="#">Get Started</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-muted relative mt-16 overflow-hidden rounded-xl px-4 pt-6 max-lg:-mx-4 md:px-6 lg:px-8 lg:pt-16">
                            <div className="aspect-3/2 relative z-10 mx-auto flex max-w-5xl -space-x-12 sm:aspect-video lg:-space-x-56">
                                <div className="w-2/3 pt-6 lg:pt-16">
                                    <div className="ring-foreground/6.5 bg-card h-full rounded-t-2xl shadow-2xl shadow-black/35 ring"></div>
                                </div>
                                <div className="ring-foreground/6.5 bg-card relative h-full w-2/3 rounded-t-2xl shadow-2xl shadow-black/35 ring"></div>
                            </div>

                            <Image
                                src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="landscape image"
                                width={2215}
                                height={1477}
                                sizes="(max-width: 768px) 100vw, 1280px"
                                className="absolute inset-0 size-full object-cover"
                            />
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

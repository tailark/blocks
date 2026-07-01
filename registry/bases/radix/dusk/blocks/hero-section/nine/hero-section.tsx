import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/nine/header'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/hero-section/nine/logo-cloud'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="pt-24 lg:pt-40">
                    <div className="mx-auto max-w-7xl px-6">
                        <Link
                            href="/"
                            className="mx-auto flex w-fit items-center gap-2 font-medium"
                        >
                            <span>New</span>
                            <span className="text-muted-foreground">Introducing Tailark Dusk 1.0</span>

                            <ArrowRight className="size-3.5" />
                        </Link>

                        <div className="mx-auto mb-12 mt-8 flex max-w-3xl flex-col justify-center gap-6 text-center md:gap-8">
                            <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">Next gen CRM: Customer universe, beautifully connected</h1>
                            <Button
                                className="mx-auto w-fit"
                                size="lg"
                                asChild
                            >
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <div className="bg-muted relative overflow-hidden rounded-3xl px-4 pt-4 max-lg:-mx-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8">
                            <div className="bg-background ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 relative z-10 rounded-t-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-t-2xl dark:block"
                                    src="/mail2.png"
                                    alt="app screen"
                                    width="2700"
                                    height="1440"
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-t-2xl border dark:hidden"
                                    src="/mail2-light.png"
                                    alt="app screen"
                                    width="2700"
                                    height="1440"
                                />
                            </div>

                            <Image
                                src="https://images.unsplash.com/photo-1761798979849-ebb267341d50?q=80&w=2215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="background image"
                                width={2215}
                                height={1477}
                                sizes="(max-width: 768px) 100vw, 1280px"
                                className="absolute inset-0 size-full rounded-3xl object-cover object-bottom"
                            />
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

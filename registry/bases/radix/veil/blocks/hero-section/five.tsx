import React from 'react'
import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { ChevronRight } from 'lucide-react'
import { Logo } from '@/registry/bases/radix/veil/ui/logo'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <header className="fixed inset-x-0 top-4 z-50 mx-auto w-fit">
                <div className="bg-foreground/5 flex items-center gap-6 rounded-full py-2 pl-5 pr-2 backdrop-blur">
                    <Logo className="h-5" />
                    <Button
                        asChild
                        className="pr-1.5"
                        variant="outline"
                        size="sm"
                    >
                        <Link href="#link">
                            <span className="text-nowrap">Get started</span>
                            <ChevronRight className="opacity-50" />
                        </Link>
                    </Button>
                </div>
            </header>
            <main className="overflow-hidden">
                <section className="bg-background">
                    <div className="relative pb-32 pt-16">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="mask-radial-from-35% aspect-3/2 mask-radial-to-75% pointer-events-none relative mx-auto max-w-xl opacity-75 mix-blend-darken">
                                <div className="bg-background absolute inset-0 mix-blend-overlay"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1634595947394-87012e7b12ba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="watch in dark"
                                    className="not-dark:invert dark:mix-blend-lighten"
                                    width={1340}
                                    height={560}
                                />
                            </div>
                            <div className="mx-auto mt-6 max-w-md text-center">
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
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

import React from 'react'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/three/header'
import { LogoCloud } from '@/registry/bases/radix/dusk/blocks/hero-section/three/logo-cloud'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <div className="bg-background/50 mask-b-from-10% fixed inset-x-0 top-0 z-30 h-20 backdrop-blur-sm"></div>
            <div className="bg-background/50 mask-b-from-10% fixed inset-x-0 top-0 z-30 h-20 backdrop-blur-sm"></div>

            <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
                <section>
                    <div className="relative mx-auto px-4 pb-20 pt-32 lg:pt-56">
                        <div className="relative z-10">
                            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                                <h1 className="relative z-10 mx-auto max-w-xl text-balance text-center text-4xl font-medium tracking-tight">
                                    <span className="text-muted-foreground">Train Smarter. Recover faster with</span> a personal coach
                                </h1>
                            </div>

                            <div className="relative mt-16 rounded-2xl">
                                <div className="aspect-27/58 rounded-4xl ring-foreground/15 mt-18 max-w-74 after:border-foreground/5 absolute inset-0 z-10 mx-auto border border-black/15 bg-zinc-900/75 shadow-2xl ring backdrop-blur after:absolute after:-inset-3 after:rounded-[2.5rem] after:border"></div>

                                <div
                                    aria-hidden
                                    className="aspect-27/58 absolute inset-0 z-20 mx-auto mt-20 max-w-72 overflow-hidden mix-blend-lighten">
                                    <div className="">
                                        <div>
                                            <Image
                                                src="/strava.png"
                                                alt="strava app screenshot"
                                                width={1284}
                                                height={2778}
                                                className="rounded-4xl size-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="https://img.magnific.com/free-photo/meditating-female-is-sitting-grass-mountains_651396-2302.jpg?t=st=1781599122~exp=1781602722~hmac=2c669825838df50215cd2b17d81b6ff9469386bf4f044adcb3b96e59d7109cbf&w=2000"
                                    alt="hero background"
                                    width={1000}
                                    height={1000}
                                    className="rounded-4xl w-full grayscale"
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

const AppComponent = () => {
    return (
        <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
            <div className="flex items-center gap-1.5 text-orange-400">
                <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32">
                    <g fill="none">
                        <path
                            fill="#ff6723"
                            d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"></path>
                        <path
                            fill="#ffb02e"
                            d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"></path>
                    </g>
                </svg>
                <div className="text-sm font-medium">Weekly training</div>
            </div>
            <div className="space-y-3">
                <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">You're completing more sessions than last month — keep the momentum going.</div>
                <div className="space-y-3">
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">4</span>
                            <span className="text-muted-foreground text-xs">Sessions/week</span>
                        </div>
                        <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">This month</div>
                    </div>
                    <div className="space-y-1">
                        <div className="space-x-1">
                            <span className="text-foreground align-baseline text-xl font-medium">2</span>
                            <span className="text-muted-foreground text-xs">Sessions/week</span>
                        </div>
                        <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">Last month</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

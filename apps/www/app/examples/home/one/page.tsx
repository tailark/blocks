import Link from 'next/link'
import { Button } from '@tailark/core/ui/button'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@tailark/core/ui/card'
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@tailark/core/ui/avatar'
import { ExampleFeatures } from '@/components/ex-features'

export default function HeroSection() {
    return (
        <>
            <main>
                <div
                    aria-hidden
                    className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white dark:bg-transparent">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:pb-24 lg:pt-32">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Marketing Tools for non Marketers</h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl">Efficiently manage your sales team with our innovative tools. Enhance productivity, and achieve your sales targets!</p>

                            <Button
                                asChild
                                size="lg"
                                className="px-5">
                                <Link href="#">
                                    <span className="btn-label">Start Building</span>
                                </Link>
                            </Button>
                            <span className="text-muted-foreground mt-2 block text-center text-sm">For free</span>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl">
                        <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                            <div className="[transform:rotateX(20deg);]">
                                <div className="lg:h-176 relative skew-x-[.36rad]">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                                    />
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                                    />

                                    <div
                                        aria-hidden
                                        className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />

                                    <Image
                                        className="rounded-(--radius) z-1 relative border dark:hidden"
                                        src="/card.png"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                    <Image
                                        className="rounded-(--radius) z-1 relative hidden border dark:block"
                                        src="/dark-card.webp"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-background relative z-10 py-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/laravel.svg"
                                alt="Laravel Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-7 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lilly.svg"
                                alt="Lilly Logo"
                                height="28"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                alt="Lemon Squeezy Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-6 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                alt="OpenAI Logo"
                                height="24"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                                alt="Tailwind CSS Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/vercel.svg"
                                alt="Vercel Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/zapier.svg"
                                alt="Zapier Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </section>

                <ExampleFeatures />

                <section className="pb-16 md:pb-32">
                    <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                            <h2 className="text-4xl font-semibold">The Lyra ecosystem brings together our models</h2>
                            <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                        </div>
                        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                            <div className="aspect-88/36 relative">
                                <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                                <Image
                                    src="/mail-upper.png"
                                    className="absolute inset-0 z-10"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/mail-back.png"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/mail-back-light.png"
                                    className="dark:hidden"
                                    alt="payments illustration light"
                                    width={2797}
                                    height={1137}
                                />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Faaast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Powerful</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Lock className="size-4" />
                                    <h3 className="text-sm font-medium">Security</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4" />

                                    <h3 className="text-sm font-medium">AI Powered</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-50 py-12 md:py-20 dark:bg-zinc-900/50">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                            <h2 className="text-4xl font-medium lg:text-5xl">Tailark in numbers</h2>
                            <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>

                        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">+1200</div>
                                <p>Stars on GitHub</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">22 Million</div>
                                <p>Active Users</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">+500</div>
                                <p>Powered Apps</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Lyra ecosystem brings together our models.</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                    <Image
                                        src="/payments.png"
                                        className="hidden rounded-[15px] dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/payments-light.png"
                                        className="rounded-[15px] shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>

                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Gemini is evolving to be more than just the models. <span className="text-accent-foreground font-bold">It supports an entire ecosystem</span> — from products innovate.
                                </p>
                                <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                                <div className="pt-6">
                                    <blockquote className="border-l-4 pl-4">
                                        <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                        <div className="mt-6 space-y-3">
                                            <cite className="block font-medium">John Doe, CEO</cite>
                                            <img
                                                className="h-5 w-fit dark:invert"
                                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                                alt="Nvidia Logo"
                                                height="20"
                                                width="auto"
                                            />
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-50 py-16 md:py-32 dark:bg-blue-600">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mx-auto max-w-2xl">
                            <blockquote>
                                <p className="text-lg font-semibold sm:text-xl md:text-3xl">Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                <div className="mt-12 flex items-center gap-6">
                                    <img
                                        className="h-7 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                        alt="Nvidia Logo"
                                        height="20"
                                        width="auto"
                                    />
                                    <div className="space-y-1 border-l pl-6">
                                        <cite className="font-medium">John Doe</cite>
                                        <span className="text-muted-foreground block text-sm">CEO, Nvidia</span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">APIs and platforms helping developers</h2>
                        <div className="relative">
                            <div className="relative z-10 space-y-4 md:w-1/2">
                                <p>
                                    Lyra is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.
                                </p>
                                <p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Zap className="size-4" />
                                            <h3 className="text-sm font-medium">Faaast</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Cpu className="size-4" />
                                            <h3 className="text-sm font-medium">Powerful</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                                <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                                    <Image
                                        src="/charts.png"
                                        className="hidden rounded-[12px] dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/charts-light.png"
                                        className="rounded-[12px] shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <div className="relative z-10 max-w-2xl space-y-6">
                            <h2 className="text-4xl font-medium lg:text-5xl">Loved by thousand developers</h2>
                            <p className="text-balance">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                                <CardHeader>
                                    <img
                                        className="h-6 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nike.svg"
                                        alt="Nike Logo"
                                        height="24"
                                        width="auto"
                                    />
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src="https://tailus.io/images/reviews/shekinah.webp"
                                                    alt="Shekinah Tshiokufila"
                                                    height="400"
                                                    width="400"
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                                                <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card className="md:col-span-2">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src="https://tailus.io/images/reviews/jonathan.webp"
                                                    alt="Jonathan Yombo"
                                                    height="400"
                                                    width="400"
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>JY</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                                <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                        <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src="https://tailus.io/images/reviews/yucel.webp"
                                                    alt="Yucel Faruksahan"
                                                    height="400"
                                                    width="400"
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>YF</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                                <span className="text-muted-foreground block text-sm">Creator, Tailkits</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card className="card variant-mixed">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                        <div className="grid grid-cols-[auto_1fr] gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage
                                                    src="https://tailus.io/images/reviews/rodrigo.webp"
                                                    alt="Rodrigo Aguilar"
                                                    height="400"
                                                    width="400"
                                                    loading="lazy"
                                                />
                                                <AvatarFallback>YF</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">Rodrigo Aguilar</p>
                                                <span className="text-muted-foreground block text-sm">Creator, TailwindAwesome</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center">
                            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                            <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg">
                                    <Link href="/">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline">
                                    <Link href="/">
                                        <span>Book Demo</span>
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

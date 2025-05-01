import { LogoStroke } from '@/components/logo'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
]

export default function HeroSection() {
    return (
        <>
            <main>
                <section className="pt-16 md:pt-32">
                    <div aria-hidden>
                        <div className="bg-linear-to-t from-background -z-9 absolute inset-x-0 top-0 h-2/3 max-h-96 to-transparent"></div>
                        <div className="absolute top-0 -z-10 h-2/3 max-h-96 w-full bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45"></div>
                    </div>
                    <div className="mx-auto max-w-5xl px-6 pt-32 lg:px-0">
                        <div className="mx-auto max-w-2xl space-y-6 text-center">
                            <h1 className="text-balance text-center text-4xl font-medium lg:text-7xl">Building The Next Marketing Platform</h1>
                            <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>
                    </div>
                </section>
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-32">
                        <img
                            className="rounded-(--radius) grayscale"
                            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="team image"
                            height=""
                            width=""
                            loading="lazy"
                        />

                        <div className="mx-auto grid max-w-lg gap-6 md:gap-12">
                            <span className="text-muted-foreground text-sm">Our Mission</span>
                            <h2 className="text-4xl font-medium">The Lyra ecosystem brings together our models, products and platforms.</h2>
                            <div className="space-y-6">
                                <p>Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.</p>

                                <Button
                                    asChild
                                    variant="secondary"
                                    size="sm"
                                    className="gap-1 pr-1.5">
                                    <Link href="#">
                                        <span>Learn More</span>
                                        <ChevronRight className="size-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 md:py-32">
                    <div className="mx-auto max-w-lg">
                        <h2 className="mb-8 text-4xl font-medium md:mb-16">Our Story</h2>
                        <div
                            aria-hidden
                            className="relative -mx-4 mb-8 aspect-video md:mb-16">
                            <div className="bg-background absolute inset-0 m-auto size-fit p-8">
                                <LogoStroke className="h-fit w-20 text-blue-500" />
                            </div>
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        </div>

                        <p className="text-accent-foreground">Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.</p>
                        <p className="mt-4">
                            Tailark. <span className="font-bold">It supports an entire ecosystem</span> — from products innovate. Sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-lg px-6 lg:px-0">
                        <h2 className="mb-8 text-4xl font-medium md:mb-16">Our team</h2>

                        <div>
                            <h3 className="mb-6 text-lg font-medium">Leadership</h3>
                            <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                                {members.map((member, index) => (
                                    <div key={index}>
                                        <div className="bg-background size-16 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                            <img
                                                className="aspect-square rounded-full object-cover"
                                                src={member.avatar}
                                                alt={member.name}
                                                height="460"
                                                width="460"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="mt-2 block text-sm">{member.name}</span>
                                        <span className="text-muted-foreground block text-xs">{member.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="mb-6 text-lg font-medium">Engineering</h3>
                            <div
                                data-rounded="full"
                                className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                                {members.map((member, index) => (
                                    <div key={index}>
                                        <div className="bg-background size-16 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                            <img
                                                className="aspect-square rounded-full object-cover"
                                                src={member.avatar}
                                                alt={member.name}
                                                height="460"
                                                width="460"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="mt-2 block text-sm">{member.name}</span>
                                        <span className="text-muted-foreground block text-xs">{member.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="mb-6 text-lg font-medium">Marketing</h3>
                            <div
                                data-rounded="full"
                                className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                                {members.map((member, index) => (
                                    <div key={index}>
                                        <div className="bg-background size-16 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                            <img
                                                className="aspect-square rounded-full object-cover"
                                                src={member.avatar}
                                                alt={member.name}
                                                height="460"
                                                width="460"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="mt-2 block text-sm">{member.name}</span>
                                        <span className="text-muted-foreground block text-xs">{member.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background py-16">
                    <div className="mx-auto max-w-5xl px-6">
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

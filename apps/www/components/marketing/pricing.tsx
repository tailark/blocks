'use client'
import { Button } from '@tailark/core/ui/button'
import { CircleCheck } from 'lucide-react'
import { CardTitle, CardDescription } from '@tailark/core/ui/card'
import Link from 'next/link'
import { PricingLogoCloud } from './logo-cloud'

export function Pricing() {
    const prices = {
        essentials: 249,
        complete: 299,
        team: 499,
    }

    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://pro.tailark.com'
    const getCheckoutUrl = (plan: string) => {
        return `${baseUrl}/checkout?plan=${plan}`
    }

    return (
        <section
            id="pricing"
            data-theme="global"
            className="scroll-my-24 overflow-hidden pb-32">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-foreground/55 mb-12 block font-mono text-sm tracking-wider">Pricing</h2>

                    <p className="text-foreground/55 text-balance text-3xl font-medium tracking-tight">
                        <span className="text-foreground">Early access pricing.</span> Choose the plan that fits your workflow and save $100+ before launch
                    </p>
                </div>
            </div>

            <div className="md:mt-15 relative mx-auto mt-9 max-w-7xl px-4">
                <div className="@container">
                    <div className="ring-foreground/10 @max-5xl:overflow-hidden @xl:grid-cols-2 @max-5xl:divide-y @5xl:grid-cols-4 bg-background @xl:divide-x grid rounded-xl ring *:p-6">
                        <div className="row-span-4 grid grid-rows-subgrid gap-6">
                            <div>
                                <CardTitle className="text-lg font-medium">Free</CardTitle>
                                <CardDescription className="text-muted-foreground mt-3 text-balance">A strong starting point with free blocks, snippets, and lifetime access.</CardDescription>
                            </div>

                            <div className="text-3xl font-semibold">$0</div>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/blocks">Get access</Link>
                            </Button>

                            <ul
                                role="list"
                                className="space-y-3 text-sm">
                                {['Lifetime Access', 'Unlimited projects', 'Free blocks', 'Free Snippets', 'Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <CircleCheck
                                            className="*:nth-2:stroke-emerald-700 dark:*:nth-2:stroke-emerald-300 size-4 *:first:fill-emerald-500/15 [&>circle]:stroke-emerald-500/5"
                                            strokeWidth={2.5}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="row-span-4 grid grid-rows-subgrid gap-6 border-r-transparent">
                            <div>
                                <CardTitle className="text-lg font-medium">Essentials</CardTitle>
                                <CardDescription className="text-muted-foreground mt-3 text-balance">For solo founders building polished marketing sites with clarity and control.</CardDescription>
                            </div>

                            <div>
                                <div className="text-3xl font-semibold">
                                    ${prices.essentials} <span className="decoration-foreground text-muted-foreground ml-2 line-through">$349</span>
                                </div>
                                <div className="text-muted-foreground mt-1 text-sm">One time payment</div>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                asChild>
                                <Link href={getCheckoutUrl('essentials')}>Get access</Link>
                            </Button>

                            <ul
                                role="list"
                                className="space-y-3 text-sm">
                                {['Everything in Free, plus:', 'Regular Updates', 'Hundreds of premium blocks', 'Premium code snippets', 'Hundreds of premium illustrations', 'Priority support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="group flex items-center gap-2 first:font-medium">
                                        <CircleCheck
                                            className="*:nth-2:stroke-emerald-700 dark:*:nth-2:stroke-emerald-300 size-4 *:first:fill-emerald-500/15 group-first:hidden [&>circle]:stroke-emerald-500/5"
                                            strokeWidth={2.5}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card ring-foreground/10 @5xl:-my-3 @5xl:rounded-xl @xl:border-transparent row-span-4 grid grid-rows-subgrid gap-6 shadow-xl shadow-black/5 ring dark:bg-zinc-900">
                            <div className="@5xl:mt-3 self-end">
                                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                                    Complete <span className="inset-ring-1 inset-ring-emerald-300/50 rounded-full bg-emerald-200/75 px-2 py-0.5 text-xs text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-300">Most Popular</span>
                                </CardTitle>
                                <CardDescription className="text-muted-foreground mt-3 text-balance">The complete marketing system — blocks, illustrations, and production-ready pages.</CardDescription>
                            </div>

                            <div>
                                <div className="text-3xl font-semibold">
                                    ${prices.complete} <span className="decoration-foreground text-muted-foreground ml-2 line-through">$399</span>
                                </div>
                                <div className="text-muted-foreground mt-1 text-sm">One time payment</div>
                            </div>
                            <Button
                                className="bg-primary/90 text-shadow-sm w-full [--color-primary-foreground:var(--color-background)] [--color-primary:var(--color-foreground)]"
                                asChild>
                                <Link href={getCheckoutUrl('complete')}>Get full access</Link>
                            </Button>

                            <div>
                                <ul
                                    role="list"
                                    className="space-y-3 text-sm">
                                    {['Everything in Essentials, plus:', 'Modern landing pages', 'Product pages', 'Solution pages', 'Pricing pages', 'Customers pages', 'Customer Story pages', 'Wall of Love pages', 'About pages', 'Contact pages', 'Blog pages', 'Blog article pages', 'Brand pages', 'Legal pages'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="group flex items-center gap-2 first:font-medium">
                                            <CircleCheck
                                                className="*:nth-2:stroke-emerald-700 dark:*:nth-2:stroke-emerald-300 size-4 *:first:fill-emerald-500/15 group-first:hidden [&>circle]:stroke-emerald-500/5"
                                                strokeWidth={2.5}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="row-span-4 grid grid-rows-subgrid gap-6">
                            <div>
                                <CardTitle className="text-lg font-medium">Team</CardTitle>
                                <CardDescription className="text-muted-foreground mt-3 text-balance">Designed for teams and agencies collaborating at scale.</CardDescription>
                            </div>

                            <div>
                                <div className="text-3xl font-semibold">
                                    ${prices.team} <span className="decoration-foreground text-muted-foreground ml-2 line-through">$799</span>
                                </div>
                                <div className="text-muted-foreground mt-1 text-sm">One time payment</div>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                asChild>
                                <Link href={getCheckoutUrl('team')}>Get full access</Link>
                            </Button>

                            <ul
                                role="list"
                                className="space-y-3 text-sm">
                                {['Everything in Complete, plus:', '10 team members', 'High priority support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="group flex items-center gap-2 first:font-medium">
                                        <CircleCheck
                                            className="*:nth-2:stroke-emerald-700 dark:*:nth-2:stroke-emerald-300 size-4 *:first:fill-emerald-500/15 group-first:hidden [&>circle]:stroke-emerald-500/5"
                                            strokeWidth={2.5}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <PricingLogoCloud />
        </section>
    )
}

export const DiscountBadge = ({ discount }: { discount: number }) => <span className="before:from-primary/25 before:bg-linear-to-r before:-skew-x-4 before:inset-ring-1 before:inset-ring-black/5 relative mb-4 block w-fit px-2 py-1.5 text-lg font-bold before:pointer-events-none before:absolute before:inset-x-0 before:inset-y-0.5 before:rounded-lg before:to-emerald-500/25">-{discount}%</span>

import Link from 'next/link'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-md space-y-6">
                    <h1 className="text-muted-foreground text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Start free.</span> <br /> Upgrade as you scale.
                    </h1>
                </div>

                <div className="mt-12 grid gap-6 border *:p-8 max-lg:mx-auto max-lg:max-w-sm lg:mt-20 lg:grid-cols-3">
                    <div className="flex flex-col gap-8 max-lg:border-b lg:border-r">
                        <div>
                            <p className="text-lg font-medium">Starter</p>
                            <p className="text-muted-foreground text-lg font-medium">For solo developers</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $0 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full"
                            >
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-card relative flex flex-col gap-8 shadow-xl max-lg:border-y lg:border-x">
                        <div className="inset-ring inset-ring-foreground/10 absolute right-0 top-0 w-fit -translate-y-px translate-x-px rounded-bl bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200 [corner-shape:bevel]">Popular</div>
                        <div>
                            <p className="text-lg font-medium">Pro</p>
                            <p className="text-muted-foreground text-lg font-medium">For ambitious founders</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $59 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                asChild
                                className="w-full"
                            >
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['Everything in Free Plan', '5GB Cloud Storage', 'Email and Chat Support', 'Access to Community Forum', 'Single User Access', 'Access to Basic Templates', 'Mobile App Access', '1 Custom Report Per Month', 'Monthly Product Updates', 'Standard Security Features'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8 max-lg:border-t lg:border-l">
                        <div>
                            <p className="text-lg font-medium">Startup</p>
                            <p className="text-muted-foreground text-lg font-medium">For growing businesses and teams</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $99 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                asChild
                                className="w-full"
                                variant="outline"
                            >
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['Everything in Pro Plan', '10GB Cloud Storage', 'Email and Chat Support', 'Access to Community Forum', 'Single User Access', 'Access to Basic Templates', 'Mobile App Access', '1 Custom Report Per Month', 'Monthly Product Updates', 'Standard Security Features'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

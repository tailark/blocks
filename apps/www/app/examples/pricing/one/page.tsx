import { Cpu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const tableData = [
    {
        feature: 'Feature 1',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 2',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 3',
        free: false,
        pro: true,
        startup: true,
    },
    {
        feature: 'Tokens',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
    {
        feature: 'Video calls',
        free: '',
        pro: '12 Weeks',
        startup: '56',
    },
    {
        feature: 'Support',
        free: '',
        pro: 'Secondes',
        startup: 'Unlimited',
    },
    {
        feature: 'Security',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
]

export default function HeroSection() {
    return (
        <>
            <main>
                <section className="mb:pb-32 pb-16 pt-32">
                    <div className="mx-auto max-w-5xl px-6 lg:px-0">
                        <div className="mx-auto max-w-2xl space-y-6 text-center">
                            <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                            <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>

                        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-medium">Free</CardTitle>
                                    <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
                                    <CardDescription className="text-sm">Per editor</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <hr className="border-dashed" />

                                    <ul className="list-outside space-y-3 text-sm">
                                        {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <Check className="size-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="mt-auto">
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="relative">
                                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                                <div className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="font-medium">Pro</CardTitle>
                                        <span className="my-3 block text-2xl font-semibold">$19 / mo</span>
                                        <CardDescription className="text-sm">Per editor</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-dashed" />
                                        <ul className="list-outside space-y-3 text-sm">
                                            {['Everything in Free Plan', '5GB Cloud Storage', 'Email and Chat Support', 'Access to Community Forum', 'Single User Access', 'Access to Basic Templates', 'Mobile App Access', '1 Custom Report Per Month', 'Monthly Product Updates', 'Standard Security Features'].map((item, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <Check className="size-3" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>

                                    <CardFooter>
                                        <Button asChild className="w-full">
                                            <Link href="">Get Started</Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>

                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-medium">Startup</CardTitle>
                                    <span className="my-3 block text-2xl font-semibold">$29 / mo</span>
                                    <CardDescription className="text-sm">Per editor</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <hr className="border-dashed" />

                                    <ul className="list-outside space-y-3 text-sm">
                                        {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <Check className="size-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="mt-auto">
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="mx-auto max-w-5xl px-6 lg:px-0">
                        <div className="w-full overflow-auto lg:overflow-visible">
                            <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                                <thead className="bg-background sticky top-0">
                                    <tr className="*:py-4 *:text-left *:font-medium">
                                        <th className="lg:w-2/5"></th>
                                        <th className="space-y-3">
                                            <span className="block">Free</span>

                                            <Button asChild variant="outline" size="sm">
                                                <Link href="#">Get Started</Link>
                                            </Button>
                                        </th>
                                        <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                                            <span className="block">Pro</span>
                                            <Button asChild size="sm">
                                                <Link href="#">Get Started</Link>
                                            </Button>
                                        </th>
                                        <th className="space-y-3">
                                            <span className="block">Startup</span>
                                            <Button asChild variant="outline" size="sm">
                                                <Link href="#">Get Started</Link>
                                            </Button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-caption text-sm">
                                    <tr className="*:py-3">
                                        <td className="flex items-center gap-2 font-medium">
                                            <Cpu className="size-4" />
                                            <span>Features</span>
                                        </td>
                                        <td></td>
                                        <td className="bg-muted border-none px-4"></td>
                                        <td></td>
                                    </tr>
                                    {tableData.slice(-4).map((row, index) => (
                                        <tr key={index} className="*:border-b *:py-3">
                                            <td className="text-muted-foreground">{row.feature}</td>
                                            <td>
                                                {row.free === true ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    row.free
                                                )}
                                            </td>
                                            <td className="bg-muted border-none px-4">
                                                <div className="-mb-3 border-b py-3">
                                                    {row.pro === true ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        row.pro
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {row.startup === true ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    row.startup
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="*:pb-3 *:pt-8">
                                        <td className="flex items-center gap-2 font-medium">
                                            <Sparkles className="size-4" />
                                            <span>AI Models</span>
                                        </td>
                                        <td></td>
                                        <td className="bg-muted border-none px-4"></td>
                                        <td></td>
                                    </tr>
                                    {tableData.map((row, index) => (
                                        <tr key={index} className="*:border-b *:py-3">
                                            <td className="text-muted-foreground">{row.feature}</td>
                                            <td>
                                                {row.free === true ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    row.free
                                                )}
                                            </td>
                                            <td className="bg-muted border-none px-4">
                                                <div className="-mb-3 border-b py-3">
                                                    {row.pro === true ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        row.pro
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {row.startup === true ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    row.startup
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="*:py-6">
                                        <td></td>
                                        <td></td>
                                        <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="bg-background py-16">
                    <div className="mx-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
                            <img className="h-7 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
                            <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
                        </div>
                    </div>
                </section>
                <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
                    <div className="mx-auto max-w-5xl px-6 lg:px-0">
                        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                            <div className="text-center lg:text-left">
                                <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                                    Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                                    Questions
                                </h2>
                                <p>Accusantium quisquam. Illo, omnis?</p>
                            </div>

                            <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                                <div className="pb-6">
                                    <h3 className="font-medium">What is the refund policy?</h3>
                                    <p className="text-muted-foreground mt-4">We offer a 30-day money back guarantee. If you are not satisfied with our product, you can request a refund within 30 days of your purchase.</p>

                                    <ol className="list-outside list-decimal space-y-2 pl-4">
                                        <li className="text-muted-foreground mt-4">To request a refund, please contact our support team with your order number and reason for the refund.</li>
                                        <li className="text-muted-foreground mt-4">Refunds will be processed within 3-5 business days.</li>
                                        <li className="text-muted-foreground mt-4">Please note that refunds are only available for new customers and are limited to one per customer.</li>
                                    </ol>
                                </div>
                                <div className="py-6">
                                    <h3 className="font-medium">How do I cancel my subscription?</h3>
                                    <p className="text-muted-foreground mt-4">You can cancel your subscription at any time by logging into your account and clicking on the cancel button.</p>
                                </div>
                                <div className="py-6">
                                    <h3 className="font-medium">Can I upgrade my plan?</h3>
                                    <p className="text-muted-foreground my-4">Yes, you can upgrade your plan at any time by logging into your account and selecting the plan you want to upgrade to.</p>
                                    <ul className="list-outside list-disc space-y-2 pl-4">
                                        <li className="text-muted-foreground">You will be charged the difference in price between your current plan and the plan you are upgrading to.</li>
                                        <li className="text-muted-foreground">Your new plan will take effect immediately and you will be billed at the new rate on your next billing cycle.</li>
                                    </ul>
                                </div>
                                <div className="py-6">
                                    <h3 className="font-medium">Do you offer phone support?</h3>
                                    <p className="text-muted-foreground mt-4">We do not offer phone support at this time. However, you can contact us via email or live chat for any questions or concerns you may have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

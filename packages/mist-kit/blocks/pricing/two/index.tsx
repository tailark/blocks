import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Pricing() {
    return (
        <div className="bg-muted relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Pricing that scale with your business</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">Choose the perfect plan for your needs and start optimizing your workflow today</p>
                </div>
                <div className="@container relative mt-12 md:mt-20">
                    <Card className="@4xl:max-w-full relative mx-auto max-w-sm">
                        <div className="@4xl:grid-cols-3 grid">
                            <div>
                                <CardHeader className="p-8">
                                    <CardTitle className="font-medium">Free</CardTitle>
                                    <span className="mb-0.5 mt-2 block text-2xl font-semibold">$0 / mo</span>
                                    <CardDescription className="text-sm">Per editor</CardDescription>
                                </CardHeader>
                                <div className="border-y px-8 py-4">
                                    <Button
                                        asChild
                                        className="w-full"
                                        variant="neutral">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </div>

                                <ul
                                    role="list"
                                    className="space-y-3 p-8">
                                    {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ring-foreground/10 bg-background rounded-(--radius) @3xl:mx-0 @3xl:-my-3 -mx-1 border-transparent shadow ring-1">
                                <div className="@3xl:py-3 @3xl:px-0 relative px-1">
                                    <CardHeader className="p-8">
                                        <CardTitle className="font-medium">Pro</CardTitle>
                                        <span className="mb-0.5 mt-2 block text-2xl font-semibold">$19 / mo</span>
                                        <CardDescription className="text-sm">Per editor</CardDescription>
                                    </CardHeader>
                                    <div className="@3xl:mx-0 -mx-1 border-y px-8 py-4">
                                        <Button
                                            asChild
                                            className="w-full">
                                            <Link href="#">Get Started</Link>
                                        </Button>
                                    </div>

                                    <ul
                                        role="list"
                                        className="space-y-3 p-8">
                                        {['Everything in Free Plan', '5GB Cloud Storage', 'Email and Chat Support', 'Access to Community Forum', 'Single User Access', 'Access to Basic Templates', 'Mobile App Access', '1 Custom Report Per Month', 'Monthly Product Updates', 'Standard Security Features'].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-2">
                                                <Check
                                                    className="text-primary size-3"
                                                    strokeWidth={3.5}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <CardHeader className="p-8">
                                    <CardTitle className="font-medium">Pro Plus</CardTitle>
                                    <span className="mb-0.5 mt-2 block text-2xl font-semibold">$49 / mo</span>
                                    <CardDescription className="text-sm">Per editor</CardDescription>
                                </CardHeader>
                                <div className="border-y px-8 py-4">
                                    <Button
                                        asChild
                                        className="w-full"
                                        variant="neutral">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </div>

                                <ul
                                    role="list"
                                    className="space-y-3 p-8">
                                    {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

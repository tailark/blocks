import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PricingOne(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div data-shade="900" className="mt-20 grid gap-6 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-title font-medium">Free</CardTitle>
                            <span className="text-title my-3 block text-2xl font-semibold">$0 / mo</span>
                            <CardDescription className="text-sm">Per editor</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <hr className="border-dashed" />
                            <ul className="list-outside marker:content-['✓'] space-y-3 pl-4 text-sm *:pl-2">
                                <li>Basic Analytics Dashboard</li>
                                <li>5GB Cloud Storage</li>
                                <li>Email and Chat Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className='w-full'>
                                <Link href="">
                                    <span className="btn-label"> Get Started</span>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-offset-1 ring-offset-gray-950/5 ring-white/20">Popular</span>
                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-title font-medium">Pro</CardTitle>
                                <span className="text-title my-3 block text-2xl font-semibold">$19 / mo</span>
                                <CardDescription className="text-sm">Per editor</CardDescription>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <hr className="border-dashed" />
                                <ul className="list-outside marker:content-['✓'] space-y-3 pl-4 text-sm *:pl-2">
                                    <li>Basic Analytics Dashboard</li>
                                    <li>5GB Cloud Storage</li>
                                    <li>Email and Chat Support</li>
                                    <li>Access to Community Forum</li>
                                    <li>Single User Access</li>
                                    <li>Access to Basic Templates</li>
                                    <li>Mobile App Access</li>
                                    <li>1 Custom Report Per Month</li>
                                    <li>Monthly Product Updates</li>
                                    <li>Standard Security Features</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className='w-full'>
                                    <Link href="">
                                        <span className="btn-label"> Get Started</span>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-title font-medium">Startup</CardTitle>
                            <span className="text-title my-3 block text-2xl font-semibold">$29 / mo</span>
                            <CardDescription className="text-sm">Per editor</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <hr className="border-dashed" />
                            <ul className="list-outside marker:content-['✓'] space-y-3 pl-4 text-sm *:pl-2">
                                <li>Everything in Pro Plan</li>
                                <li>5GB Cloud Storage</li>
                                <li>Email and Chat Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className='w-full'>
                                <Link href="">
                                    <span className="btn-label"> Get Started</span>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <main>
            <section className="py-32">
                <div className="mx-auto max-w-5xl px-6 lg:px-0">
                    <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>

                    <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                        <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                                <Link href="mailto:hello@tailus.io" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                    hello@tailus.io
                                </Link>
                                <p className="mt-3 text-sm">+243 000 000 000</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Press</h2>
                                <Link href="mailto:press@tailus.io" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                    press@tailus.io
                                </Link>
                                <p className="mt-3 text-sm">+243 000 000 000</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                    <form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
                        <Card className="mx-auto max-w-lg p-8 sm:p-16">
                            <h3 className="text-xl font-semibold">Let's get you to the right place</h3>
                            <p className="mt-4 text-sm">Reach out to our sales team! We’re eager to learn more about how you plan to use our application.</p>

                            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                                <div>
                                    <Label htmlFor="name" className="space-y-2">
                                        Full name
                                    </Label>
                                    <Input type="text" id="name" required />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="space-y-2">
                                        Work Email
                                    </Label>
                                    <Input type="email" id="email" required />
                                </div>
                                <div>
                                    <Label htmlFor="country" className="space-y-2">
                                        Country/Region
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">DR Congo</SelectItem>
                                            <SelectItem value="2">United States</SelectItem>
                                            <SelectItem value="3">France</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="website" className="space-y-2">
                                        Company Website
                                    </Label>
                                    <Input type="url" id="website" />
                                </div>
                                <div>
                                    <Label htmlFor="job" className="space-y-2">
                                        Job function
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a job function" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Finance</SelectItem>
                                            <SelectItem value="2">Education</SelectItem>
                                            <SelectItem value="3">Legal</SelectItem>
                                            <SelectItem value="4">More</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="msg" className="space-y-2">
                                        Message
                                    </Label>
                                    <Textarea id="msg" rows={3} />
                                </div>
                                <Button>Submit</Button>
                            </div>
                        </Card>
                    </form>
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
        </main>
    )
}

import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Input } from '@/registry/bases/radix/veil/ui/input'
import { Label } from '@/registry/bases/radix/veil/ui/label'
import { Textarea } from '@/registry/bases/radix/veil/ui/textarea'
import Link from 'next/link'

export default function Contact() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div>
                    <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Get in Touch</h1>
                    <p className="text-muted-foreground mt-4 max-w-md text-balance">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="@xl:grid-cols-5 mt-12 grid gap-8">
                    <div className="@xl:col-span-2 space-y-6 *:space-y-2">
                        <div>
                            <p className="text-foreground text-sm font-medium">Email</p>
                            <Link
                                href="mailto:hello@example.com"
                                className="text-muted-foreground hover:text-primary text-sm"
                            >
                                hello@example.com
                            </Link>
                        </div>

                        <div>
                            <p className="text-foreground text-sm font-medium">Phone</p>
                            <Link
                                href="tel:+1234567890"
                                className="text-muted-foreground hover:text-primary text-sm"
                            >
                                +1 (234) 567-890
                            </Link>
                        </div>

                        <div>
                            <p className="text-foreground text-sm font-medium">Office</p>
                            <p className="text-muted-foreground text-sm">123 Main Street, San Francisco, CA 94102</p>
                        </div>
                    </div>

                    <Card
                        variant="outline"
                        className="@xl:col-span-3 p-6"
                    >
                        <form
                            action=""
                            className="space-y-5"
                        >
                            <div className="@md:grid-cols-2 grid gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-sm"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="subject"
                                    className="text-sm"
                                >
                                    Subject
                                </Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    className="text-sm"
                                >
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us more..."
                                    required
                                    className="min-h-28"
                                />
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}

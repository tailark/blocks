import Link from 'next/link'
import { Button } from '@veil/components/ui/button'
import { Card } from '@veil/components/ui/card'
import { ArrowRight, Check } from 'lucide-react'

const benefits = ['14-day free trial', 'No credit card required', 'Cancel anytime', '24/7 support']

export default function CallToAction() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <Card
                    variant="outline"
                    className="@xl:grid-cols-2 grid gap-8 p-6 md:p-8">
                    <div>
                        <h2 className="text-balance font-serif text-3xl font-medium">Transform Your Workflow</h2>
                        <p className="text-muted-foreground mt-3 text-balance">Experience the power of seamless integrations and watch your productivity soar.</p>
                        <ul className="mt-6 space-y-2">
                            {benefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2 text-sm">
                                    <Check className="text-primary size-4" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-muted/50 flex flex-col justify-center rounded-xl border p-6">
                        <p className="text-muted-foreground text-sm">Starting at</p>
                        <p className="mt-1 font-serif text-4xl font-medium">
                            $0<span className="text-muted-foreground text-lg font-normal">/month</span>
                        </p>
                        <p className="text-muted-foreground mt-1 text-sm">Free forever for individuals</p>
                        <Button
                            asChild
                            className="mt-6 gap-2">
                            <Link href="#link">
                                Get Started Free
                                <ArrowRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    )
}

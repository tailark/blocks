import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '@/registry/core/lib/utils'

const plans = [
    {
        name: 'Monthly',
        price: '$29',
        period: '/month',
        description: 'Flexible month-to-month billing',
        features: ['All features included', 'Cancel anytime', 'No long-term commitment'],
    },
    {
        name: 'Annual',
        price: '$19',
        period: '/month',
        description: 'Save 35% with annual billing',
        features: ['All features included', '2 months free', 'Priority onboarding'],
        highlighted: true,
        badge: 'Best Value',
    },
]

export default function Pricing() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">One Plan, Simple Pricing</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Everything you need to build powerful integrations. Choose your billing cycle.</p>
                </div>
                <div className="@xl:grid-cols-2 @xl:gap-3 mt-12 grid gap-6">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            variant={plan.highlighted ? 'default' : 'mixed'}
                            className={cn('relative p-6', plan.highlighted && 'ring-primary')}
                        >
                            <div className="mb-6">
                                <h3 className="text-foreground font-medium">{plan.name}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{plan.description}</p>
                            </div>
                            <div>
                                <span className="font-serif text-5xl font-medium">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </div>
                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-muted-foreground flex items-center gap-2 text-sm"
                                    >
                                        <Check className="text-primary size-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                asChild
                                variant={plan.highlighted ? 'default' : 'outline'}
                                className="mt-8 w-full gap-2"
                            >
                                <Link href="#link">
                                    Get Started
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-8 text-center text-sm">All plans include a 14-day free trial. No credit card required.</p>
            </div>
        </section>
    )
}

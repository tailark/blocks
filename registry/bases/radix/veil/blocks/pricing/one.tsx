import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Check } from 'lucide-react'
import { cn } from '@/registry/core/lib/utils'

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for individuals and small projects.',
        price: '$0',
        period: '/month',
        features: ['Up to 3 integrations', '1,000 API calls/month', 'Community support', 'Basic analytics'],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Pro',
        description: 'For growing teams that need more power.',
        price: '$29',
        period: '/month',
        features: ['Unlimited integrations', '100,000 API calls/month', 'Priority support', 'Advanced analytics', 'Custom webhooks', 'Team collaboration'],
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        description: 'For organizations with advanced needs.',
        price: 'Custom',
        period: '',
        features: ['Everything in Pro', 'Unlimited API calls', 'Dedicated support', 'SLA guarantee', 'Custom contracts', 'On-premise option'],
        cta: 'Contact Sales',
        highlighted: false,
    },
]

export default function Pricing() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
                </div>
                <div className="@3xl:grid-cols-2 mt-12 grid gap-3">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            variant={plan.highlighted ? 'default' : 'mixed'}
                            className={cn('relative flex flex-col p-6 last:col-span-full', plan.highlighted && 'ring-primary')}
                        >
                            <div>
                                <h3 className="text-foreground font-medium">{plan.name}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{plan.description}</p>
                            </div>
                            <div className="mt-6">
                                <span className="font-serif text-4xl font-medium">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </div>
                            <ul className="mt-6 flex-1 space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-muted-foreground flex items-start gap-2 text-sm"
                                    >
                                        <Check className="text-primary mt-0.5 size-4 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                asChild
                                variant={plan.highlighted ? 'default' : 'outline'}
                                className="mt-8 w-full"
                            >
                                <Link href="#link">{plan.cta}</Link>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

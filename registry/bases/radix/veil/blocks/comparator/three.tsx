import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/registry/core/lib/utils'

const plans = [
    {
        name: 'Starter',
        price: '$0',
        period: '/month',
        description: 'For individuals and small projects',
        cta: 'Get Started',
        features: {
            integrations: '3',
            apiCalls: '1,000/mo',
            support: 'Community',
            analytics: false,
            webhooks: false,
            sso: false,
        },
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/month',
        description: 'For growing teams',
        cta: 'Start Free Trial',
        highlighted: true,
        features: {
            integrations: 'Unlimited',
            apiCalls: '100,000/mo',
            support: 'Priority',
            analytics: true,
            webhooks: true,
            sso: false,
        },
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations',
        cta: 'Contact Sales',
        features: {
            integrations: 'Unlimited',
            apiCalls: 'Unlimited',
            support: 'Dedicated',
            analytics: true,
            webhooks: true,
            sso: true,
        },
    },
]

const featureLabels = {
    integrations: 'Integrations',
    apiCalls: 'API Calls',
    support: 'Support',
    analytics: 'Analytics',
    webhooks: 'Custom Webhooks',
    sso: 'SSO / SAML',
}

const FeatureRow = ({ label, value }: { label: string; value: boolean | string }) => (
    <div className="flex items-center justify-between border-b py-3 text-sm last:border-b-0">
        <span className="text-muted-foreground">{label}</span>
        {typeof value === 'boolean' ? value ? <Check className="text-primary size-4" /> : <Minus className="text-muted-foreground/50 size-4" /> : <span className="text-foreground font-medium">{value}</span>}
    </div>
)

export default function Comparator() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Choose Your Plan</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Start free and scale as you grow.</p>
                </div>
                <div className="mt-12 space-y-4">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            variant={plan.highlighted ? 'default' : 'mixed'}
                            className={cn('p-6', plan.highlighted && 'ring-primary')}
                        >
                            <div className="@lg:flex-row @lg:items-start @lg:justify-between flex flex-col gap-6">
                                <div className="@lg:max-w-xs">
                                    <h3 className="text-foreground font-medium">{plan.name}</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">{plan.description}</p>
                                    <div className="mt-4">
                                        <span className="font-serif text-3xl font-medium">{plan.price}</span>
                                        {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                                    </div>
                                    <Button
                                        asChild
                                        variant={plan.highlighted ? 'default' : 'outline'}
                                        size="sm"
                                        className="mt-4"
                                    >
                                        <Link href="#link">{plan.cta}</Link>
                                    </Button>
                                </div>
                                <div className="@lg:w-64 w-full shrink-0">
                                    {Object.entries(plan.features).map(([key, value]) => (
                                        <FeatureRow
                                            key={key}
                                            label={featureLabels[key as keyof typeof featureLabels]}
                                            value={value}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

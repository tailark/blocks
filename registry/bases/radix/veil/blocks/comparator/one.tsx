import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Check, Minus } from 'lucide-react'

const plans = [
    {
        name: 'Basic',
        price: '$9',
        period: '/month',
        cta: 'Get Started',
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/month',
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Team',
        price: '$79',
        period: '/month',
        cta: 'Start Free Trial',
    },
]

const features = [
    { name: 'Integrations', basic: '5', pro: 'Unlimited', team: 'Unlimited' },
    { name: 'API Calls', basic: '10K/mo', pro: '100K/mo', team: '1M/mo' },
    { name: 'Team Members', basic: '1', pro: '5', team: 'Unlimited' },
    { name: 'Support', basic: 'Email', pro: 'Priority', team: 'Dedicated' },
    { name: 'Analytics', basic: true, pro: true, team: true },
    { name: 'Custom Webhooks', basic: false, pro: true, team: true },
    { name: 'SSO', basic: false, pro: false, team: true },
    { name: 'Audit Logs', basic: false, pro: false, team: true },
]

export default function Comparator() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Compare Plans</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Find the perfect plan for your team's needs.</p>
                </div>
                <Card
                    variant="outline"
                    className="*:min-w-xl mt-12 overflow-auto"
                >
                    <div className="grid grid-cols-4 border-b">
                        <div className="p-4"></div>
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`border-l p-4 text-center ${plan.highlighted ? 'bg-primary/5' : ''}`}
                            >
                                <p className="text-foreground font-medium">{plan.name}</p>
                                <p className="mt-1">
                                    <span className="font-serif text-2xl font-medium">{plan.price}</span>
                                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="grid grid-cols-4 border-b last:border-b-0"
                        >
                            <div className="text-muted-foreground p-4 text-sm">{feature.name}</div>
                            {['basic', 'pro', 'team'].map((plan, idx) => {
                                const value = feature[plan as keyof typeof feature]
                                return (
                                    <div
                                        key={plan}
                                        className={`flex items-center justify-center border-l p-4 text-sm ${idx === 1 ? 'bg-primary/5' : ''}`}
                                    >
                                        {typeof value === 'boolean' ? value ? <Check className="text-primary size-4" /> : <Minus className="text-muted-foreground size-4" /> : <span className="text-foreground">{value}</span>}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                    <div className="grid grid-cols-4 border-t">
                        <div className="p-4"></div>
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`border-l p-4 ${plan.highlighted ? 'bg-primary/5' : ''}`}
                            >
                                <Button
                                    asChild
                                    variant={plan.highlighted ? 'default' : 'outline'}
                                    size="sm"
                                    className="w-full"
                                >
                                    <Link href="#link">{plan.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    )
}

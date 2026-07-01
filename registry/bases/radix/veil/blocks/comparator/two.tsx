import Link from 'next/link'
import { Button } from '@/registry/bases/radix/veil/ui/button'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import { Check, Minus } from 'lucide-react'

const features = [
    { name: 'Integrations', free: '5', pro: 'Unlimited' },
    { name: 'API Calls', free: '10K/mo', pro: '500K/mo' },
    { name: 'Team Members', free: '2', pro: '20' },
    { name: 'Support', free: 'Email', pro: 'Priority' },
    { name: 'Analytics Dashboard', free: false, pro: true },
    { name: 'Custom Webhooks', free: false, pro: true },
    { name: 'Advanced Security', free: false, pro: true },
    { name: 'API Access', free: false, pro: true },
]

export default function Comparator() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Free vs Pro</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">See what you get with each plan.</p>
                </div>
                <Card
                    variant="outline"
                    className="@max-md:*:min-w-md mt-12 overflow-auto"
                >
                    <div className="grid grid-cols-3">
                        <div className="p-4"></div>
                        <div className="min-w-32 border-l p-4 text-center">
                            <p className="text-foreground font-medium">Free</p>
                            <p className="font-serif text-2xl font-medium">$0</p>
                        </div>
                        <div className="bg-primary/5 min-w-32 border-l p-4 text-center">
                            <p className="text-foreground font-medium">Pro</p>
                            <p className="font-serif text-2xl font-medium">$29</p>
                        </div>
                    </div>
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="grid grid-cols-3 border-t"
                        >
                            <div className="text-muted-foreground p-4 text-sm">{feature.name}</div>
                            <div className="flex min-w-32 items-center justify-center border-l p-4 text-sm">{typeof feature.free === 'boolean' ? feature.free ? <Check className="text-primary size-4" /> : <Minus className="text-muted-foreground/50 size-4" /> : <span className="text-foreground">{feature.free}</span>}</div>
                            <div className="bg-primary/5 flex min-w-32 items-center justify-center border-l p-4 text-sm">{typeof feature.pro === 'boolean' ? feature.pro ? <Check className="text-primary size-4" /> : <Minus className="text-muted-foreground/50 size-4" /> : <span className="text-foreground font-medium">{feature.pro}</span>}</div>
                        </div>
                    ))}
                    <div className="grid grid-cols-3 border-t">
                        <div className="p-4"></div>
                        <div className="min-w-32 border-l p-4">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="w-full"
                            >
                                <Link href="#link">Get Started</Link>
                            </Button>
                        </div>
                        <div className="bg-primary/5 min-w-32 border-l p-4">
                            <Button
                                asChild
                                size="sm"
                                className="w-full"
                            >
                                <Link href="#link">Upgrade</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

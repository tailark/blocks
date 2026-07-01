'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/bases/radix/veil/ui/accordion'
import { Card } from '@/registry/bases/radix/veil/ui/card'
import Link from 'next/link'
import { CreditCard, HelpCircle, Package } from 'lucide-react'

const faqCategories = [
    {
        title: 'Getting Started',
        icon: Package,
        items: [
            {
                id: 'gs-1',
                question: 'How do I create an account?',
                answer: 'Click "Sign Up" and follow the prompts. You can sign up with email or connect your Google account.',
            },
            {
                id: 'gs-2',
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
            },
        ],
    },
    {
        title: 'Billing',
        icon: CreditCard,
        items: [
            {
                id: 'b-1',
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
            },
            {
                id: 'b-2',
                question: 'Can I get a refund?',
                answer: 'We offer a 30-day money-back guarantee. Contact support within 30 days for a full refund.',
            },
        ],
    },
    {
        title: 'Support',
        icon: HelpCircle,
        items: [
            {
                id: 's-1',
                question: 'How do I contact support?',
                answer: 'You can reach us via email, live chat, or through your account dashboard. We typically respond within 24 hours.',
            },
            {
                id: 's-2',
                question: 'Do you offer phone support?',
                answer: 'Phone support is available for Pro and Enterprise plans during business hours (9 AM - 6 PM EST).',
            },
        ],
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Help Center</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Browse by category to find the answers you need.</p>
                </div>
                <div className="mt-12 space-y-3">
                    {faqCategories.map((category) => (
                        <Card
                            key={category.title}
                            variant="outline"
                            className="p-5"
                        >
                            <div className="mb-4 flex items-center gap-2">
                                <category.icon className="text-muted-foreground size-4" />
                                <h3 className="text-foreground font-medium">{category.title}</h3>
                            </div>
                            <Accordion
                                type="single"
                                collapsible
                            >
                                {category.items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-dashed last:border-b-0"
                                    >
                                        <AccordionTrigger className="cursor-pointer py-3 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground pb-1 text-sm">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-8 text-center text-sm">
                    Need more help?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline"
                    >
                        Contact our team
                    </Link>
                </p>
            </div>
        </section>
    )
}

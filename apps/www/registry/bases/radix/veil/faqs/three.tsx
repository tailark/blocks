'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@tailark/core/ui/accordion'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'How does the free trial work?',
        answer: 'Start with a 14-day free trial with full access to all features. No credit card required. You can upgrade to a paid plan at any time during or after the trial.',
    },
    {
        id: 'item-2',
        question: 'Can I change my plan later?',
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
    },
    {
        id: 'item-3',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.',
    },
    {
        id: 'item-4',
        question: 'Is there a setup fee?',
        answer: 'No, there are no setup fees or hidden costs. You only pay for your subscription plan.',
    },
    {
        id: 'item-5',
        question: 'Do you offer refunds?',
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days for a full refund.",
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <h2 className="text-center font-serif text-4xl font-medium">Your Questions Answered</h2>
                <Accordion
                    type="single"
                    collapsible
                    className="mt-12">
                    {faqItems.map((item) => (
                        <div
                            className="group"
                            key={item.id}>
                            <AccordionItem
                                value={item.id}
                                className="data-[state=open]:bg-muted/50 peer rounded-xl border-none px-5 py-1 transition-colors">
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <hr className="mx-5 group-last:hidden peer-data-[state=open]:opacity-0" />
                        </div>
                    ))}
                </Accordion>
                <p className="text-muted-foreground mt-8 text-center text-sm">
                    Can't find what you're looking for?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline">
                        Contact support
                    </Link>
                </p>
            </div>
        </section>
    )
}

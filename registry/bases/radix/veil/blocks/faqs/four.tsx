import { Card } from '@/registry/bases/radix/veil/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        question: 'How does the free trial work?',
        answer: 'Start with a 14-day free trial with full access to all features. No credit card required.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
        question: 'Is there a setup fee?',
        answer: 'No, there are no setup fees or hidden costs. You only pay for your subscription plan.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day money-back guarantee. Contact us within 30 days for a full refund.',
    },
    {
        question: 'How do I cancel my subscription?',
        answer: 'You can cancel anytime from your account settings. Your access continues until the billing period ends.',
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Common Questions</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Everything you need to know about our platform.</p>
                </div>
                <div className="@lg:grid-cols-2 mt-12 grid gap-3">
                    {faqItems.map((item, index) => (
                        <Card
                            key={index}
                            variant="mixed"
                            className="p-5"
                        >
                            <h3 className="text-foreground text-sm font-medium">{item.question}</h3>
                            <p className="text-muted-foreground mt-2 text-sm">{item.answer}</p>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-8 text-center text-sm">
                    Have another question?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline"
                    >
                        Get in touch
                    </Link>
                </p>
            </div>
        </section>
    )
}

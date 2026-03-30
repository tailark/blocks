'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@tailark/core/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const earlyAccessQuestions = [
        {
            question: 'What is the current status of Phase 1?',
            answer: (
                <>
                    As of October 24, 2025, all Phase 1 promises have been successfully met and delivered. <br /> <br />
                    ✓ All 158 blocks are fully optimized and responsive <br />
                    ✓ The registry is ready, stable, and production-ready <br />
                    ✓ 4 new block categories have been launched <br />
                    ✓ First complete pages are now available <br /> <br />
                    Phase 1 focused on building a solid foundation with consistent components, responsive designs, performance optimizations, and a working registry system. Every commitment from Phase 1 has been fulfilled.
                </>
            ),
        },
        {
            question: 'What can I expect from Phase 2?',
            answer: (
                <>
                    Phase 2 is focused on expansion and improved discoverability. <br /> <br />
                    We're adding approximately 6 new block categories and 12 production-ready complete pages that you can use as starting points for your projects. <br /> <br />
                    We're also implementing enhanced navigation with advanced search and filtering capabilities, making it easier to discover and find the perfect blocks and pages for your needs. The browsing experience will be refined with better categorization and more intuitive organization.
                </>
            ),
        },
        {
            question: 'What pages are currently available?',
            answer: (
                <>
                    Every page category listed in the Complete plan has been shipped with at least one page in each category: <br /> <br />
                    ✓ Landing pages <br />
                    ✓ Product pages <br />
                    ✓ Solution pages <br />
                    ✓ Pricing pages <br />
                    ✓ About pages <br />
                    ✓ Brand pages <br />
                    ✓ Contact pages <br />
                    ✓ Contact Sales pages <br />
                    ✓ Customers pages <br />
                    ✓ Customer Story pages <br />
                    ✓ Blog pages <br />
                    ✓ Blog Article pages <br />
                    ✓ Wall of Love pages <br />
                    ✓ Legal pages <br />
                    ✓ Legal Document pages <br /> <br />
                    All pages are available across multiple styles and more variants are being added regularly.
                </>
            ),
        },
        {
            question: 'When will the early access program end?',
            answer: (
                <>
                    Phase 2 is the final phase of our early access program. <br /> <br />
                    Once Phase 2 is complete, Tailark Pro will transition to general availability with the full feature set, expanded component library, and all planned pages. The price will increase for new users at that point. <br /> <br />
                    Current early access supporters will maintain their access and benefits — you won't be affected by the price increase and won't need to pay anything extra. We'll communicate the exact timeline and any additional details as we progress through Phase 2.
                </>
            ),
        },
    ]

    const generalQuestions = [
        {
            question: 'What should I expect from future updates?',
            answer: 'Expect continuous updates: optimized blocks, new tools, fresh illustrations, expanded snippets, additional pages, and entirely new block categories — all progressively shipped.',
        },
        {
            question: 'What exactly are the illustrations?',
            answer: 'Illustrations are decorative TSX components — perfect for bento or feature blocks — crafted to elevate the visual experience without relying on external image files.',
        },
        {
            question: 'What are snippets?',
            answer: 'Snippets are variant explorations of core components — like buttons with different layouts, styles, and states — helping you move faster without reinventing UI patterns.',
        },
        {
            question: 'Should I expect full templates?',
            answer: (
                <>
                    No. Tailark Quartz isn’t about fixed templates. <br /> <br />
                    It’s designed to help founders build scalable websites with flexible blocks. Templates limit growth — pages, on the other hand, offer structure while staying visually compatible with every block in the kit.
                </>
            ),
        },
        {
            question: 'Can I upgrade from one plan to another?',
            answer: 'Yes! Just DM Méschac on X or email us — we’ll make it a smooth switch.',
        },
        {
            question: 'Do you offer any discounts?',
            answer: (
                <>
                    Yes, we offer discounts for founders from countries with low purchasing power and for students. <br /> <br />
                    If you qualify, just reach out via X or email and we'll be happy to help. We don't offer custom or on-demand discounts outside of these cases, though.
                </>
            ),
        },
        {
            question: 'Do you offer technical support?',
            answer: (
                <>
                    Yes, we do. You can reach out via DMs on X, email us, or even jump on a quick call if needed. <br /> <br />
                    We want you to get the most out of Tailark Quartz and ship fast. Just note that support doesn't include building custom blocks, illustrations, or full site implementations for your specific use case — but we’re always open to feedback and ideas to improve the kit.
                </>
            ),
        },
        {
            question: 'Can I use Tailark Pro for client projects?',
            answer: 'Absolutely. You’re free to use Tailark Pro on as many client projects as you’d like.',
        },
    ]

    const legalQuestions = [
        {
            question: 'Can I share my account with a friend?',
            answer: (
                <>
                    No, account sharing isn't allowed. <br /> <br />
                    However, we’re working on a way for you to offer your friends a special discount — stay tuned.
                </>
            ),
        },
        {
            question: 'Am I allowed to create a derived kit based on Tailark?',
            answer: (
                <>
                    Nope. Tailark Quartz is a paid product and can’t be forked or redistributed as a new UI kit. <br /> <br />
                    But if you have an idea or extension in mind, reach out — let’s talk!
                </>
            ),
        },
        {
            question: 'What’s your refund policy?',
            answer: 'No hard feelings — if you’re not happy or made a mistake, just ask for a refund and it’s done. Simple as that.',
        },
    ]

    return (
        <section className="bg-linear-to-b to-background pb-16 md:pb-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="max-w-sm text-balance text-3xl font-medium tracking-tight">Common questions</h2>
                    </div>

                    <div className="ml-auto w-full max-w-2xl md:col-span-3">
                        <div>
                            <h3 className="mb-4 text-lg font-medium">Early Access</h3>
                            <Accordion
                                type="single"
                                collapsible>
                                {earlyAccessQuestions.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`qa-${index}`}>
                                        <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground text-base leading-relaxed">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="mt-12">
                            <h3 className="mb-4 text-lg font-medium">General questions</h3>
                            <Accordion
                                type="single"
                                collapsible>
                                {generalQuestions.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`qa-${index}`}>
                                        <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground text-base">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="my-12">
                            <h3 className="mb-4 text-lg font-medium">Legal questions</h3>
                            <Accordion
                                type="single"
                                collapsible>
                                {legalQuestions.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`qa-${index}`}>
                                        <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground text-base">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <p className="text-muted-foreground mt-6">
                            Can't find what you're looking for?{' '}
                            <Link
                                href="mailto:hey@tailark.com"
                                className="text-primary font-medium hover:underline">
                                Contact us
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

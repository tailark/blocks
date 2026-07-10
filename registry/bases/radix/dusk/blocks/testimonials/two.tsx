'use client'

import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ClaudeAI } from '@/registry/core/ui/svgs/claude-ai'
import { Gemini } from '@/registry/core/ui/svgs/gemini'
import { Openai } from '@/registry/core/ui/svgs/openai'
import { useState, type ComponentType, type SVGProps } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const testimonials: {
    quote: string
    highlight: string
    author: string
    role: string
    Logo: ComponentType
}[] = [
    {
        quote: 'Tailark helped our revenue team move from scattered updates to one shared CRM view.',
        highlight: 'We finally know which accounts need attention before deals stall.',
        author: 'Maya Patel',
        role: 'VP of Revenue, Claude',
        Logo: ClaudeAI,
    },
    {
        quote: 'Our account managers use Tailark every morning to review pipeline health, open tasks, and customer history.',
        highlight: 'The workflow feels focused without hiding the details teams need.',
        author: 'Ethan Brooks',
        role: 'Head of Customer Operations, Gemini',
        Logo: Gemini,
    },
    {
        quote: 'Tailark gives our sales and success teams a cleaner way to coordinate follow-up across every account.',
        highlight: 'It turns customer signals into clear next steps.',
        author: 'Sofia Ramirez',
        role: 'Revenue Operations Lead, OpenAI',
        Logo: Openai,
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeTestimonial = testimonials[activeIndex]
    const Logo = activeTestimonial.Logo

    const previousTestimonial = () => {
        setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
    }

    const nextTestimonial = () => {
        setActiveIndex((index) => (index + 1) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-20 flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-4"
                            aria-label="read previous testimonial"
                            onClick={previousTestimonial}
                            disabled={activeIndex === 0}
                        >
                            <ArrowIcon className="size-3!" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-4"
                            aria-label="read next testimonial"
                            onClick={nextTestimonial}
                            disabled={activeIndex === testimonials.length - 1}
                        >
                            <ArrowIcon className="size-3! rotate-180" />
                        </Button>
                    </div>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-muted-foreground mb-20 text-2xl font-medium leading-snug md:text-4xl md:leading-tight">
                                {activeTestimonial.quote} <span className="rounded bg-emerald-500/10 px-1.5 text-emerald-500">{activeTestimonial.highlight}</span>
                            </p>
                        </motion.div>

                        <motion.div
                            key={`${activeIndex}-author`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-4"
                        >
                            <Logo className="size-10" />
                            <div className="border-l pl-4">
                                <p className="font-medium">{activeTestimonial.author}</p>
                                <p className="text-muted-foreground text-sm">{activeTestimonial.role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

const ArrowIcon = (props: SVGProps) => {
    return (
        <svg
            {...props}
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 1L1 8L8 15M1 8H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

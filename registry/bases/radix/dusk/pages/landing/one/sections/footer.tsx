import Link from 'next/link'
import { LogoIcon } from '@/registry/bases/radix/dusk/ui/logo'
import { Gemini } from '@/registry/core/ui/svgs/gemini'
import { ClaudeAI } from '@/registry/core/ui/svgs/claude-ai'
import { Openai } from '@/registry/core/ui/svgs/openai'
import { Perplexity } from '@/registry/core/ui/svgs/perplexity'
import { Button } from '@/registry/bases/radix/dusk/ui/button'

const footerLinks = [
    {
        name: 'Product',
        links: [
            { href: '#', label: 'Features' },
            { href: '#', label: 'Solutions' },
            { href: '#', label: 'Agents' },
            { href: '#', label: 'Pricing' },
        ],
    },
    {
        name: 'Company',
        links: [
            { href: '#', label: 'About' },
            { href: '#', label: 'Blog' },
            { href: '#', label: 'Contact' },
            { href: '#', label: 'LinkedIn' },
            { href: '#', label: 'X' },
        ],
    },
    {
        name: 'Legal',
        links: [
            { href: '#', label: 'Licence' },
            { href: '#', label: 'Privacy Policy' },
            { href: '#', label: 'Terms of Service' },
        ],
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl space-y-16 px-6 pb-6 pt-32">
                <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-6">
                    <div className="col-span-full lg:col-span-3">
                        <Link
                            href="/"
                            aria-label="go home"
                        >
                            <LogoIcon uniColor />
                        </Link>
                    </div>

                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="text-foreground text-sm">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-primary text-muted-foreground text-sm duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-24 grid gap-x-3 gap-y-6 border-t pt-6 sm:grid-cols-2">
                    <div>
                        <p className="text-muted-foreground text-sm">Get an AI summary of this page</p>
                        <div className="-ml-2.5 mt-2 flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <Link
                                    href="#"
                                    aria-label="Claude AI"
                                >
                                    <ClaudeAI />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <Link
                                    href="#"
                                    aria-label="OpenAI"
                                >
                                    <Openai />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <Link
                                    href="#"
                                    aria-label="Perplexity"
                                >
                                    <Perplexity className="size-5!" />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <Link
                                    href="#"
                                    aria-label="Gemini"
                                >
                                    <Gemini />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <span className="text-muted-foreground block text-sm">&copy; Tailark 2025 - Present</span>
                </div>
            </div>
        </footer>
    )
}

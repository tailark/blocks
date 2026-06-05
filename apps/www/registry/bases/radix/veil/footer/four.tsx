import Link from 'next/link'
import { Logo } from '@veil/components/logo'
import { Github, Linkedin, Twitter } from 'lucide-react'

const links = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
]

const social = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
    return (
        <footer className="bg-background @container border-t py-12">
            <div className="mx-auto max-w-3xl px-6">
                <div className="grid gap-8">
                    <div className="col-span-full border-b pb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2">
                            <Logo className="h-5 w-fit" />
                        </Link>
                        <p className="text-muted-foreground mt-4 max-w-xs text-sm">The modern integration platform for teams who ship fast.</p>
                        <div className="-ml-2 mt-6 flex">
                            {social.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground flex size-8 transition-colors *:m-auto"
                                    aria-label={item.label}>
                                    <item.icon className="size-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-3">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="border-t pt-8">
                        <p className="text-muted-foreground text-sm">&copy; {2026} Veil, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

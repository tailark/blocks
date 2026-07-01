import Link from 'next/link'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { Label } from '@/registry/bases/radix/dusk/ui/label'
import { Input } from '@/registry/bases/radix/dusk/ui/input'
import { LogoIcon } from '@/registry/bases/radix/dusk/ui/logo'

const communityLinks = [
    { href: '#', label: 'GitHub' },
    { href: '#', label: 'Discord' },
    { href: '#', label: 'Slack' },
    { href: '#', label: 'X / Twitter' },
]

const footerLinks = [
    {
        name: 'Product',
        links: [
            { href: '#', label: 'Security' },
            { href: '#', label: 'Customization' },
            { href: '#', label: 'Enterprise' },
            { href: '#', label: 'Partners' },
        ],
    },
    {
        name: 'Company',
        links: [
            { href: '#', label: 'About' },
            { href: '#', label: 'Customers' },
            { href: '#', label: 'Enterprise' },
            { href: '#', label: 'Partners' },
            { href: '#', label: 'Jobs' },
        ],
    },
    {
        name: 'Legal',
        links: [
            { href: '#', label: 'Licence' },
            { href: '#', label: 'Privacy Policy' },
            { href: '#', label: 'Terms of Service' },
            { href: '#', label: 'Cookie Policy' },
        ],
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16 pt-32">
                <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-5">
                    <div className="max-lg:col-span-full">
                        <Link
                            href="/"
                            aria-label="go home"
                        >
                            <LogoIcon uniColor />
                        </Link>
                    </div>

                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="text-sm font-medium">{linksGroup.name}</span>
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
                    <div>
                        <span className="text-sm font-medium">Community</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {communityLinks.map((link, index) => (
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

                        <form className="mt-12 w-full max-w-xs">
                            <div className="space-y-2.5">
                                <Label
                                    className="block text-sm font-medium"
                                    htmlFor="email"
                                >
                                    Subscribe to our newsletter
                                </Label>
                                <Input
                                    className="text-sm"
                                    placeholder="Your email"
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-3"
                                size="sm"
                            >
                                <span>Subscribe</span>
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="mt-16">
                    <span className="text-muted-foreground block text-sm">&copy; Tailark 2025 - Present</span>
                </div>
            </div>
        </footer>
    )
}

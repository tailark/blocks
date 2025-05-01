import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'

const enterpriseLinks = [
    { href: '#', label: 'About' },
    { href: '#', label: 'Customers' },
    { href: '#', label: 'Enterprise' },
    { href: '#', label: 'Partners' },
    { href: '#', label: 'Jobs' },
]

const productLinks = [
    { href: '#', label: 'Security' },
    { href: '#', label: 'Customization' },
    { href: '#', label: 'Enterprise' },
    { href: '#', label: 'Partners' },
]

const docsLinks = [
    { href: '#', label: 'Introduction' },
    { href: '#', label: 'Installation' },
    { href: '#', label: 'Utils' },
    { href: '#', label: 'Principles' },
    { href: '#', label: 'Jargon' },
    { href: '#', label: 'Plugin' },
    { href: '#', label: 'Customizer' },
    { href: '#', label: 'Boilerplates' },
]

const communityLinks = [
    { href: '#', label: 'GitHub' },
    { href: '#', label: 'Discord' },
    { href: '#', label: 'Slack' },
    { href: '#', label: 'X / Twitter' },
]

const footerLinks = [
    {
        name: 'Enterprise',
        links: enterpriseLinks,
    },
    {
        name: 'Product',
        links: productLinks,
    },
    {
        name: 'Docs',
        links: docsLinks,
    },
]

export default function Footer() {
    return (
        <footer className="m-1 rounded-3xl border">
            <div className="mx-auto max-w-5xl space-y-16 px-5 py-16">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
                    <Link href="/" aria-label="go home">
                        <Logo />
                    </Link>
                    <div className="flex gap-3">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-muted-foreground hover:text-primary block">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary block">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary block">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="font-medium">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="hover:text-primary text-muted-foreground text-sm duration-150">
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
                                    <Link href={link.href} className="hover:text-primary text-muted-foreground text-sm duration-150">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <form className="mt-12 w-full max-w-xs">
                            <div className="space-y-2.5">
                                <Label className="block text-sm font-medium" htmlFor="email">
                                    Subscribe to our newsletter
                                </Label>
                                <Input className="input variant-mixed sz-md" placeholder="Your email" type="email" id="email" required name="email" />
                            </div>
                            <Button type="submit" className="mt-3">
                                <span>Subscribe</span>
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
                    <span className="text-title">&copy; tailus 2021 - Present</span>
                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                        Licence
                    </Link>
                </div>
            </div>
        </footer>
    )
}

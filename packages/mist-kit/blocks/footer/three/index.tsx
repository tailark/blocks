import { Logo } from '@tailark/core/components/logo'
import Link from 'next/link'

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '#',
            },
            {
                title: 'Solution',
                href: '#',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About',
                href: '#',
            },
            {
                title: 'Licence',
                href: '#',
            },
            {
                title: 'Privacy',
                href: '#',
            },
            {
                title: 'Cookies',
                href: '#',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-background border-b py-8 sm:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="space-y-6 md:col-span-2">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>

                        <div className="order-first flex flex-wrap gap-6 text-sm md:order-last">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X/Twitter"
                                className="text-muted-foreground hover:text-primary block">
                                <svg
                                    className="size-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-muted-foreground hover:text-primary block">
                                <svg
                                    className="size-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-3 grid gap-6 sm:grid-cols-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4">
                                <span className="block font-medium">{link.group}</span>

                                <div className="flex flex-wrap gap-4 sm:flex-col">
                                    {link.items.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary block duration-150">
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

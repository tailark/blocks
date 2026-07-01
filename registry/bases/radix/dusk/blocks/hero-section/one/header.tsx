'use client'
import React from 'react'

import Link from 'next/link'
import { Logo } from '@/registry/bases/radix/dusk/ui/logo'
import { X } from 'lucide-react'
import { Button } from '@/registry/bases/radix/dusk/ui/button'

const menuItems = [
    { name: 'Product', href: '#link' },
    { name: 'Solutions', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'Company', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    React.useEffect(() => {
        if (!menuState) return

        const mediaQuery = window.matchMedia('(max-width: 1023px)')
        const updateOverflow = () => {
            document.documentElement.classList.toggle('overflow-hidden', mediaQuery.matches)
        }

        updateOverflow()
        mediaQuery.addEventListener('change', updateOverflow)

        return () => {
            mediaQuery.removeEventListener('change', updateOverflow)
            document.documentElement.classList.remove('overflow-hidden')
        }
    }, [menuState])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background fixed top-0 z-20 w-full border-b max-lg:data-[state=active]:bottom-0"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between py-4 max-lg:gap-6">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2"
                            >
                                <Logo uniColor />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 block cursor-pointer after:absolute after:-inset-4 lg:hidden"
                            >
                                <div
                                    aria-hidden
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 size-4.5 m-auto flex flex-col items-center justify-center gap-[7px] duration-200"
                                >
                                    <span className="bg-foreground h-0.5 w-full rounded-full" />
                                    <span className="bg-foreground h-0.5 w-full rounded-full" />
                                </div>

                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 translate-x-[-3px] -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto size-fit max-lg:hidden">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end max-lg:space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6">
                            <div className="lg:hidden">
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-foreground block py-3 text-2xl font-medium"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                >
                                    <Link href="#">Login</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                >
                                    <Link href="#">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

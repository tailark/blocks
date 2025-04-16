'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

export const SiteHeader = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }

    return (
        <header className="border-b dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="mx-auto flex max-w-7xl justify-between px-6 py-4 lg:px-4">
                <div className="flex gap-4 md:gap-6">
                    <Link
                        href="/"
                        className="flex w-fit items-center gap-2">
                        <Logo />
                        <span className="sr-only font-bold">ns UI</span>
                    </Link>

                    <div className="flex items-center gap-1">
                        <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className={cn('text-foreground/75 rounded-full', isActive('/hero-section') && 'text-foreground')}>
                            <Link
                                href="/hero-section"
                                className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <div className="relative flex items-center">
                            <Button
                                asChild
                                size="sm"
                                variant="ghost"
                                className={cn('text-foreground/75 rounded-full', isActive('/snippets/button') && 'text-foreground')}>
                                <Link
                                    href="/snippets/button"
                                    className="!text-sm">
                                    Snippets
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex items-center gap-1">
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="size-8 rounded-full">
                        <Link
                            href="https://x.com/MeschacIrung/"
                            target="_blank"
                            aria-label="x/twitter"
                            rel="noreferrer"
                            className="text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                className="size-4">
                                <g fill="none">
                                    <g clip-path="url(#primeTwitter0)">
                                        <path
                                            fill="currentColor"
                                            d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="primeTwitter0">
                                            <path
                                                fill="#fff"
                                                d="M0 0h14v14H0z"
                                            />
                                        </clipPath>
                                    </defs>
                                </g>
                            </svg>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="size-8 rounded-full">
                        <Link
                            href="https://github.com/tailark/blocks"
                            target="_blank"
                            aria-label="GitHub"
                            rel="noreferrer"
                            className="text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16">
                                <path
                                    fill="currentColor"
                                    d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"
                                />
                            </svg>
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

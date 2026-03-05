import Link from 'next/link'
import { LogoIcon } from '@tailark/core/components/logo'
import { Button } from '@tailark/core/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

interface FooterContentProps {
    asSidePanel?: boolean
    className?: string
}

export const FooterContent = ({ asSidePanel, className }: FooterContentProps) => (
    <div className={cn('mt-auto border-t pt-4', asSidePanel && 'border-t-0', className)}>
        <Link
            href="/"
            aria-label="go home"
            className="hover:bg-muted -m-2 inline-block rounded-full p-2 duration-200">
            <LogoIcon className="size-4" />
        </Link>
        <div className="mt-2 flex items-center gap-1">
            <Button
                asChild
                variant="link"
                size="sm"
                className="text-muted-foreground hover:text-foreground -ml-3 h-7 gap-1 text-xs">
                <Link
                    href="https://github.com/tailark/blocks"
                    target="_blank">
                    GitHub
                    <ArrowUpRight className="!size-3 opacity-50" />
                </Link>
            </Button>
            <Button
                asChild
                variant="ghost"
                size="sm"
                className="size-7 rounded-full">
                <Link
                    href="https://x.com/MeschacIrung/"
                    target="_blank"
                    aria-label="x/twitter"
                    rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        className="size-3">
                        <g fill="none">
                            <g clipPath="url(#primeTwitter0)">
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
            <ThemeToggle />
        </div>
    </div>
)

export const SiteFooter = () => (
    <footer className="pb-16">
        <div className="mx-auto max-w-7xl px-10 lg:px-6">
            <Link
                href="/"
                aria-label="go home"
                className="hover:bg-muted -m-2 inline-block rounded-full p-2 duration-200">
                <LogoIcon className="size-5" />
            </Link>
            <p className="mt-2">Modern Shadcn UI Marketing blocks</p>
            <div className="mt-4 flex items-center">
                <Button
                    asChild
                    variant="link"
                    className="text-foreground decoration-primary -ml-4 gap-1">
                    <Link
                        href="https://github.com/tailark/blocks"
                        target="_blank"
                        className="text-sm">
                        GitHub
                        <ArrowUpRight className="!size-3.5 opacity-50" />
                    </Link>
                </Button>
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
                                <g clipPath="url(#primeTwitter0)">
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
                <ThemeToggle />
            </div>
        </div>
    </footer>
)

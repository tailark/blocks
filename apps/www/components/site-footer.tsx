import Link from 'next/link'
import { LogoIcon } from '@/components/logo'
import { Button } from '@tailark/core/ui/button'
import { ThemeToggle } from './theme-toggle'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export const SiteFooter = () => (
    <footer
        role="contentinfo"
        className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
            <FooterHomeLink />

            <div className="*:text-muted-foreground *:hover:text-foreground mt-4 flex flex-wrap gap-3">
                <Link
                    href="https://pro.tailark.com/illustrations"
                    className="text-sm">
                    Illustrations
                </Link>
                <Link
                    href="/blocks"
                    className="text-sm">
                    Blocks
                </Link>
                <Link
                    href="/pages"
                    className="text-sm">
                    Pages
                </Link>
                <Link
                    href="/docs"
                    className="text-sm">
                    Get started
                </Link>
                <Link
                    href="https://tailark.affonso.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm">
                    Affiliates <span className="font-medium">30%</span>
                </Link>
            </div>
            <FooterContent />
        </div>
    </footer>
)

export const FooterContent = ({ className, asSidePanel }: { className?: string; asSidePanel?: boolean }) => (
    <div className={cn('mt-auto', className)}>
        {asSidePanel && <FooterHomeLink />}
        <div className="-ml-2 mt-4 flex gap-2">
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

            <Button
                asChild
                variant="ghost"
                size="sm"
                className="size-8 rounded-full">
                <Link
                    href="mailto:hey@tailark.com"
                    aria-label="contact"
                    className="text-sm">
                    <Mail />
                </Link>
            </Button>
            <ThemeToggle />
        </div>
    </div>
)

const FooterHomeLink = () => (
    <Link
        href="/"
        aria-label="Home"
        className="hover:bg-muted -ml-1.5 mb-2 flex size-8 items-center justify-center rounded-md duration-200">
        <LogoIcon />
    </Link>
)

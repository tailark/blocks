import Link from 'next/link'
import { LogoIcon } from '@/components/logo'
import { Button } from '@tailark/core/ui/button'
import { ThemeToggle } from './theme-toggle'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export const SiteFooter = ({ asHome }: { asHome?: boolean }) => (
    <footer
        role="contentinfo"
        data-target={asHome ? 'home' : 'app'}
        className={cn('pb-16', asHome && 'pb-32 pt-24')}>
        <div className={cn('mx-auto max-w-7xl px-4', asHome && 'text-center')}>
            <FooterHomeLink />

            <div className={cn('*:text-muted-foreground *:hover:text-foreground mt-4 flex flex-wrap gap-3 text-sm', asHome && 'mt-12 flex-col gap-0 text-3xl font-medium tracking-tight *:py-3')}>
                <Link href="https://pro.tailark.com/illustrations">Illustrations</Link>
                <Link href="/blocks">Blocks</Link>
                <Link href="/pages">Pages</Link>
                <Link href="/docs">Get started</Link>
                <Link href="https://pro.tailark.com/early-access">Early access</Link>
                <Link href="https://pro.tailark.com/changelog">Changelog</Link>
                <Link
                    href="https://tailark.affonso.io"
                    target="_blank"
                    rel="noreferrer">
                    Affiliates <span className="font-semibold">30%</span>
                </Link>
            </div>
            <div className={cn('mt-auto', asHome && 'mx-auto mt-12 w-fit')}>
                <FooterContent />
            </div>
        </div>
    </footer>
)

export const FooterContent = ({ className, asSidePanel }: { className?: string; asSidePanel?: boolean }) => (
    <div className={cn('mt-auto', className)}>
        {asSidePanel && <FooterHomeLink />}
        <div className="not-in-data-[target=home]:-ml-2 mt-4 flex gap-2">
            <Button
                asChild
                variant="ghost"
                size="sm"
                className="size-8">
                <Link
                    href="https://x.com/MeschacIrung/"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="x/twitter"
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
                className="size-8">
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
        className="hover:bg-foreground/5 mb-2 inline-flex size-8 items-center justify-center rounded-md duration-200">
        <LogoIcon />
    </Link>
)

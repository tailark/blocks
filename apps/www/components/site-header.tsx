'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Logo } from '@tailark/core/components/logo'
import { Button } from '@tailark/core/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { KitSwitcher } from '@/components/kit-switcher'
import { cn } from '@/lib/utils'
import { Separator } from '@tailark/core/ui/separator'
import { ArrowRight, CircleArrowOutUpRightIcon, Menu, X } from 'lucide-react'
import { Dialog, DialogClose, DialogTitle, DialogContent, DialogTrigger } from '@tailark/core/ui/dialog'

export const SiteHeader = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [currentKitId, setCurrentKitId] = useState('dusk')

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }

    useEffect(() => {
        const savedKit = localStorage.getItem('selected-kit-id')
        if (savedKit) {
            setCurrentKitId(savedKit)
        }
    }, [])

    const getBasePath = (isHome: boolean = false) => {
        if (currentKitId === 'dusk-kit') {
            return isHome ? '/' : '/hero-section'
        } else if (currentKitId === 'mist-kit') {
            return `/mist${isHome ? '/' : '/hero-section'}`
        } else {
            return `/${currentKitId}${isHome ? '/' : '/hero-section'}`
        }
    }

    const blocksHref = getBasePath(false)
    const homeHref = getBasePath(true)

    return (
        <header className="border-foreground/5 border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-4">
                <div className="flex items-center">
                    <Link
                        href={homeHref}
                        className="flex w-fit items-center gap-2">
                        <Logo />
                        <span className="sr-only font-bold">Tailark</span>
                    </Link>
                    <span
                        aria-hidden
                        className="mx-4 hidden h-4 w-px rounded-full bg-black/20 sm:block dark:bg-white/10"
                        style={{ rotate: '20deg' }}
                    />
                    <div className="hidden sm:block">
                        <KitSwitcher />
                    </div>
                    {currentKitId == 'mist-kit' && (
                        <Button
                            asChild
                            size="sm"
                            variant="link"
                            className="text-foreground/75 rounded-full">
                            <Link
                                target="_blank"
                                href="https://github.com/tailark/blocks/blob/main/packages/mist-kit/README.md">
                                Docs
                                <CircleArrowOutUpRightIcon
                                    strokeWidth={2}
                                    className="size-3! opacity-50"
                                />
                            </Link>
                        </Button>
                    )}

                    {pathname !== '/' && pathname !== '/mist' && (
                        <Link
                            href="https://pro.tailark.com/"
                            className="rounded-(--radius) inset-ring-foreground/[0.065] inset-ring-1 bg-linear-to-r mx-auto hidden w-fit items-center gap-2 from-indigo-500/10 to-emerald-500/10 p-1 px-2 hover:bg-indigo-500/15 lg:flex">
                            <span className="bg-linear-to-r from-indigo-950 to-emerald-950 bg-clip-text text-xs font-medium text-transparent dark:from-indigo-200 dark:to-emerald-100">Pro : Introducing complete pages and 25% off flash sale</span>
                            <span className="bg-foreground/5 block h-4 w-px"></span>

                            <ArrowRight className="size-3" />
                        </Link>
                    )}
                </div>

                <div className="-mr-2 hidden items-center gap-4 sm:flex">
                    <div className="flex items-center gap-1">
                        <Button
                            asChild
                            size="sm"
                            variant="link"
                            className={cn('text-foreground/75 rounded-full', isActive(blocksHref) && 'text-foreground')}>
                            <Link
                                href={blocksHref}
                                className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant="link"
                            className={cn('text-foreground/75 rounded-full', isActive('/snippets/button') && 'text-foreground')}>
                            <Link
                                href="/snippets/button"
                                className="!text-sm">
                                Snippets
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant="link"
                            className={cn('text-foreground/75 rounded-full', isActive('/docs') && 'text-foreground')}>
                            <Link
                                href="/docs"
                                className="!text-sm">
                                Docs
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant="link"
                            className="text-foreground/75 rounded-full">
                            <Link
                                href="https://pro.tailark.com"
                                className="!text-sm">
                                Pro
                            </Link>
                        </Button>
                    </div>
                    <span
                        aria-hidden
                        className="hidden h-4 w-px rounded-full bg-black/20 sm:block dark:bg-white/10"
                    />
                    <div className="flex items-center gap-2">
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

                <div className="-mr-2 flex items-center gap-2 sm:hidden">
                    <ThemeToggle />

                    <Dialog
                        open={isOpen}
                        onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn('size-8', isOpen && 'opacity-0')}>
                                <Menu className="size-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="inset-y-4 translate-y-0 px-0 py-2">
                            <DialogTitle className="sr-only">Mobile menu</DialogTitle>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between pl-6 pr-3 pt-2">
                                    <Link
                                        href="/"
                                        className="flex w-fit items-center gap-2"
                                        onClick={() => setIsOpen(false)}>
                                        <Logo />
                                    </Link>
                                    <DialogClose asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon">
                                            <X className="!size-5" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </DialogClose>
                                </div>

                                <div className="pr-1.25 border-y py-2 pl-6">
                                    <KitSwitcher />
                                </div>

                                <div className="flex flex-col gap-2 px-3 pt-3">
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost"
                                        className={cn('justify-start', isActive(blocksHref) && 'bg-accent')}>
                                        <Link
                                            href={blocksHref}
                                            className="!text-sm"
                                            onClick={() => setIsOpen(false)}>
                                            Blocks
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost"
                                        className={cn('justify-start', isActive('/snippets/button') && 'bg-accent')}>
                                        <Link
                                            href="/snippets/button"
                                            className="!text-sm"
                                            onClick={() => setIsOpen(false)}>
                                            Snippets
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost"
                                        className={cn('justify-start', isActive('/docs') && 'bg-accent')}>
                                        <Link
                                            href="/docs"
                                            className="!text-sm"
                                            onClick={() => setIsOpen(false)}>
                                            Docs
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="link"
                                        className="text-foreground/75 rounded-full">
                                        <Link
                                            href="https://pro.tailark.com"
                                            className="!text-sm">
                                            Pro
                                        </Link>
                                    </Button>
                                </div>

                                <Separator className="my-2 border-t" />

                                <div className="flex items-center gap-2 px-5">
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
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    )
}

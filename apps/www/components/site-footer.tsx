import Link from 'next/link'
import { LogoIcon } from './logo'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export const SiteFooter = () => (
    <footer className="pb-16">
        <div className="mx-auto max-w-7xl px-10 lg:px-6">
            <Link
                href="/"
                className="hover:bg-muted -m-2 inline-block rounded-full p-2 duration-200">
                <LogoIcon className="size-5" />
            </Link>
            <p className="mt-2">Modern Shadcn UI Marketing blocks</p>
            <div className="mt-4 flex">
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
                <ThemeToggle />
            </div>
        </div>
    </footer>
)

'use client'
import { RotateCw } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@tailark/core/ui/button'

export const DevToolbar = () => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className="z-100 outline-border fixed inset-x-0 bottom-4 mx-auto w-fit rounded-full border border-white bg-zinc-100 p-px shadow-md shadow-black/10 outline-1 backdrop-blur-3xl dark:border-black dark:bg-zinc-700/50">
            <div className="flex items-center gap-0.5">
                <ThemeToggle />
                <span className="border-background block h-4 w-0.5 border-l bg-black/20 dark:bg-white/10" />
                <Button
                    onClick={handleReload}
                    size="icon"
                    variant="ghost"
                    className="group size-8 rounded-full"
                    aria-label="Reload page">
                    <RotateCw className="size-4 duration-200 group-hover:rotate-12" />
                </Button>
            </div>
        </div>
    )
}

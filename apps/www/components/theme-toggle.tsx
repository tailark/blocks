'use client'

import * as React from 'react'
import { MoonStar, SunDim } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@tailark/core/ui/button'

export const ThemeToggle = () => {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                aria-label="toggle theme"
                className="size-8 rounded-full">
                <SunDim className="size-5!" />
            </Button>
        )
    }

    return (
        <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="ghost"
            aria-label="toggle theme"
            className="size-8 rounded-full">
            {theme === 'dark' ? <SunDim className="size-5!" /> : <MoonStar />}
        </Button>
    )
}

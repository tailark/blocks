'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
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
                className="size-8 rounded-full">
                <Sun className="size-4" />
            </Button>
        )
    }

    return (
        <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="ghost"
            className="size-8 rounded-full">
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
    )
}

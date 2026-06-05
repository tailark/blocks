'use client'

import { cn } from '@tailark/core/lib/utils'
import { Button } from '@veil/components/ui/button'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useMemo, useState } from 'react'

type ThemeOption = 'system' | 'light' | 'dark'

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [hoveredTheme, setHoveredTheme] = useState<ThemeOption | null>(null)

    const selectedTheme = (theme ?? 'system') as ThemeOption

    const tooltipLabel = useMemo(() => {
        const activeTheme = hoveredTheme ?? selectedTheme

        switch (activeTheme) {
            case 'light':
                return 'Switch to light theme'
            case 'dark':
                return 'Switch to dark theme'
            case 'system':
            default:
                return 'Switch to system theme'
        }
    }, [hoveredTheme, selectedTheme])

    return (
        <div className="w-fit">
            <div className="-ml-2 mb-2 flex">
                <Button
                    size="icon"
                    variant="ghost"
                    aria-label="switch to system theme"
                    aria-pressed={selectedTheme === 'system'}
                    className={cn(selectedTheme === 'system' && 'text-foreground')}
                    onMouseEnter={() => setHoveredTheme('system')}
                    onMouseLeave={() => setHoveredTheme(null)}
                    onFocus={() => setHoveredTheme('system')}
                    onBlur={() => setHoveredTheme(null)}
                    onClick={() => setTheme('system')}>
                    <Monitor />
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    aria-label="switch to light theme"
                    aria-pressed={selectedTheme === 'light'}
                    className={cn(selectedTheme === 'light' && 'text-foreground')}
                    onMouseEnter={() => setHoveredTheme('light')}
                    onMouseLeave={() => setHoveredTheme(null)}
                    onFocus={() => setHoveredTheme('light')}
                    onBlur={() => setHoveredTheme(null)}
                    onClick={() => setTheme('light')}>
                    <Sun />
                </Button>

                <Button
                    size="icon"
                    variant="ghost"
                    aria-label="switch to dark theme"
                    aria-pressed={selectedTheme === 'dark'}
                    className={cn(selectedTheme === 'dark' && 'text-foreground')}
                    onMouseEnter={() => setHoveredTheme('dark')}
                    onMouseLeave={() => setHoveredTheme(null)}
                    onFocus={() => setHoveredTheme('dark')}
                    onBlur={() => setHoveredTheme(null)}
                    onClick={() => setTheme('dark')}>
                    <Moon />
                </Button>
            </div>

            <div
                aria-live="polite"
                className={cn('text-muted-foreground w-fit text-xs leading-none transition-opacity', hoveredTheme ? 'opacity-100' : 'opacity-0')}>
                {tooltipLabel}
            </div>
        </div>
    )
}

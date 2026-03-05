'use client'

import { Search, X, Filter } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { LayoutToggle } from './layout-toggle'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    columns?: 2 | 3
    onColumnsChange?: (columns: 2 | 3) => void
    isFilterCollapsed?: boolean
    onOpenFilter?: () => void
}

export function SearchBar({ value, onChange, placeholder = 'Search...', columns, onColumnsChange, isFilterCollapsed, onOpenFilter }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/') {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const clearSearch = () => {
        onChange('')
        inputRef.current?.focus()
    }

    return (
        <div className="bg-card sticky top-0 z-50 border-b">
            <div className="relative flex">
                {isFilterCollapsed && onOpenFilter && (
                    <button
                        onClick={onOpenFilter}
                        className="hover:bg-muted/50 flex shrink-0 items-center gap-2 border-r px-4 text-sm transition-colors lg:ml-[7px]"
                        aria-label="Open filters">
                        <Filter className="size-4" />
                        <span className="text-foreground font-medium">Filters</span>
                    </button>
                )}
                <div className="relative flex-1">
                    <Search className="text-muted-foreground pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 lg:left-6" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="placeholder:text-muted-foreground h-12 w-full bg-transparent px-10 text-sm outline-none lg:pl-12 lg:pr-48"
                    />
                </div>
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2 lg:right-6">
                    {value && (
                        <button
                            onClick={clearSearch}
                            className="hover:bg-muted flex size-6 items-center justify-center rounded-md"
                            aria-label="Clear search">
                            <X className="size-3.5" />
                        </button>
                    )}

                    <div className="max-lg:hidden">
                        <kbd className="bg-background text-muted-foreground pointer-events-none flex size-5 select-none items-center justify-center gap-1 rounded-sm border px-1 font-sans text-[0.7rem] font-medium [&_svg:not([class*='size-'])]:size-3">/</kbd>
                    </div>

                    {columns !== undefined && onColumnsChange && (
                        <LayoutToggle
                            columns={columns}
                            onColumnsChange={onColumnsChange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export const KeyCombo = () => {
    return (
        <div className="flex gap-0.5">
            <kbd className="bg-background text-muted-foreground pointer-events-none flex size-5 select-none items-center justify-center gap-1 rounded-sm border px-1 font-sans text-[0.7rem] font-medium [&_svg:not([class*='size-'])]:size-3">⌘</kbd>
            <kbd className="bg-background text-muted-foreground pointer-events-none flex size-5 select-none items-center justify-center gap-1 rounded-sm border px-1 font-sans text-[0.7rem] font-medium [&_svg:not([class*='size-'])]:size-3">K</kbd>
        </div>
    )
}

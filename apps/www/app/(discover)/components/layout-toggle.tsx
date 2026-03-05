'use client'

import { useState, useEffect } from 'react'
import { Columns2, Columns3 } from 'lucide-react'

interface LayoutToggleProps {
    columns: 2 | 3
    onColumnsChange: (columns: 2 | 3) => void
}

const toggleClasses = 'flex h-full w-8 active:scale-98 items-center justify-center rounded-md data-[state=active]:ring-1 not-data-[state=active]:hover:bg-foreground/3 data-[state=active]:ring-foreground/6.5 data-[state=active]:shadow-md data-[state=active]:shadow-black/10 data-[state=active]:bg-card data-[state=active]:text-foreground transition-all'

export function LayoutToggle({ columns, onColumnsChange }: LayoutToggleProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex items-center max-sm:hidden">
            <span className="bg-border mr-2 block h-5 w-px rounded" />
            <div className="bg-foreground/5 ring-foreground/5 flex h-7 items-center gap-0.5 rounded-lg p-0.5 ring-1">
                <button
                    onClick={() => onColumnsChange(3)}
                    data-state={columns === 3 ? 'active' : 'inactive'}
                    className={toggleClasses}
                    aria-label="3 columns"
                    title="3 columns">
                    <Columns3 className="size-4" />
                </button>
                <button
                    onClick={() => onColumnsChange(2)}
                    data-state={columns === 2 ? 'active' : 'inactive'}
                    className={toggleClasses}
                    aria-label="2 columns"
                    title="2 columns">
                    <Columns2 className="size-4" />
                </button>
            </div>
        </div>
    )
}

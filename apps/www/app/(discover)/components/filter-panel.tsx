'use client'

import { Atom, Blocks, BookOpen, Box, Crown, Filter, Flower, Gem, ImageIcon, Layers2, MoonStar, PanelLeftClose, PanelLeftOpen, Shapes } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FilterGroup } from './discover-provider'
import { useDiscover } from './discover-provider'
import { FooterContent } from '@/components/site-footer'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { Suspense, useState } from 'react'
import { ScrollArea } from '@tailark/core/ui/scroll-area'

interface FilterPanelProps {
    filterGroups: FilterGroup[]
    selectedFilters: Record<string, string[]>
    onFilterChange: (groupKey: string, values: string[]) => void
    isCollapsed: boolean
    onToggleCollapse: () => void
}

const radioItem =
    'rounded-md active:scale-99 duration-100 hover:ring-foreground/10 ring-1 ring-foreground/5 disabled:opacity-50 flex items-center justify-center h-7 px-2.5 gap-2 transition-[color] data-[state=checked]:text-shadow-[0.1px_0_0_currentColor] data-[state=checked]:text-foreground hover:text-foreground text-foreground/65 dark:data-[state=checked]:bg-foreground/5 data-[state=checked]:bg-card data-[state=checked]:shadow-black/5 data-[state=checked]:shadow-md not-data-[state=checked]:hover:bg-foreground/5 data-[state=checked]:ring-foreground/10'

export function FilterPanel({ filterGroups, selectedFilters, onFilterChange, isCollapsed, onToggleCollapse }: FilterPanelProps) {
    const pathname = usePathname()
    const { type, viewMode, setViewMode } = useDiscover()
    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHasScrolled(latest > 35)
    })

    const toggleFilter = (groupKey: string, value: string) => {
        const current = selectedFilters[groupKey] || []
        if (current.includes(value)) {
            onFilterChange(
                groupKey,
                current.filter((v) => v !== value)
            )
        } else {
            onFilterChange(groupKey, [...current, value])
        }
    }

    const clearGroup = (groupKey: string) => {
        onFilterChange(groupKey, [])
    }

    return (
        <div className={cn('sticky top-0 z-50 h-dvh overflow-hidden border-r duration-300 ease-out', isCollapsed ? 'w-0' : 'w-72 border-r')}>
            <div className="flex h-full min-w-72 flex-col">
                {/* Header */}
                <div className="border-b">
                    <div className="flex items-center justify-between pl-4 lg:pl-6">
                        <div className={cn('flex items-center gap-2', isCollapsed && 'opacity-0')}>
                            <Filter className="size-4" />
                            <span className="text-sm font-medium">Filters</span>
                        </div>

                        <button
                            onClick={onToggleCollapse}
                            className="hover:bg-muted/50 flex size-12 cursor-pointer items-center justify-center"
                            aria-label={isCollapsed ? 'Expand filters' : 'Collapse filters'}>
                            {isCollapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
                        </button>
                    </div>
                </div>
                <ScrollArea className="max-h-[calc(100%-3rem)] overflow-y-auto">
                    {/* Filter Content */}
                    {!isCollapsed && (
                        <div className="p-4 lg:p-6">
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium">Types</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/blocks"
                                            data-state={pathname === '/blocks' ? 'checked' : 'unchecked'}
                                            className={radioItem}>
                                            <Shapes
                                                strokeWidth={1.5}
                                                className="*:nth-2:fill-purple-300 size-4 *:first:fill-indigo-500 *:last:fill-emerald-200 dark:stroke-transparent"
                                            />
                                            <span className="text-sm">Blocks</span>
                                        </Link>
                                        <Link
                                            href="/pages"
                                            data-state={pathname === '/pages' ? 'checked' : 'unchecked'}
                                            className={radioItem}>
                                            <Layers2 className="size-3.5 *:first:fill-emerald-500 *:last:fill-emerald-200 dark:stroke-transparent" />
                                            <span className="text-sm">Pages</span>
                                        </Link>
                                        <Link
                                            href="https://pro.tailark.com/illustrations"
                                            target="_blank" rel="noopener noreferrer"
                                            data-state={pathname === '/illustrations' ? 'checked' : 'unchecked'}
                                            className={radioItem}>
                                            <ImageIcon className="size-3.5 *:first:fill-sky-300 *:last:fill-sky-600 dark:stroke-transparent" />
                                            <span className="text-sm">Illustrations</span>
                                        </Link>
                                    </div>
                                    <Separator />
                                </div>

                                <Suspense>
                                    {filterGroups.map((group) => {
                                        const selected = selectedFilters[group.key] || []
                                        const isLastBeforeCategories = group.key === 'licences'
                                        return (
                                            <div key={group.key}>
                                                <div className="group max-w-72 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium">{group.title}</h3>
                                                        {selected.length > 0 && (
                                                            <button
                                                                onClick={() => clearGroup(group.key)}
                                                                className="text-muted-foreground hover:text-foreground -m-2 p-2 text-xs">
                                                                Clear
                                                            </button>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {group.items.map((item) => {
                                                            const isSelected = selected.includes(item.name)
                                                            return (
                                                                <button
                                                                    key={item.name}
                                                                    onClick={() => toggleFilter(group.key, item.name)}
                                                                    data-state={isSelected ? 'checked' : 'unchecked'}
                                                                    className={radioItem}>
                                                                    <FilterItemIcon
                                                                        groupKey={group.key}
                                                                        itemName={item.name}
                                                                    />
                                                                    <span className="text-sm capitalize">{item.name.replace('-kit', '').replace(/-/g, ' ')}</span>
                                                                    {item.quantity !== undefined && <span className="text-muted-foreground text-xs">{item.quantity}</span>}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>

                                                    <Separator />
                                                </div>

                                                {/* View toggle - render right before categories */}
                                                {isLastBeforeCategories && type === 'blocks' && (
                                                    <div className="group space-y-4 pt-4">
                                                        <h3 className="text-sm font-medium">View</h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            <button
                                                                onClick={() => setViewMode('categories')}
                                                                data-state={viewMode === 'categories' ? 'checked' : 'unchecked'}
                                                                className={radioItem}>
                                                                <Box
                                                                    strokeWidth={1.5}
                                                                    className="*:nth-2:fill-emerald-300 size-3.5 *:first:fill-blue-500 *:last:fill-emerald-200 dark:stroke-transparent"
                                                                />
                                                                <span className="text-sm">By category</span>
                                                            </button>
                                                            <button
                                                                onClick={() => setViewMode('content')}
                                                                data-state={viewMode === 'content' ? 'checked' : 'unchecked'}
                                                                className={radioItem}>
                                                                <Blocks
                                                                    strokeWidth={1.5}
                                                                    className="size-3.5 *:first:fill-sky-500 *:last:fill-sky-200 dark:stroke-transparent"
                                                                />
                                                                <span className="text-sm">All blocks</span>
                                                            </button>
                                                        </div>
                                                        <Separator />
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </Suspense>
                            </div>
                        </div>
                    )}
                </ScrollArea>
                {!isCollapsed && (
                    <FooterContent
                        asSidePanel={hasScrolled}
                        className="px-6 pb-3"
                    />
                )}
            </div>
        </div>
    )
}

const Separator = () => <span className="bg-size-[6px_1px] mt-5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30" />

const kitIcons: Record<string, React.ReactNode> = {
    mist: <BookOpen className="size-3.5 fill-indigo-500/50 text-indigo-500" />,
    dusk: <MoonStar className="text-foreground fill-foreground/50 size-3.5" />,
    veil: (
        <Atom
            fillOpacity={0.9}
            className="size-3.5 fill-[#98785d] text-[#98785d]"
        />
    ),
    quartz: <Gem className="size-3.5 fill-indigo-500/75 text-indigo-500 dark:text-indigo-400" />,
}

const licenceIcons: Record<string, React.ReactNode> = {
    free: <Flower className="size-3.5 text-emerald-500" />,
    pro: <Crown className="size-3.5 fill-amber-500 text-amber-700" />,
}

function FilterItemIcon({ groupKey, itemName }: { groupKey: string; itemName: string }) {
    if (groupKey === 'kits') {
        return kitIcons[itemName] || null
    }
    if (groupKey === 'licences') {
        return licenceIcons[itemName] || null
    }
    return null
}

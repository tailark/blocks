'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@tailark/core/lib/utils'
import type { Block } from '@/data/blocks'

interface ActiveCategoryLinksProps {
    currentKitFullName: string
    currentKitShortName: string
    allCategories: string[]
    blocks: Block[]
}

export function ActiveCategoryLinks({ currentKitFullName, currentKitShortName, allCategories, blocks }: ActiveCategoryLinksProps) {
    const pathname = usePathname()

    return (
        <ul
            data-autoscroll
            className="relative flex h-11 w-max items-center gap-x-3 overflow-y-hidden px-6 lg:gap-5">
            {allCategories.map((category) => {
                const hasBlocksInKit = blocks.some((block) => block.kit === currentKitFullName && block.category === category)

                const href = currentKitShortName === 'default' ? `/${category}` : `/${currentKitShortName}/${category}`

                const isActive = pathname === href

                return (
                    <li
                        key={category}
                        className={cn('flex h-full snap-start items-center border-b border-b-transparent', isActive && 'border-primary')}>
                        <Link
                            href={hasBlocksInKit ? href : '#'}
                            aria-disabled={!hasBlocksInKit}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn('hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center text-nowrap rounded-full px-1 text-sm capitalize text-zinc-700 transition-colors duration-200 lg:-mx-2 lg:px-3', {
                                'text-foreground/75': !isActive && hasBlocksInKit,
                                'text-foreground!': isActive,
                                'pointer-events-none cursor-not-allowed opacity-50': !hasBlocksInKit && !isActive,
                            })}
                            onClick={(e) => !hasBlocksInKit && e.preventDefault()}>
                            {category.replace(/-/g, ' ')}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@tailark/core/lib/utils'

export function ActiveCategoryLinks({ categories }: { categories: string[] }) {
    const pathname = usePathname()

    return (
        <ul
            data-autoscroll
            className="relative flex h-11 w-max items-center gap-6 overflow-y-hidden px-6 lg:gap-5">
            {categories.map((category) => {
                const isActive = pathname === `/${category}`
                return (
                    <li
                        key={category}
                        className={cn('flex h-full snap-start items-center border-b border-b-transparent', isActive && 'border-primary')}>
                        <Link
                            href={`/${category}`}
                            prefetch={true}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn(isActive && 'text-foreground!', 'hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center text-nowrap rounded-full px-1 text-sm text-zinc-700 lg:-mx-2 lg:px-3')}>
                            <span className="block w-max text-nowrap capitalize">{category}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

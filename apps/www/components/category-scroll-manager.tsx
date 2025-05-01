'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, ReactNode } from 'react'

export function CategoryScrollManager({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const scrollRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const element = scrollRef.current
        if (!element) return

        const activeLink = element.querySelector('[aria-current="page"]') as HTMLAnchorElement
        if (!activeLink) return

        if ('scrollIntoViewIfNeeded' in activeLink) {
            // @ts-expect-error - scrollIntoViewIfNeeded is a non-standard method not in TypeScript's DOM types
            ;(activeLink as HTMLAnchorElement).scrollIntoViewIfNeeded()
        } else {
            activeLink.scrollIntoView()
        }
    }, [pathname])

    return <div ref={scrollRef}>{children}</div>
}

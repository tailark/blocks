'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, ReactNode } from 'react'

export function CategoryScrollManager({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const scrollRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const element = scrollRef.current
        if (!element) return

        const activeLink = element.querySelector('[aria-current="page"]')
        if (!activeLink) return

        if ('scrollIntoViewIfNeeded' in activeLink) {
            ;(activeLink as any).scrollIntoViewIfNeeded()
        } else {
            activeLink.scrollIntoView()
        }
    }, [pathname])

    return <div ref={scrollRef}>{children}</div>
}

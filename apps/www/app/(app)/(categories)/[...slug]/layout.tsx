import React, { use } from 'react'
import { blocks, categories } from '@/data/blocks'
import BlocksNav from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'

interface LayoutProps {
    children: React.ReactNode
    params: Promise<{ slug: string[] }>
}

function getKitDetailsFromSlug(slug: string[]): { kitShortName: string; kitFullName: string } {
    let kitShortName: string
    let kitFullName: string

    if (!slug || slug.length === 0) {
        kitShortName = 'default'
        kitFullName = 'dusk-kit'
    } else if (slug.length === 1) {
        kitShortName = 'default'
        kitFullName = 'dusk-kit'
    } else {
        kitShortName = slug[0]
        kitFullName = `${kitShortName}-kit`
    }
    return { kitShortName, kitFullName }
}

export default function CategoryLayout({ children, params }: LayoutProps) {
    const { slug } = use(params)
    const { kitShortName, kitFullName } = getKitDetailsFromSlug(slug)

    const allCategories = categories

    return (
        <>
            <BlocksNav
                currentKitFullName={kitFullName}
                currentKitShortName={kitShortName}
                allCategories={allCategories}
                blocks={blocks}
            />
            <main>{children}</main>
            <SiteFooter />
        </>
    )
}

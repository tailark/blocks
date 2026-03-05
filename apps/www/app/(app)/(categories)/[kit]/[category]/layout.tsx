import React from 'react'
import { blocks, categories } from '@/data/blocks'
import BlocksNav from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'

interface LayoutProps {
    children: React.ReactNode
    params: Promise<{ kit: string }>
}

export default async function KitCategoryLayout({ children, params }: LayoutProps) {
    const { kit } = await params
    const kitFullName = `${kit}-kit`

    return (
        <>
            <BlocksNav
                currentKitFullName={kitFullName}
                currentKitShortName={kit}
                allCategories={categories}
                blocks={blocks}
            />
            <main className="bg-muted/50 dark:bg-background min-h-screen">{children}</main>
            <div className="bg-muted/50 dark:bg-background">
                <SiteFooter />
            </div>
        </>
    )
}

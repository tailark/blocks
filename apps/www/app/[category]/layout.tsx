import CategoryNavigation from '@repo/core/components/blocks-nav'
import { SiteFooter } from '@repo/core/components/site-footer'
import { SiteHeader } from '@repo/core/components/site-header'
import { categories } from '@/data/blocks'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SiteHeader />
            <CategoryNavigation categories={categories} />
            <main>{children}</main>

            <SiteFooter />
        </>
    )
}

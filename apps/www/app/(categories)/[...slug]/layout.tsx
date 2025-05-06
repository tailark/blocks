import CategoryNavigation from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
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

import { SiteFooter } from '@repo/core/components/site-footer'
import { SiteHeader } from '@repo/core/components/site-header'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SiteHeader />
            <main className="mb-12 lg:mb-16">{children}</main>

            <SiteFooter />
        </>
    )
}

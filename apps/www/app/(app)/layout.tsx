import { SiteHeader } from '@/components/site-header'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SiteHeader />
            {children}
        </>
    )
}

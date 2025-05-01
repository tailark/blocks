import { DevToolbar } from '@/components/toolbar'

export const dynamic = 'force-static'
export const revalidate = 3600 // Cache for 1 hour

export default function BlockLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            {process.env.NODE_ENV === 'development' && <DevToolbar />}
            {children}
        </>
    )
}

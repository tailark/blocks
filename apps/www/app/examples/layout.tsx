import { ExampleFooter } from '@/components/ex-footer'
import { ExampleHeeader } from '@/components/ex-header'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <ExampleHeeader />
            <>{children}</>

            <ExampleFooter />
        </>
    )
}

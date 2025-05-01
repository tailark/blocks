import { ExampleFooter } from '@repo/core/components/ex-footer'
import { ExampleHeeader } from '@repo/core/components/ex-header'

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

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Tailark Registry",
    description: "Open source shadcn/ui registry for Tailark blocks and components.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

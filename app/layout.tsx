import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Geist_Mono, Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'Tailark Registry',
    description: 'Open source shadcn/ui registry for Tailark blocks and components.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn('antialiased', fontMono.variable, 'font-sans', geist.variable)}>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}

import type { Metadata } from 'next'
import { Geist_Mono, Asar } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import ServiceWorkerInit from '@/components/service-worker-init'

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const asar = Asar({
    variable: '--font-asar',
    subsets: ['latin'],
    weight: ['400'],
})

export const metadata: Metadata = {
    title: 'Shadcn Marketing Blocks | Tailark',
    description: 'Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.',
    keywords: 'shadcn, ui, blocks, marketing, components, tailwind, react, nextjs, tailark, responsive, design system, templates, template, hero section, features, footers, contact forms, Bento, Call To Action, Testimonials, logo cloud, integrations, content, team, pricing, login, sign in, logout, stats FAQ sections',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body className={`${geistMono.variable} ${asar.variable} overflow-x-hidden antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <ServiceWorkerInit />
            </body>
            <GoogleAnalytics gaId="G-6KY6TLKXKY" />
        </html>
    )
}

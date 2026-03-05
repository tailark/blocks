import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { DiscoverProvider } from './components/discover-provider'
import { DiscoverContent } from './components/discover-content'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function DiscoverLayout({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <div
                data-theme="global"
                className="2xl:max-w-336 2xl:mx-auto 2xl:border">
                <SiteHeader isWide />
                <Suspense>
                    <DiscoverProvider>
                        <DiscoverContent>{children}</DiscoverContent>
                    </DiscoverProvider>
                </Suspense>
            </div>
        </NuqsAdapter>
    )
}

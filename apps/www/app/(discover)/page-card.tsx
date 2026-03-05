'use client'
import { cn, titleToNumber } from '@/lib/utils'
import { DiscoverPageCard } from './components/discover-page-card'

export const PageCardParent = ({ children, columns = 3 }: { children: React.ReactNode; columns?: 2 | 3 }) => {
    return <div className={cn('grid grid-cols-1 [--opacity:1] hover:[--opacity:0.9] sm:grid-cols-2', columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}>{children}</div>
}

export const PageCard = ({ style, asDialog, category, variant, onClick, imageUrl }: { style: string; asDialog?: boolean; category: string; variant: string; onClick?: () => void; imageUrl?: string }) => {
    const registryItem = `${category}-${variant}`

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const v0registryUrl = `${baseUrl}/registry/pages/${style}/${registryItem}`

    return (
        <DiscoverPageCard
            href={`/${style}-${category}-${variant}`}
            title={registryItem}
            subtitle={style.replace(/-/g, ' ')}
            imageSrc={imageUrl}
            imageAlt={`${style} ${category} page ${titleToNumber(variant)}`}
            imageWidth={1440}
            imageHeight={1822}
            imageClassName="shadow-blac/3 size-full object-cover object-top"
            onClick={onClick}
            asDialog={asDialog}
            registryUrl={v0registryUrl}
            registryItem={registryItem}
            eventName="page_cli_copy"
            category={category}
        />
    )
}

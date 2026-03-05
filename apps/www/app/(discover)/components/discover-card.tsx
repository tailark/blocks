'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { DiscoverCardToolbarProps } from './discover-card-toolbar'
import { DiscoverPageCard } from './discover-card-wrapper'

const getBaseUrl = () => (typeof window !== 'undefined' ? window.location.origin : '')

interface DiscoverBlockCardProps extends Omit<DiscoverCardToolbarProps, 'registryUrl'> {
    href: string
    title: string
    subtitle: string
    imageSrc: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
    aspectRatio?: number
    imageClassName?: string
    showToolbar?: boolean
    licence?: string
}

export function DiscoverBlockCard({ href, title, subtitle, imageSrc, imageAlt, imageWidth, imageHeight, aspectRatio, imageClassName = '', category, registryItem, eventName, theme, showToolbar = true, licence, disableV0, openInNewTab }: DiscoverBlockCardProps) {
    const { resolvedTheme } = useTheme()

    const isDark = resolvedTheme === 'dark'
    const noDarkImageBlocks = ['secondary-hero-2.png', 'secondary-hero-4.png']
    // Mist kit doesn't have dark images
    const isMistKit = imageSrc.includes('/mist/')
    const hasDarkImage = !isMistKit && !noDarkImageBlocks.some((block) => imageSrc.endsWith(block))
    const themedImageSrc = isDark && hasDarkImage ? imageSrc.replace('.png', '-dark.png') : imageSrc
    const registryUrl = `${getBaseUrl()}/registry/${registryItem}`

    const cardContent = (
        <div className="relative aspect-auto overflow-hidden">
            <div className="flex items-center justify-center p-2">
                <div
                    style={{ aspectRatio }}
                    className="relative m-auto">
                    <Image
                        src={themedImageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className={imageClassName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 35vw"
                    />
                </div>
            </div>
        </div>
    )

    if (!showToolbar) {
        return (
            <CardContainer>
                {cardContent}
                <CardFooter
                    href={href}
                    title={title}
                    subtitle={subtitle}
                    aspectRatio={aspectRatio}
                    licence={licence}
                    openInNewTab={openInNewTab}
                />
            </CardContainer>
        )
    }

    return (
        <DiscoverPageCard
            href={href}
            title={title}
            subtitle={subtitle}
            registryUrl={registryUrl}
            category={category}
            registryItem={registryItem}
            eventName={eventName}
            theme={theme}
            isBlock={true}
            licence={licence}
            disableV0={disableV0}
            openInNewTab={openInNewTab}>
            {cardContent}
        </DiscoverPageCard>
    )
}

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-2">
            <div className="bg-card ring-border hover:ring-foreground/10 relative rounded-2xl p-1 shadow-md shadow-black/5 ring-1 transition-all hover:shadow-lg">{children}</div>
        </div>
    )
}

interface CardFooterProps {
    href: string
    title: string
    subtitle: string
    aspectRatio?: number
    onClick?: () => void
    asDialog?: boolean
    licence?: string
    openInNewTab?: boolean
}

export const CardFooter = ({ href, title, subtitle, aspectRatio, onClick, asDialog, licence, openInNewTab }: CardFooterProps) => {
    return (
        <div className={cn('space-y-0.5 px-3 pb-2', !aspectRatio && 'pt-2')}>
            <p className="flex items-center gap-1.5 text-sm font-medium">
                <Link
                    href={href}
                    onClick={onClick}
                    target={openInNewTab ? '_blank' : undefined}
                    rel={openInNewTab ? 'noopener noreferrer' : undefined}
                    className="capitalize before:absolute before:inset-0">
                    {title.replace(/-/g, ' ')}
                </Link>
                {licence && <span className={cn('relative z-10 rounded-full px-1 py-0.5 text-[10px] font-medium capitalize leading-none', licence === 'pro' ? 'bg-linear-to-r inset-ring inset-ring-foreground/15 text-foreground/90 from-emerald-500/35 to-indigo-500/25' : 'text-muted-foreground bg-muted')}>{licence}</span>}
            </p>
            {!asDialog && <p className="text-muted-foreground text-xs capitalize">{subtitle}</p>}
        </div>
    )
}

'use client'
import Image from 'next/image'
import { DiscoverCardToolbar, DiscoverCardToolbarProps } from './discover-card-toolbar'
import { CardContainer, CardFooter } from './discover-card'
import { useState } from 'react'

interface DiscoverPageCardProps extends DiscoverCardToolbarProps {
    href: string
    title: string
    subtitle: string
    imageSrc?: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
    imageClassName?: string
    asDialog?: boolean
    onClick?: () => void
}

export const DiscoverPageCard = ({ category, registryItem, eventName, theme, href, title, subtitle, imageSrc, imageAlt, imageWidth, imageHeight, imageClassName = '', asDialog = false, onClick, registryUrl }: DiscoverPageCardProps) => {
    const [isToolbarVisible, setIsToolbarVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsToolbarVisible(true)
    }

    const handleMouseLeave = () => {
        setIsToolbarVisible(false)
    }

    return (
        <div
            className="group relative"
            onMouseEnter={!asDialog ? handleMouseEnter : undefined}
            onMouseLeave={!asDialog ? handleMouseLeave : undefined}>
            {isToolbarVisible && !asDialog && (
                <DiscoverCardToolbar
                    href={href}
                    title={title}
                    subtitle={subtitle}
                    registryUrl={registryUrl}
                    eventName={eventName}
                    category={category}
                    registryItem={registryItem}
                    theme={theme}
                />
            )}

            <CardContainer>
                <div className="aspect-4/5 ring-foreground/5 border-background overflow-hidden rounded-xl border shadow shadow-black/5 ring-1">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={imageWidth}
                            height={imageHeight}
                            className={imageClassName}
                            sizes="(min-width: 1440px) 1440px, (min-width: 1024px) 1024px, 100vw"
                        />
                    ) : (
                        <div className="bg-muted size-full" />
                    )}
                </div>
                <CardFooter
                    href={href}
                    title={title}
                    subtitle={subtitle}
                    onClick={onClick}
                    asDialog={asDialog}
                />
            </CardContainer>
        </div>
    )
}

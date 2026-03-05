'use client'
import { DiscoverCardToolbar, DiscoverCardToolbarProps } from './discover-card-toolbar'
import { CardContainer, CardFooter } from './discover-card'
import { useState } from 'react'

interface DiscoverPageCardProps extends DiscoverCardToolbarProps {
    href: string
    title: string
    subtitle: string
    asDialog?: boolean
    onClick?: () => void
    children: React.ReactNode
    isBlock?: boolean
    licence?: string
}

export const DiscoverPageCard = ({ category, registryItem, eventName, theme, href, title, subtitle, asDialog = false, onClick, children, isBlock, registryUrl, licence, disableV0, openInNewTab }: DiscoverPageCardProps) => {
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
            {isToolbarVisible && !asDialog && <DiscoverCardToolbar {...{ href, title, subtitle, registryUrl, eventName, category, registryItem, theme, isBlock, disableV0, openInNewTab }} />}

            <CardContainer>
                {children}
                <CardFooter {...{ href, title, subtitle, onClick, asDialog, licence, openInNewTab }} />
            </CardContainer>
        </div>
    )
}

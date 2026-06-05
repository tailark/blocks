'use client'

import { cn } from '@tailark/core/lib/utils'
import { Button } from '@veil/components/ui/button'
import { Twitter, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type SocialMedia = 'twitter' | 'linkedin' | 'youtube'

export const SocialMedias = () => {
    const [hoveredSocialMedia, setHoveredSocialMedia] = useState<SocialMedia | null>(null)

    const tooltipLabel = useMemo(() => {
        const activeTheme = hoveredSocialMedia ?? 'twitter'

        switch (activeTheme) {
            case 'twitter':
                return 'Follow us on Twitter'
            case 'linkedin':
                return 'Follow us on LinkedIn'
            case 'youtube':
                return 'Follow us on YouTube'
            default:
                return 'Follow us'
        }
    }, [hoveredSocialMedia])

    return (
        <div className="flex w-fit flex-col items-end">
            <div className="-mr-2 mb-2 flex">
                <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    aria-label="Follow us on Twitter"
                    aria-pressed={hoveredSocialMedia === 'twitter'}
                    className={cn(hoveredSocialMedia === 'twitter' && 'text-foreground')}
                    onMouseEnter={() => setHoveredSocialMedia('twitter')}
                    onMouseLeave={() => setHoveredSocialMedia(null)}
                    onFocus={() => setHoveredSocialMedia('twitter')}
                    onBlur={() => setHoveredSocialMedia(null)}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer">
                        <Twitter />
                    </Link>
                </Button>
                <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    aria-label="Follow us on LinkedIn"
                    aria-pressed={hoveredSocialMedia === 'linkedin'}
                    className={cn(hoveredSocialMedia === 'linkedin' && 'text-foreground')}
                    onMouseEnter={() => setHoveredSocialMedia('linkedin')}
                    onMouseLeave={() => setHoveredSocialMedia(null)}
                    onFocus={() => setHoveredSocialMedia('linkedin')}
                    onBlur={() => setHoveredSocialMedia(null)}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer">
                        <Linkedin />
                    </Link>
                </Button>

                <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    aria-label="Follow us on YouTube"
                    aria-pressed={hoveredSocialMedia === 'youtube'}
                    className={cn(hoveredSocialMedia === 'youtube' && 'text-foreground')}
                    onMouseEnter={() => setHoveredSocialMedia('youtube')}
                    onMouseLeave={() => setHoveredSocialMedia(null)}
                    onFocus={() => setHoveredSocialMedia('youtube')}
                    onBlur={() => setHoveredSocialMedia(null)}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer">
                        <Youtube />
                    </Link>
                </Button>
            </div>

            <div
                aria-live="polite"
                className={cn('text-muted-foreground w-fit text-xs leading-none transition-opacity', hoveredSocialMedia ? 'opacity-100' : 'opacity-0')}>
                {tooltipLabel}
            </div>
        </div>
    )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { BookOpen, MoonStar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getClientKits } from '@/lib/get-kits'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@tailark/core/ui/select'

const kits = getClientKits()
const STORAGE_KEY = 'selected-kit-id'

export function KitSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const [selectedKitId, setSelectedKitId] = useState<string>(kits[0].id)

    const isDisabled = pathname.startsWith('/snippets')

    useEffect(() => {
        const pathParts = pathname.split('/')
        const firstPathSegment = pathParts[1]

        let derivedKitId: string

        if (firstPathSegment === 'mist') {
            derivedKitId = 'mist-kit'
        } else {
            const matchedKit = kits.find((kit) => kit.id === firstPathSegment && kit.id !== 'default')
            if (matchedKit) {
                derivedKitId = matchedKit.id
            } else {
                derivedKitId = 'default'
            }
        }

        if (!kits.some((kit) => kit.id === derivedKitId)) {
            derivedKitId = 'default'
        }

        if (selectedKitId !== derivedKitId) {
            setSelectedKitId(derivedKitId)
        }

        const storedKit = localStorage.getItem(STORAGE_KEY)
        if (storedKit !== derivedKitId) {
            localStorage.setItem(STORAGE_KEY, derivedKitId)
        }
    }, [pathname, selectedKitId, kits])

    const handleKitChange = (value: string) => {
        if (isDisabled) return

        setSelectedKitId(value)
        localStorage.setItem(STORAGE_KEY, value)

        if (value === 'default') {
            const pathParts = pathname.split('/')
            if (pathParts[1] === 'mist') {
                if (pathParts.length > 2) {
                    router.push(`/${pathParts[2]}`)
                } else {
                    router.push('/')
                }
            }
        } else {
            const routeKitId = value === 'mist-kit' ? 'mist' : value
            const pathParts = pathname.split('/')

            if (pathParts[1] === 'mist') {
                router.push(`/${routeKitId}${pathParts.length > 2 ? `/${pathParts[2]}` : ''}`)
            } else if (pathParts[1] && pathParts[1] !== '') {
                router.push(`/${routeKitId}/${pathParts[1]}`)
            } else {
                router.push(`/${routeKitId}`)
            }
        }
    }

    return (
        <Select
            value={selectedKitId}
            onValueChange={handleKitChange}
            disabled={isDisabled}>
            <SelectTrigger className="hover:bg-muted -ml-2 h-8 gap-3 border-none pl-1.5 pr-3 font-medium shadow-none">
                <div className="flex items-center gap-2">
                    <SelectValue placeholder="Select kit" />
                </div>
            </SelectTrigger>
            <SelectContent
                sideOffset={6}
                className="bg-background dark:ring-border w-36 -translate-x-[7px] rounded-lg border-transparent px-0 shadow-xl ring-1 ring-black/10">
                <SelectGroup>
                    <SelectLabel className="mx-2 mb-1 border-b border-dashed px-0 pb-3">Choose a kit</SelectLabel>
                    {kits.map((kit) => (
                        <SelectItem
                            key={kit.id}
                            value={kit.id}
                            className={cn('hover:bg-muted rounded py-2', selectedKitId === kit.id && 'font-medium')}>
                            <div className="flex items-center gap-2">
                                {kit.id === 'default' && <DefaultKitLogo />}
                                {kit.id === 'mist-kit' && <MistKitLogo />}
                                <div className="flex items-center gap-1.5">
                                    {kit.name}
                                    {kit.id === 'mist-kit' && (
                                        <span className="rounded-full border border-black/5 bg-gradient-to-b from-lime-50 to-teal-50 px-1.5 py-1 text-[9px] font-medium leading-none dark:border-0 dark:from-lime-300/15 dark:to-teal-500/10">
                                            <span className="bg-gradient-to-r from-lime-600 to-teal-800 bg-clip-text text-transparent dark:from-lime-200 dark:to-teal-300">NEW</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const DefaultKitLogo = () => (
    <div className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 relative flex size-5 items-center justify-center rounded border from-purple-300 to-blue-600 shadow-md shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
        <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
        <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
        <MoonStar className="size-3 fill-white stroke-white drop-shadow" />
    </div>
)

const MistKitLogo = () => (
    <div className="border-background dark:inset-ring dark:inset-ring-white/25 bg-linear-to-b dark:inset-shadow-2xs dark:inset-shadow-white/25 relative flex size-5 items-center justify-center rounded border from-lime-300 to-teal-600 shadow-md shadow-black/20 ring-1 ring-black/10 dark:border-0 dark:shadow-white/10 dark:ring-black/50">
        <div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15"></div>
        <div className="absolute inset-px aspect-square rounded-full border border-dashed border-white/25"></div>
        <BookOpen className="size-3 fill-white stroke-white drop-shadow-sm" />
    </div>
)

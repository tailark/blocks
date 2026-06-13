'use client'

import { useState, useEffect } from 'react'

export function useMedia(query: string): boolean {
    const [matches, setMatches] = useState(true)

    useEffect(() => {
        const matchMedia = window.matchMedia(query)
        setMatches(matchMedia.matches)

        const handleChange = () => setMatches(matchMedia.matches)

        matchMedia.addEventListener('change', handleChange)

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

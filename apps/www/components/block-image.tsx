'use client'
import { BlockCategory } from './blocks-canvas'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export const BlockImage = ({ category }: { category: BlockCategory }) => {
    const { theme } = useTheme()
    const [useFallback, setUseFallback] = useState(false)

    const lightSrc = category.imageUrl || ''
    const darkSrc = category.imageUrl?.replace('.png', '-dark.png') || ''
    const src = theme === 'dark' && !useFallback ? darkSrc : lightSrc

    return (
        <Image
            src={src}
            alt={category.name}
            width={category.width}
            height={category.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
            className="pointer-events-none object-cover"
            onError={() => {
                if (theme === 'dark' && !useFallback) {
                    setUseFallback(true)
                }
            }}
        />
    )
}

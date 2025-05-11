import dynamic from 'next/dynamic'
import { duskKitBlockMap } from '@tailark/dusk/blocks'
import { mistKitBlockMap } from '@tailark/mist/blocks'
import React from 'react'
import { Suspense } from 'react'

interface BlockRendererProps {
    kitShortName: string
    category: string
    variant: string
}

type SpecificBlockLoaderComponentType = React.ComponentType<Record<string, unknown>>
type BlockLoaderFunctionType = () => Promise<SpecificBlockLoaderComponentType>

const kitBlockMaps = {
    dusk: duskKitBlockMap,
    mist: mistKitBlockMap,
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ kitShortName, category, variant }) => {
    const kitMapKey = kitShortName as keyof typeof kitBlockMaps

    if (!(kitMapKey in kitBlockMaps)) {
        console.error(`Unknown kit: ${kitShortName}`)
        return <div className="flex h-screen items-center justify-center">Error: Unknown kit.</div>
    }

    const kitBlockMap = kitBlockMaps[kitMapKey]

    const categoryKey = category as keyof typeof kitBlockMap
    if (!(categoryKey in kitBlockMap)) {
        console.error(`Block not found: ${kitShortName}/${category}/${variant} (category '${category}' not found in kit '${kitShortName}')`)
        return <div className="flex h-screen items-center justify-center">Error: Category not found in {kitShortName}.</div>
    }

    const variantsMap = kitBlockMap[categoryKey]!
    const variantKey = variant as keyof typeof variantsMap
    if (!(variantKey in variantsMap)) {
        console.error(`Block not found: ${kitShortName}/${category}/${variant} (variant '${variant}' not found in category '${category}' of kit '${kitShortName}')`)
        return <div className="flex h-screen items-center justify-center">Error: Variant not found in {kitShortName}.</div>
    }

    const blockLoader: BlockLoaderFunctionType = variantsMap[variantKey]! as BlockLoaderFunctionType

    const LazyBlock = dynamic(blockLoader, {
        loading: () => <div className="flex h-screen items-center justify-center">Loading block...</div>,
    })

    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading block...</div>}>
            <LazyBlock />
        </Suspense>
    )
}

export default BlockRenderer

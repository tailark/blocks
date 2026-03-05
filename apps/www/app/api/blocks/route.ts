import { NextResponse } from 'next/server'
import { blocks } from '@/data/blocks'
import { mistBlocksImages, veilBlocksImages, duskBlocksImages } from '@/data/blocks-images'

function titleToVariantName(id: string): string {
    // Extract the variant name from the block id (e.g., "one" from "hero-section-one")
    const parts = id.split('-')
    return parts[parts.length - 1]
}

export async function GET() {
    const blocksData = blocks
        .map((block) => {
            const kitName = block.kit?.replace('-kit', '') || 'mist'
            const variantName = titleToVariantName(block.id)
            
            // Get the correct image data based on kit
            let kitImages
            if (kitName === 'mist') {
                kitImages = mistBlocksImages
            } else if (kitName === 'veil') {
                kitImages = veilBlocksImages
            } else if (kitName === 'dusk') {
                kitImages = duskBlocksImages
            } else {
                kitImages = duskBlocksImages // fallback
            }
            
            const imageData = kitImages.find((img) => img.category === block.category && img.variant === variantName)
            
            // Compute aspect ratio from width/height if not found
            const width = imageData?.width || 686
            const height = imageData?.height || 400
            const aspectRatio = imageData?.aspectRatio || (width / height)
            
            return {
                id: block.id,
                slug: block.slug,
                title: block.title,
                description: block.description,
                category: block.category,
                previewLink: block.previewLink,
                kit: block.kit,
                imageWidth: width,
                imageHeight: height,
                aspectRatio: aspectRatio,
            }
        })

    return NextResponse.json(blocksData)
}

import React, { Suspense, use } from 'react'
import { notFound } from 'next/navigation'

const formatComponentName = (category: string, variant: string): string => {
    const categoryFormatted = category
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
    const variantFormatted = variant
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
    return `${categoryFormatted}${variantFormatted}`
}

const kitBlockModules: Record<string, () => Promise<any>> = {
    'default-kit': () => import('@tailark/default/blocks'),
    'mist-kit': () => import('@tailark/mist/blocks'),
}

export default function PreviewPage({ params }: { params: Promise<{ kit: string; category: string; variant: string }> }) {
    const { kit: kitShortName, category, variant } = use(params)

    const kitFullName = `${kitShortName}-kit`

    const loadBlocksModule = kitBlockModules[kitFullName]

    if (!loadBlocksModule) {
        console.error(`Invalid kit name (derived from short name): ${kitFullName}`)
        notFound()
    }

    const componentName = formatComponentName(category, variant)

    // Dynamically load the component based on kit and component name
    const LazyBlockComponent = React.lazy(async () => {
        console.log(`Attempting to load module for kit: ${kitFullName}`)
        try {
            const BlocksModule = await loadBlocksModule()
            console.log(`Successfully loaded module for kit: ${kitFullName}`, BlocksModule)
            if (!(componentName in BlocksModule)) {
                console.error(`Component ${componentName} not found in kit ${kitFullName}`)
                throw new Error('Component not found') // Caught below to trigger notFound()
            }
            console.log(`Component ${componentName} found in kit: ${kitFullName}`)
            // Return the component in the format React.lazy expects
            return { default: BlocksModule[componentName as keyof typeof BlocksModule] }
        } catch (error) {
            console.error(`Error loading component ${componentName} from kit ${kitFullName}:`, error)
            throw new Error('Failed to load component') // Re-throw to ensure React.lazy catches it
        }
    })

    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading block...</div>}>
            {/* Use a key to force remount on param change if needed, although Suspense should handle it */}
            <LazyBlockComponent />
        </Suspense>
    )
}

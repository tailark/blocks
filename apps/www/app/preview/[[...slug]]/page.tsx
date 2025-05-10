import React, { Suspense, use } from 'react'
import { notFound } from 'next/navigation'
import { formatComponentName } from '@/lib/utils'
import { cn } from '@tailark/core/lib/utils'

const kitBlockModules: Record<string, () => Promise<Record<string, React.ElementType>>> = {
    'default-kit': () => import('@tailark/default/blocks'),
    'mist-kit': () => import('@tailark/mist/blocks'),
}

export default function PreviewPage({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = use(params)

    let kitShortName: string
    let category: string
    let variant: string
    let kitFullName: string

    if (!slug || slug.length < 2 || slug.length > 3) {
        console.error('Invalid slug structure:', slug)
        notFound()
    }

    if (slug.length === 2) {
        kitShortName = 'default'
        category = slug[0]
        variant = slug[1]
        kitFullName = 'default-kit'
    } else {
        kitShortName = slug[0]
        category = slug[1]
        variant = slug[2]
        kitFullName = `${kitShortName}-kit`
    }

    const loadBlocksModule = kitBlockModules[kitFullName]

    if (!loadBlocksModule) {
        console.error(`Invalid or unsupported kit name: ${kitFullName}`)
        notFound()
    }

    const componentName = formatComponentName(category, variant)

    const LazyBlockComponent = React.lazy(async () => {
        console.log(`Attempting to load module for kit: ${kitFullName}`)
        try {
            const BlocksModule = await loadBlocksModule()
            console.log(`Successfully loaded module for kit: ${kitFullName}`, BlocksModule)

            if (!(componentName in BlocksModule)) {
                console.error(`Component ${componentName} not found in kit ${kitFullName}`)
                throw new Error('Component not found')
            }

            console.log(`Component ${componentName} found in kit: ${kitFullName}`)
            return { default: BlocksModule[componentName as keyof typeof BlocksModule] as React.ComponentType<Record<string, unknown>> }
        } catch (error) {
            console.error(`Error loading component ${componentName} from kit ${kitFullName}:`, error)
            throw new Error('Failed to load component')
        }
    })

    return (
        <div
            data-theme={kitShortName == 'mist' && 'mist'}
            className={cn(kitShortName == 'mist' && 'scheme-light bg-background')}>
            <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading block...</div>}>
                <LazyBlockComponent />
            </Suspense>
        </div>
    )
}

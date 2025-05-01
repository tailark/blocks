'use client'
import React, { Suspense, use } from 'react'
import dynamic from 'next/dynamic'
import * as BlocksModule from '@tailark/default/blocks'

const formatComponentName = (category: string, variant: string): string => {
    return (
        category
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('') +
        variant.charAt(0).toUpperCase() +
        variant.slice(1)
    )
}

export default function PreviewPage({ params }: { params: Promise<{ category: string; variant: string }> }) {
    const unwrappedParams = use(params)
    const { category, variant } = unwrappedParams

    const componentName = formatComponentName(category, variant)

    const BlockComponent = dynamic(
        () =>
            import('@tailark/default/blocks').then((mod) => {
                const blocks = mod as typeof BlocksModule
                if (!blocks[componentName as keyof typeof BlocksModule]) {
                    throw new Error(`Component ${componentName} not found`)
                }
                return blocks[componentName as keyof typeof BlocksModule]
            }),
        {
            loading: () => <div className="flex h-screen items-center justify-center">Loading...</div>,
            ssr: false,
        }
    )

    return (
        <div className="preview">
            <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
                <BlockComponent />
            </Suspense>
        </div>
    )
}

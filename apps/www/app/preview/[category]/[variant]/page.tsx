import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
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

export default async function PreviewPage({ params }: { params: Promise<{ category: string; variant: string }> }) {
    const unwrappedParams = await params
    const { category, variant } = unwrappedParams
    const componentName = formatComponentName(category, variant)

    if (!(componentName in BlocksModule)) {
        notFound()
    }

    const BlockComponent = BlocksModule[componentName as keyof typeof BlocksModule]

    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <BlockComponent />
        </Suspense>
    )
}

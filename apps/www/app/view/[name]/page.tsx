import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { normalizeRegistryItemName } from "@/lib/registry-item"
import {
    getRegistryBlocks,
    getRegistryComponent,
    getRegistryEntry,
    getRegistryKit,
} from "@/lib/registry"

import { ComponentPreview } from "./component-preview"

const getCachedRegistryEntry = React.cache((name: string) => {
    return getRegistryEntry(normalizeRegistryItemName(name))
})

export async function generateStaticParams() {
    return getRegistryBlocks().map((block) => ({
        name: block.name,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ name: string }>
}): Promise<Metadata> {
    const { name } = await params
    const item = getCachedRegistryEntry(name)

    if (!item) {
        return { title: "Block not found | Tailark" }
    }

    return {
        title: `${item.title ?? item.name} | Tailark Registry`,
        description: item.description,
        robots: {
            index: false,
            follow: false,
        },
    }
}

export default async function RegistryBlockViewPage({
    params,
}: {
    params: Promise<{ name: string }>
}) {
    const { name } = await params
    const item = getCachedRegistryEntry(name)
    const kit = getRegistryKit(name)
    const Component = await getRegistryComponent(name)

    if (!item || !kit || !Component) {
        notFound()
    }

    return (
        <ComponentPreview theme={kit}>
            <Component />
        </ComponentPreview>
    )
}

import { type Registry } from "shadcn/schema"
import { registry as baseRegistry } from "@/registry/bases/base/registry"
import { normalizeRegistryItemName } from "@/lib/registry-item"

export type RegistryEntry = NonNullable<Registry["items"]>[number]

const registry = baseRegistry
const REGISTRY_BASE = "registry/bases/base"

const KITS = ["dusk", "mist", "veil", "quartz"] as const

export type RegistryKit = (typeof KITS)[number]

const VIEWABLE_TYPES = new Set<RegistryEntry["type"]>(["registry:block"])

export function getRegistryBlocks(): RegistryEntry[] {
    const seen = new Set<string>()

    return (registry.items ?? []).filter((item) => {
        if (!VIEWABLE_TYPES.has(item.type) || seen.has(item.name)) {
            return false
        }

        seen.add(item.name)
        return true
    })
}

export function getRegistryEntry(name: string): RegistryEntry | null {
    const normalizedName = normalizeRegistryItemName(name)
    const item = (registry.items ?? []).find((entry) => entry.name === normalizedName)

    if (!item || !VIEWABLE_TYPES.has(item.type) || !item.files?.length) {
        return null
    }

    return item
}

export function getRegistryKit(name: string): RegistryKit | null {
    const normalizedName = normalizeRegistryItemName(name)

    for (const kit of KITS) {
        if (normalizedName.startsWith(`${kit}-`)) {
            return kit
        }
    }

    return null
}

function getMainBlockFile(entry: RegistryEntry) {
    const files = entry.files ?? []

    if (files.length === 1) {
        return files[0]
    }

    const primaryFiles = files.filter((file) => !file.path.includes("/components/"))

    if (primaryFiles.length === 1) {
        return primaryFiles[0]
    }

    if (primaryFiles.length > 1) {
        return (
            primaryFiles.find((file) => !file.path.endsWith("/header.tsx")) ??
            primaryFiles[0]
        )
    }

    return files[0]
}

export function getRegistryComponentImportPath(name: string): string | null {
    const entry = getRegistryEntry(name)

    if (!entry) {
        return null
    }

    const mainFile = getMainBlockFile(entry)

    return mainFile.path.replace(/\.(tsx?|jsx?)$/, "")
}

export async function getRegistryComponent(name: string) {
    const importPath = getRegistryComponentImportPath(name)

    if (!importPath) {
        return null
    }

    try {
        const module = await import(`@/${REGISTRY_BASE}/${importPath}`)

        return module.default ?? null
    } catch (error) {
        console.error(`Failed to load registry component: ${importPath}`, error)
        return null
    }
}

import { type Registry } from "shadcn/schema"
import { normalizeRegistryItemName } from "@/lib/registry-item"
import { registry as baseRegistry } from "@/registry/bases/base/registry"
import { registry as radixRegistry } from "@/registry/bases/radix/registry"

export type RegistryEntry = NonNullable<Registry["items"]>[number]

const KITS = ["dusk", "mist", "veil"] as const
const REGISTRY_BASES = ["radix", "base"] as const

export type RegistryKit = (typeof KITS)[number]
export type RegistryBase = (typeof REGISTRY_BASES)[number]

const VIEWABLE_TYPES = new Set<RegistryEntry["type"]>(["registry:block"])

export function getRegistryBase(base = "radix"): RegistryBase {
    return REGISTRY_BASES.includes(base as RegistryBase) ? (base as RegistryBase) : "radix"
}

export function getRegistryIndex(base = getRegistryBase()): Registry {
    return base === "base" ? baseRegistry : radixRegistry
}

export function getRegistryBlocks(base = getRegistryBase()): RegistryEntry[] {
    const seen = new Set<string>()

    return (getRegistryIndex(base).items ?? []).filter((item) => {
        if (!VIEWABLE_TYPES.has(item.type) || seen.has(item.name)) {
            return false
        }

        seen.add(item.name)
        return true
    })
}

export function getRegistryEntry(name: string, base = getRegistryBase()): RegistryEntry | null {
    const normalizedName = normalizeRegistryItemName(name)
    const item = (getRegistryIndex(base).items ?? []).find((entry) => entry.name === normalizedName)

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
        return primaryFiles.find((file) => !file.path.endsWith("/header.tsx")) ?? primaryFiles[0]
    }

    return files[0]
}

export function getRegistryComponentImportPath(
    name: string,
    base = getRegistryBase()
): string | null {
    const entry = getRegistryEntry(name, base)

    if (!entry) {
        return null
    }

    return getMainBlockFile(entry).path.replace(/\.(tsx?|jsx?)$/, "")
}

async function importRegistryComponent(base: (typeof REGISTRY_BASES)[number], importPath: string) {
    if (base === "radix") {
        return import(`@/registry/bases/radix/${importPath}`)
    }

    return import(`@/registry/bases/base/${importPath}`)
}

export async function getRegistryComponent(name: string, base = getRegistryBase()) {
    const registryBase = getRegistryBase(base)
    const componentPath = getRegistryComponentImportPath(name, registryBase)

    if (!componentPath) {
        return null
    }

    try {
        const registryModule = await importRegistryComponent(registryBase, componentPath)

        if (registryModule.default) {
            return registryModule.default
        }
    } catch (error) {
        console.error(`Failed to load registry component: ${name}`, error)
    }

    return null
}

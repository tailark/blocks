import { type Registry } from "shadcn/schema"
import { registry as coreRegistry } from "@/registry/core/registry"
import { components as veilBaseComponents } from "@/registry/bases/base/veil/_components-registry"
import { blocks as veilBlocks } from "@/registry/bases/base/veil/_registry"
import { blocks as duskBlocks } from "@/registry/bases/base/dusk/_registry"
import { blocks as mistBlocks } from "@/registry/bases/base/mist/_registry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark Base",
    homepage: "https://tailark.com",
    items: [
        ...(coreRegistry.items ?? []),
        ...veilBaseComponents,
        ...veilBlocks,
        ...duskBlocks,
        ...mistBlocks,
    ],
}

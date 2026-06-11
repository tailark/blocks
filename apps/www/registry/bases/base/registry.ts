import { type Registry } from "shadcn/schema"
import { components as veilBaseComponents } from "@/registry/bases/base/veil/_components-registry"
import { blocks as veilBaseBlocks } from "@/registry/bases/base/veil/_registry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark Base",
    homepage: "https://tailark.com",
    items: [...veilBaseComponents, ...veilBaseBlocks],
}

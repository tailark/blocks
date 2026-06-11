import { type Registry } from "shadcn/schema"
import { blocks as mistRadixBlocks } from "@/registry/bases/radix/mist/_registry"
import { blocks as veilRadixBlocks } from "@/registry/bases/radix/veil/_regsitry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark Radix",
    homepage: "https://tailark.com",
    items: [...mistRadixBlocks, ...veilRadixBlocks],
}

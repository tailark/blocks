import { type Registry } from "shadcn/schema"
import { components as veilRadixComponents } from "@/registry/bases/radix/veil/_components-registry"
import { blocks as veilRadixBlocks } from "@/registry/bases/radix/veil/_regsitry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark",
    homepage: "https://tailark.com",
    items: [
        ...veilRadixComponents,
        ...veilRadixBlocks,
        {
            name: "use-media",
            type: "registry:hook",
            title: "Use Media",
            description: "Tailark Veil use media hook",
            files: [
                {
                    path: "../../packages/core/src/hooks/use-media.ts",
                    type: "registry:hook",
                },
            ],
        },
    ],
}
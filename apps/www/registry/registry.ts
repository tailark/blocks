import { type Registry } from "shadcn/schema"
import { registry as radixRegistry } from "@/registry/bases/radix/registry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark",
    homepage: "https://tailark.com",
    items: [
        ...(radixRegistry.items ?? []),
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

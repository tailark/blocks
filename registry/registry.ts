import { type Registry } from "shadcn/schema"
import { registry as radixRegistry } from "@/registry/bases/radix/registry"
import { registry as baseRegistry } from "@/registry/bases/base/registry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark",
    homepage: "https://tailark.com",
    items: [
        ...(radixRegistry.items ?? []),
        ...(baseRegistry.items ?? []),
    ],
}

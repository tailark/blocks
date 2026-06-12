import { type Registry } from "shadcn/schema"
import { magicUi } from "@/registry/core/_magic-ui-registry"
import { motionPrimitivesRegistry } from "@/registry/core/_motion-primitives-registry"
import { svgs } from "@/registry/core/_svgs-registry"

export const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "Tailark Core",
    homepage: "https://tailark.com",
    items: [...svgs, ...motionPrimitivesRegistry, ...magicUi],
}

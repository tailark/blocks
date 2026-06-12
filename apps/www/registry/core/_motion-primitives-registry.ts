import { type Registry } from "shadcn/schema"

const motionPrimitives = [
    "animated-group",
    "infinite-slider",
    "progressive-blur",
    "text-effect",
] as const

const titles: Record<(typeof motionPrimitives)[number], string> = {
    "animated-group": "Animated Group",
    "infinite-slider": "Infinite Slider",
    "progressive-blur": "Progressive Blur",
    "text-effect": "Text Effect",
}

export const motionPrimitivesRegistry: Registry["items"] = motionPrimitives.map((name) => ({
    name: `motion-primitives-${name}`,
    title: titles[name],
    description: `Tailark motion primitives ${name} component`,
    type: "registry:component" as const,
    files: [
        {
            path: `core/ui/motion-primitives/${name}.tsx`,
            type: "registry:component" as const,
            target: `@ui/motion-primitives/${name}.tsx`,
        },
    ],
    dependencies: ["motion"],
}))

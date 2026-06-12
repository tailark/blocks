import { type Registry } from "shadcn/schema"

const magicUiComponents = ["border-beam"] as const

const titles: Record<(typeof magicUiComponents)[number], string> = {
    "border-beam": "Border Beam",
}

export const magicUi: Registry["items"] = magicUiComponents.map((name) => ({
    name: `magic-ui-${name}`,
    title: titles[name],
    description: `Tailark Magic UI ${name} component`,
    type: "registry:component" as const,
    files: [
        {
            path: `core/ui/magicui/${name}.tsx`,
            type: "registry:component" as const,
            target: `@ui/magic-ui/${name}.tsx`,
        },
    ],
    dependencies: ["motion"],
}))

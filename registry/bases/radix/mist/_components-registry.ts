import { type Registry } from "shadcn/schema"

const uiComponents = [
    "accordion",
    "button",
    "card",
    "field",
    "hover-card",
    "input",
    "label",
    "logo",
    "select",
    "separator",
    "textarea",
    "toggle",
    "toggle-group",
] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    accordion: "Accordion",
    button: "Button",
    card: "Card",
    field: "Field",
    "hover-card": "Hover Card",
    input: "Input",
    label: "Label",
    logo: "Logo",
    select: "Select",
    separator: "Separator",
    textarea: "Textarea",
    toggle: "Toggle",
    "toggle-group": "Toggle Group",
}

const registryDependencies: Partial<Record<(typeof uiComponents)[number], string[]>> = {
    field: ["@tailark-oss/mist-label", "@tailark-oss/mist-separator"],
    "toggle-group": ["@tailark-oss/mist-toggle"],
}

export const components: Registry["items"] = [
    ...uiComponents.map((name) => ({
        name: `mist-${name}`,
        title: titles[name],
        description: `Tailark Mist ${name} component`,
        type: "registry:ui" as const,
        files: [
            {
                path: `mist/ui/${name}.tsx`,
                type: "registry:ui" as const,
            },
        ],
        ...(registryDependencies[name] ? { registryDependencies: registryDependencies[name] } : {}),
    })),
]

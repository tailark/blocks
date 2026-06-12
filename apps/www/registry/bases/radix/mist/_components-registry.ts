import { type Registry } from "shadcn/schema"

const uiComponents = [
    "accordion",
    "button",
    "card",
    "hover-card",
    "input",
    "label",
    "logo",
    "select",
    "textarea",
    "toggle",
    "toggle-group",
] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    accordion: "Accordion",
    button: "Button",
    card: "Card",
    "hover-card": "Hover Card",
    input: "Input",
    label: "Label",
    logo: "Logo",
    select: "Select",
    textarea: "Textarea",
    toggle: "Toggle",
    "toggle-group": "Toggle Group",
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
        ...(name === "toggle-group"
            ? {
                  registryDependencies: ["@tailark/mist-toggle"],
              }
            : {}),
    })),
]

import { type Registry } from "shadcn/schema"

const uiComponents = [
    "accordion",
    "avatar",
    "button",
    "card",
    "chart",
    "input",
    "kdb",
    "label",
    "logo",
    "select",
    "textarea",
] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    "accordion": "Accordion",
    "avatar": "Avatar",
    "button": "Button",
    "card": "Card",
    "chart": "Chart",
    "input": "Input",
    "kdb": "Kdb",
    "label": "Label",
    "logo": "Logo",
    "select": "Select",
    "textarea": "Textarea",
}

export const components: Registry["items"] = uiComponents.map((name) => ({
    name: `dusk-${name}`,
    title: titles[name],
    description: `Tailark Dusk ${name} component`,
    type: "registry:ui" as const,
    files: [
        {
            path: `dusk/ui/${name}.tsx`,
            type: "registry:ui" as const,
        },
    ],
}))

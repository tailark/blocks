import { type Registry } from "shadcn/schema"

const uiComponents = ["button", "card", "input", "label", "logo", "select", "textarea"] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    button: "Button",
    card: "Card",
    input: "Input",
    label: "Label",
    logo: "Logo",
    select: "Select",
    textarea: "Textarea",
}

export const components: Registry["items"] = uiComponents.map((name) => ({
    name: `veil-${name}`,
    title: titles[name],
    description: `Tailark Veil ${name} component`,
    type: "registry:ui" as const,
    files: [
        {
            path: `veil/ui/${name}.tsx`,
            type: "registry:ui" as const,
        },
    ],
}))
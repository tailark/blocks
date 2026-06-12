import { type Registry } from "shadcn/schema"

const uiComponents = ["button", "card", "input", "textarea", "logo"] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    button: "Button",
    card: "Card",
    input: "Input",
    textarea: "Textarea",
    logo: "Logo",
}

export const components: Registry["items"] = [
    ...uiComponents.map((name) => ({
        name: `veil-${name}`,
        title: titles[name],
        description: `Tailark Veil ${name} component`,
        type: "registry:ui" as const,
        files: [
            {
                path: name === "logo" ? "veil/logo.tsx" : `veil/ui/${name}.tsx`,
                type: "registry:ui" as const,
            },
        ],
    })),
]

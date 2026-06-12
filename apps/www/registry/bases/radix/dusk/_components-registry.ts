import { type Registry } from "shadcn/schema"

const uiComponents = [
    "accordion",
    "aspect-ratio",
    "avatar",
    "breadcrumb",
    "button",
    "card",
    "chart",
    "dialog",
    "input",
    "label",
    "logo",
    "radio-group",
    "scroll-area",
    "select",
    "separator",
    "textarea",
    "toggle",
    "toggle-group",
    "tooltip",
] as const

const titles: Record<(typeof uiComponents)[number], string> = {
    "accordion": "Accordion",
    "aspect-ratio": "Aspect Ratio",
    "avatar": "Avatar",
    "breadcrumb": "Breadcrumb",
    "button": "Button",
    "card": "Card",
    "chart": "Chart",
    "dialog": "Dialog",
    "input": "Input",
    "label": "Label",
    "logo": "Logo",
    "radio-group": "Radio Group",
    "scroll-area": "Scroll Area",
    "select": "Select",
    "separator": "Separator",
    "textarea": "Textarea",
    "toggle": "Toggle",
    "toggle-group": "Toggle Group",
    "tooltip": "Tooltip",
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
    ...(name === "toggle-group"
        ? {
              registryDependencies: ["@tailark/dusk-toggle"],
          }
        : {}),
}))

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

const svgComponents = [
    "gemini",
    "google-palm",
    "hulu",
    "magic-ui",
    "media-wiki",
    "replit",
    "spotify",
    "supabase",
    "vercel",
    "vs-codium",
] as const

const titles: Record<(typeof uiComponents)[number] | (typeof svgComponents)[number], string> = {
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
    gemini: "Gemini logo",
    "google-palm": "Google PaLM logo",
    hulu: "Hulu logo",
    "magic-ui": "Magic UI logo",
    "media-wiki": "MediaWiki logo",
    replit: "Replit logo",
    spotify: "Spotify logo",
    supabase: "Supabase logo",
    vercel: "Vercel logo",
    "vs-codium": "VSCodium logo",
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
    ...svgComponents.map((name) => ({
        name: `mist-${name}`,
        title: titles[name],
        description: `Tailark Mist ${name} svg logo`,
        type: "registry:ui" as const,
        files: [
            {
                path: `mist/ui/svgs/${name}.tsx`,
                type: "registry:ui" as const,
                target: `@ui/svgs/${name}.tsx`,
            },
        ],
    })),
]

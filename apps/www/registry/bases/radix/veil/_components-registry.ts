import { type Registry } from "shadcn/schema"

const uiComponents = ["button", "card", "input", "textarea", "logo"] as const

const svgComponents = [
    "beacon",
    "bolt",
    "cisco",
    "claude",
    "clerk",
    "figma",
    "firebase",
    "hulu",
    "linear",
    "slack",
    "spotify",
    "supabase",
    "twilio",
    "vercel",
] as const

const titles: Record<(typeof uiComponents)[number] | (typeof svgComponents)[number], string> = {
    button: "Button",
    card: "Card",
    input: "Input",
    textarea: "Textarea",
    logo: "Logo",
    beacon: "Beacon logo",
    bolt: "Bolt logo",
    cisco: "Cisco logo",
    claude: "Claude logo",
    clerk: "Clerk logo",
    figma: "Figma logo",
    firebase: "Firebase logo",
    hulu: "Hulu logo",
    linear: "Linear logo",
    slack: "Slack logo",
    spotify: "Spotify logo",
    supabase: "Supabase logo",
    twilio: "Twilio logo",
    vercel: "Vercel logo",
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
    ...svgComponents.map((name) => ({
        name: `veil-${name}`,
        title: titles[name],
        description: `Shadcn/ui ${name} svg logo`,
        type: "registry:ui" as const,
        files: [
            {
                path: `veil/ui/svgs/${name}.tsx`,
                type: "registry:ui" as const,
                target: `@ui/svgs/${name}.tsx`,
            },
        ],
    })),
]

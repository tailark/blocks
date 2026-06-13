import { type Registry } from "shadcn/schema"
import { components } from "./_components-registry"

type RegistryItem = NonNullable<Registry["items"]>[number]

const ui = (name: string) => `@tailark/dusk-${name}`
const core = (name: string) => `@tailark/core-${name}`
const motionPrimitive = (name: string) => `@tailark/motion-primitives-${name}`
const magicUi = (name: string) => `@tailark/magic-ui-${name}`
const local = (name: string) => `@tailark/dusk-${name}`

const numberWords: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
    thirteen: "13",
    fourteen: "14",
    fifteen: "15",
    sixteen: "16",
    seventeen: "17",
    eighteen: "18",
    nineteen: "19",
    twenty: "20",
}

function titleize(value: string) {
    return value
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
}

function block({
    category,
    variant,
    path,
    dependencies,
}: {
    category: string
    variant: string
    path: string
    dependencies?: string[]
}): RegistryItem {
    const variantNumber = numberWords[variant] ?? variant

    return {
        name: `dusk-${category}-${variantNumber}`,
        type: "registry:block",
        title: `${titleize(category)} ${variantNumber}`,
        description: `Tailark Dusk ${category} variant ${variantNumber} block`,
        files: [
            {
                path,
                type: "registry:component",
                target: `@components/${category}-${variantNumber}.tsx`,
            },
        ],
        ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
    }
}

function component({
    name,
    title,
    description,
    path,
    dependencies,
}: {
    name: string
    title: string
    description: string
    path: string
    dependencies?: string[]
}): RegistryItem {
    return {
        name: `dusk-${name}`,
        type: "registry:component",
        title,
        description,
        files: [
            {
                path,
                type: "registry:component",
                target: `@components/${name}.tsx`,
            },
        ],
        ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
    }
}

const componentItems: Registry["items"] = [
    component({ name: "hero-section-1-header", title: "Hero Section 1 Header", description: "Tailark Dusk hero section 1 header component", path: "dusk/blocks/hero-section/one/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-2-header", title: "Hero Section 2 Header", description: "Tailark Dusk hero section 2 header component", path: "dusk/blocks/hero-section/two/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-3-header", title: "Hero Section 3 Header", description: "Tailark Dusk hero section 3 header component", path: "dusk/blocks/hero-section/three/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-3-logo-cloud", title: "Hero Section 3 Logo Cloud", description: "Tailark Dusk hero section 3 logo cloud component", path: "dusk/blocks/hero-section/three/logo-cloud.tsx", dependencies: [motionPrimitive("infinite-slider"), motionPrimitive("progressive-blur"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("cisco"), core("figma")] }),
    component({ name: "hero-section-4-header", title: "Hero Section 4 Header", description: "Tailark Dusk hero section 4 header component", path: "dusk/blocks/hero-section/four/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-5-header", title: "Hero Section 5 Header", description: "Tailark Dusk hero section 5 header component", path: "dusk/blocks/hero-section/five/header.tsx", dependencies: [ui("logo"), ui("button")] }),
]

const blockItems: Registry["items"] = [
    block({ category: "call-to-action", variant: "one", path: "dusk/blocks/call-to-action/one.tsx", dependencies: [ui("button")] }),
    block({ category: "call-to-action", variant: "two", path: "dusk/blocks/call-to-action/two.tsx", dependencies: [ui("button")] }),
    block({ category: "call-to-action", variant: "three", path: "dusk/blocks/call-to-action/three.tsx", dependencies: [ui("button")] }),
    block({ category: "comparator", variant: "one", path: "dusk/blocks/comparator/one.tsx", dependencies: [ui("button")] }),
    block({ category: "contact", variant: "one", path: "dusk/blocks/contact/one.tsx", dependencies: [ui("button"), ui("input"), ui("label"), ui("textarea"), ui("select"), ui("card")] }),
    block({ category: "contact", variant: "two", path: "dusk/blocks/contact/two.tsx", dependencies: [ui("card"), ui("input"), ui("textarea"), ui("button"), ui("label"), ui("select")] }),
    block({ category: "content", variant: "one", path: "dusk/blocks/content/one.tsx", dependencies: [core("spotify")] }),
    block({ category: "content", variant: "two", path: "dusk/blocks/content/two.tsx" }),
    block({ category: "content", variant: "three", path: "dusk/blocks/content/three.tsx", dependencies: [ui("button")] }),
    block({ category: "content", variant: "four", path: "dusk/blocks/content/four.tsx", dependencies: [ui("button")] }),
    block({ category: "content", variant: "five", path: "dusk/blocks/content/five.tsx" }),
    block({ category: "content", variant: "six", path: "dusk/blocks/content/six.tsx" }),
    block({ category: "content", variant: "seven", path: "dusk/blocks/content/seven.tsx" }),
    block({ category: "faqs", variant: "one", path: "dusk/blocks/faqs/one.tsx" }),
    block({ category: "faqs", variant: "two", path: "dusk/blocks/faqs/two.tsx", dependencies: [ui("accordion")] }),
    block({ category: "faqs", variant: "three", path: "dusk/blocks/faqs/three.tsx", dependencies: [ui("accordion")] }),
    block({ category: "faqs", variant: "four", path: "dusk/blocks/faqs/four.tsx", dependencies: [ui("accordion")] }),
    block({ category: "features", variant: "one", path: "dusk/blocks/features/one.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "two", path: "dusk/blocks/features/two.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "three", path: "dusk/blocks/features/three.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "four", path: "dusk/blocks/features/four.tsx" }),
    block({ category: "features", variant: "five", path: "dusk/blocks/features/five.tsx" }),
    block({ category: "features", variant: "six", path: "dusk/blocks/features/six.tsx" }),
    block({ category: "features", variant: "seven", path: "dusk/blocks/features/seven.tsx" }),
    block({ category: "features", variant: "eight", path: "dusk/blocks/features/eight.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "nine", path: "dusk/blocks/features/nine.tsx", dependencies: [ui("logo"), ui("chart")] }),
    block({ category: "features", variant: "ten", path: "dusk/blocks/features/ten.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "eleven", path: "dusk/blocks/features/eleven.tsx", dependencies: [ui("card"), core("linear"), core("twilio"), core("slack")] }),
    block({ category: "features", variant: "twelve", path: "dusk/blocks/features/twelve.tsx", dependencies: [ui("accordion"), magicUi("border-beam")] }),
    block({ category: "footer", variant: "one", path: "dusk/blocks/footer/one.tsx", dependencies: [ui("logo")] }),
    block({ category: "footer", variant: "two", path: "dusk/blocks/footer/two.tsx", dependencies: [ui("logo")] }),
    block({ category: "footer", variant: "three", path: "dusk/blocks/footer/three.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "footer", variant: "four", path: "dusk/blocks/footer/four.tsx" }),
    block({ category: "footer", variant: "five", path: "dusk/blocks/footer/five.tsx", dependencies: [ui("button"), ui("label"), ui("input"), ui("logo")] }),
    block({ category: "forgot-password", variant: "one", path: "dusk/blocks/forgot-password/one.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "forgot-password", variant: "two", path: "dusk/blocks/forgot-password/two.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "hero-section", variant: "one", path: "dusk/blocks/hero-section/one/hero-section.tsx", dependencies: [ui("button"), motionPrimitive("text-effect"), motionPrimitive("animated-group"), local("hero-section-1-header"), core("spotify"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("vercel")] }),
    block({ category: "hero-section", variant: "two", path: "dusk/blocks/hero-section/two/hero-section.tsx", dependencies: [ui("button"), motionPrimitive("text-effect"), motionPrimitive("animated-group"), local("hero-section-2-header"), core("spotify"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("vercel")] }),
    block({ category: "hero-section", variant: "three", path: "dusk/blocks/hero-section/three/hero-section.tsx", dependencies: [ui("button"), motionPrimitive("text-effect"), motionPrimitive("animated-group"), local("hero-section-3-header"), local("hero-section-3-logo-cloud")] }),
    block({ category: "hero-section", variant: "four", path: "dusk/blocks/hero-section/four/hero-section.tsx", dependencies: [ui("button"), local("hero-section-4-header"), motionPrimitive("infinite-slider"), motionPrimitive("progressive-blur"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("figma"), core("cisco")] }),
    block({ category: "hero-section", variant: "five", path: "dusk/blocks/hero-section/five/hero-section.tsx", dependencies: [ui("button"), local("hero-section-5-header"), motionPrimitive("infinite-slider"), motionPrimitive("progressive-blur"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("figma"), core("cisco")] }),
    block({ category: "hero-section", variant: "six", path: "dusk/blocks/hero-section/six.tsx", dependencies: [ui("logo"), ui("button")] }),
    block({ category: "hero-section", variant: "seven", path: "dusk/blocks/hero-section/seven.tsx", dependencies: [ui("logo"), ui("button")] }),
    block({ category: "hero-section", variant: "eight", path: "dusk/blocks/hero-section/eight.tsx", dependencies: [ui("logo"), ui("button"), core("spotify"), core("supabase"), core("hulu"), core("firebase"), core("beacon"), core("bolt"), core("claude"), core("figma"), core("vercel"), core("cisco")] }),
    block({ category: "hero-section", variant: "nine", path: "dusk/blocks/hero-section/nine.tsx", dependencies: [ui("logo"), ui("button"), core("spotify"), core("supabase"), core("hulu"), core("firebase"), core("beacon"), core("bolt"), core("claude"), core("figma"), core("vercel"), core("cisco")] }),
    block({ category: "integrations", variant: "one", path: "dusk/blocks/integrations/one.tsx", dependencies: [ui("button"), ui("card"), core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm")] }),
    block({ category: "integrations", variant: "two", path: "dusk/blocks/integrations/two.tsx", dependencies: [core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm"), ui("logo"), ui("button")] }),
    block({ category: "integrations", variant: "three", path: "dusk/blocks/integrations/three.tsx", dependencies: [core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm"), ui("logo"), ui("button")] }),
    block({ category: "integrations", variant: "four", path: "dusk/blocks/integrations/four.tsx", dependencies: [core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm"), ui("logo"), ui("button")] }),
    block({ category: "integrations", variant: "five", path: "dusk/blocks/integrations/five.tsx", dependencies: [core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm"), ui("logo"), ui("button")] }),
    block({ category: "integrations", variant: "six", path: "dusk/blocks/integrations/six.tsx", dependencies: [core("gemini"), core("replit"), core("google-palm"), ui("button")] }),
    block({ category: "integrations", variant: "seven", path: "dusk/blocks/integrations/seven.tsx", dependencies: [core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm"), ui("logo"), ui("button"), motionPrimitive("infinite-slider")] }),
    block({ category: "integrations", variant: "eight", path: "dusk/blocks/integrations/eight.tsx", dependencies: [core("gemini"), core("replit"), core("google-palm"), core("magic-ui"), core("vs-codium"), core("media-wiki"), ui("button")] }),
    block({ category: "login", variant: "one", path: "dusk/blocks/login/one.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "login", variant: "two", path: "dusk/blocks/login/two.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "login", variant: "three", path: "dusk/blocks/login/three.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "logo-cloud", variant: "one", path: "dusk/blocks/logo-cloud/one.tsx", dependencies: [core("spotify"), core("supabase"), core("hulu"), core("firebase"), core("beacon"), core("bolt"), core("claude"), core("figma"), core("vercel"), core("cisco")] }),
    block({ category: "logo-cloud", variant: "two", path: "dusk/blocks/logo-cloud/two.tsx", dependencies: [core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude")] }),
    block({ category: "logo-cloud", variant: "three", path: "dusk/blocks/logo-cloud/three.tsx", dependencies: [motionPrimitive("infinite-slider"), motionPrimitive("progressive-blur"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("cisco"), core("figma")] }),
    block({ category: "pricing", variant: "one", path: "dusk/blocks/pricing/one.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "pricing", variant: "two", path: "dusk/blocks/pricing/two.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "pricing", variant: "three", path: "dusk/blocks/pricing/three.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "pricing", variant: "four", path: "dusk/blocks/pricing/four.tsx", dependencies: [ui("button")] }),
    block({ category: "pricing", variant: "five", path: "dusk/blocks/pricing/five.tsx", dependencies: [ui("button"), core("spotify"), core("hulu"), core("firebase")] }),
    block({ category: "sign-up", variant: "one", path: "dusk/blocks/sign-up/one.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "sign-up", variant: "two", path: "dusk/blocks/sign-up/two.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "sign-up", variant: "three", path: "dusk/blocks/sign-up/three.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "stats", variant: "one", path: "dusk/blocks/stats/one.tsx" }),
    block({ category: "stats", variant: "two", path: "dusk/blocks/stats/two.tsx" }),
    block({ category: "stats", variant: "three", path: "dusk/blocks/stats/three.tsx" }),
    block({ category: "stats", variant: "four", path: "dusk/blocks/stats/four.tsx", dependencies: [core("spotify")] }),
    block({ category: "team", variant: "one", path: "dusk/blocks/team/one.tsx" }),
    block({ category: "team", variant: "two", path: "dusk/blocks/team/two.tsx" }),
    block({ category: "testimonials", variant: "one", path: "dusk/blocks/testimonials/one.tsx", dependencies: [ui("card"), ui("avatar"), core("hulu")] }),
    block({ category: "testimonials", variant: "two", path: "dusk/blocks/testimonials/two.tsx", dependencies: [ui("card"), ui("avatar"), core("hulu")] }),
    block({ category: "testimonials", variant: "three", path: "dusk/blocks/testimonials/three.tsx", dependencies: [core("spotify")] }),
    block({ category: "testimonials", variant: "four", path: "dusk/blocks/testimonials/four.tsx", dependencies: [ui("avatar")] }),
    block({ category: "testimonials", variant: "five", path: "dusk/blocks/testimonials/five.tsx", dependencies: [ui("avatar"), ui("card")] }),
    block({ category: "testimonials", variant: "six", path: "dusk/blocks/testimonials/six.tsx", dependencies: [ui("avatar"), ui("card")] }),
]

export const blocks: Registry["items"] = [...components, ...componentItems, ...blockItems]

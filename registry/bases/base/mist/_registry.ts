import { type Registry } from "shadcn/schema"
import { components } from "./_components-registry"
import { numberWords } from "@/lib/registry-item"

type RegistryItem = NonNullable<Registry["items"]>[number]

const ui = (name: string) => `@tailark/mist-${name}`
const core = (name: string) => `@tailark/core-${name}`

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
    files,
}: {
    category: string
    variant: string
    path: string
    dependencies?: string[]
    files?: RegistryItem["files"]
}): RegistryItem {
    const variantNumber = numberWords[variant] ?? variant

    return {
        name: `mist-${category}-${variantNumber}`,
        type: "registry:block",
        title: `${titleize(category)} ${variantNumber}`,
        description: `Tailark Mist ${category} variant ${variantNumber} block`,
        files: files ?? [
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
        name: `mist-${name}`,
        type: "registry:component",
        title,
        description,
        files: [
            {
                path,
                type: "registry:component",
            },
        ],
        ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
    }
}

const integrationSvgs = [
    core("gemini"),
    core("google-palm"),
    core("magic-ui"),
    core("media-wiki"),
    core("replit"),
    core("vs-codium"),
]

const logoCloudSvgs = [core("hulu"), core("spotify"), core("supabase"), core("vercel")]

const blocksOnly: Registry["items"] = [
    block({ category: "call-to-action", variant: "one", path: "mist/blocks/call-to-action/one.tsx", dependencies: [ui("button")] }),
    block({ category: "call-to-action", variant: "two", path: "mist/blocks/call-to-action/two.tsx", dependencies: [ui("button")] }),
    block({ category: "call-to-action", variant: "three", path: "mist/blocks/call-to-action/three.tsx", dependencies: [ui("button")] }),
    block({ category: "comparator", variant: "one", path: "mist/blocks/comparator/one.tsx", dependencies: [ui("button")] }),
    block({
        category: "contact",
        variant: "one",
        path: "mist/blocks/contact/one.tsx",
        dependencies: [ui("button"), ui("card"), ui("input"), ui("label"), ui("select"), ui("textarea")],
    }),
    block({ category: "content", variant: "one", path: "mist/blocks/content/one.tsx", dependencies: [ui("button"), ui("toggle-group")] }),
    block({ category: "content", variant: "two", path: "mist/blocks/content/two.tsx", dependencies: [ui("button"), ui("toggle-group")] }),
    block({ category: "content", variant: "three", path: "mist/blocks/content/three.tsx" }),
    block({ category: "content", variant: "four", path: "mist/blocks/content/four.tsx" }),
    block({ category: "faqs", variant: "one", path: "mist/blocks/faqs/one.tsx", dependencies: [ui("accordion")] }),
    block({ category: "faqs", variant: "two", path: "mist/blocks/faqs/two.tsx", dependencies: [ui("accordion")] }),
    block({ category: "faqs", variant: "three", path: "mist/blocks/faqs/three.tsx", dependencies: [ui("accordion")] }),
    component({
        name: "features-1-table",
        title: "Features 1 Table",
        description: "Tailark Mist features variant 1 table component",
        path: "mist/blocks/features/one/table.tsx",
    }),
    block({
        category: "features",
        variant: "one",
        path: "mist/blocks/features/one/features.tsx",
        dependencies: [ui("card"), ui("features-1-table")],
    }),
    block({ category: "features", variant: "two", path: "mist/blocks/features/two.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "three", path: "mist/blocks/features/three.tsx", dependencies: [ui("button"), ui("card"), ui("toggle-group")] }),
    block({ category: "features", variant: "four", path: "mist/blocks/features/four.tsx", dependencies: [ui("button"), ui("card"), ui("toggle-group")] }),
    block({ category: "features", variant: "five", path: "mist/blocks/features/five.tsx", dependencies: [ui("button")] }),
    block({ category: "features", variant: "six", path: "mist/blocks/features/six.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "features", variant: "seven", path: "mist/blocks/features/seven.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "features", variant: "eight", path: "mist/blocks/features/eight.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "nine", path: "mist/blocks/features/nine.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "features", variant: "ten", path: "mist/blocks/features/ten.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "features", variant: "eleven", path: "mist/blocks/features/eleven.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "footer", variant: "one", path: "mist/blocks/footer/one.tsx", dependencies: [ui("logo")] }),
    block({ category: "footer", variant: "two", path: "mist/blocks/footer/two.tsx", dependencies: [ui("logo")] }),
    block({ category: "footer", variant: "three", path: "mist/blocks/footer/three.tsx", dependencies: [ui("logo")] }),
    block({ category: "footer", variant: "four", path: "mist/blocks/footer/four.tsx", dependencies: [ui("logo")] }),
    block({ category: "forgot-password", variant: "one", path: "mist/blocks/forgot-password/one.tsx", dependencies: [ui("button"), ui("input"), ui("label"), ui("logo")] }),
    component({
        name: "hero-section-1-header",
        title: "Hero Section 1 Header",
        description: "Tailark Mist hero-section variant 1 header component",
        path: "mist/blocks/hero-section/one/header.tsx",
        dependencies: [ui("button"), ui("logo")],
    }),
    block({
        category: "hero-section",
        variant: "one",
        path: "mist/blocks/hero-section/one/hero-section.tsx",
        dependencies: [ui("hero-section-1-header"), ui("button"), core("spotify"), core("supabase"), core("vercel")],
    }),
    component({
        name: "hero-section-2-header",
        title: "Hero Section 2 Header",
        description: "Tailark Mist hero-section variant 2 header component",
        path: "mist/blocks/hero-section/two/header.tsx",
        dependencies: [ui("button"), ui("logo")],
    }),
    block({
        category: "hero-section",
        variant: "two",
        path: "mist/blocks/hero-section/two/hero-section.tsx",
        dependencies: [ui("hero-section-2-header"), ui("button")],
    }),
    component({
        name: "hero-section-3-header",
        title: "Hero Section 3 Header",
        description: "Tailark Mist hero-section variant 3 header component",
        path: "mist/blocks/hero-section/three/header.tsx",
        dependencies: [ui("button"), ui("logo")],
    }),
    block({
        category: "hero-section",
        variant: "three",
        path: "mist/blocks/hero-section/three/hero-section.tsx",
        dependencies: [ui("hero-section-3-header"), ui("button"), ...logoCloudSvgs],
    }),
    component({
        name: "hero-section-4-header",
        title: "Hero Section 4 Header",
        description: "Tailark Mist hero-section variant 4 header component",
        path: "mist/blocks/hero-section/four/header.tsx",
        dependencies: [ui("button"), ui("logo")],
    }),
    block({
        category: "hero-section",
        variant: "four",
        path: "mist/blocks/hero-section/four/hero-section.tsx",
        dependencies: [ui("hero-section-4-header"), ui("button"), ...logoCloudSvgs],
    }),
    block({ category: "hero-section", variant: "five", path: "mist/blocks/hero-section/five.tsx", dependencies: [ui("button"), ...logoCloudSvgs] }),
    block({ category: "hero-section", variant: "six", path: "mist/blocks/hero-section/six.tsx", dependencies: [ui("button"), ...logoCloudSvgs] }),
    block({ category: "integrations", variant: "one", path: "mist/blocks/integrations/one.tsx", dependencies: integrationSvgs }),
    block({ category: "integrations", variant: "two", path: "mist/blocks/integrations/two.tsx", dependencies: [ui("button"), ...integrationSvgs] }),
    block({ category: "integrations", variant: "three", path: "mist/blocks/integrations/three.tsx", dependencies: [ui("card"), ...integrationSvgs] }),
    block({ category: "login", variant: "one", path: "mist/blocks/login/one.tsx", dependencies: [ui("button"), ui("input"), ui("label"), ui("logo")] }),
    block({ category: "logo-cloud", variant: "one", path: "mist/blocks/logo-cloud/one.tsx", dependencies: logoCloudSvgs }),
    block({ category: "logo-cloud", variant: "two", path: "mist/blocks/logo-cloud/two.tsx", dependencies: logoCloudSvgs }),
    block({ category: "pricing", variant: "one", path: "mist/blocks/pricing/one.tsx", dependencies: [ui("button"), ui("card"), core("spotify"), core("supabase"), core("vercel")] }),
    block({ category: "pricing", variant: "two", path: "mist/blocks/pricing/two.tsx", dependencies: [ui("button"), ui("card")] }),
    block({ category: "sign-up", variant: "one", path: "mist/blocks/sign-up/one.tsx", dependencies: [ui("button"), ui("input"), ui("label"), ui("logo")] }),
    block({ category: "stats", variant: "one", path: "mist/blocks/stats/one.tsx", dependencies: [ui("card")] }),
    block({ category: "stats", variant: "two", path: "mist/blocks/stats/two.tsx" }),
    block({ category: "stats", variant: "three", path: "mist/blocks/stats/three.tsx" }),
    block({ category: "stats", variant: "four", path: "mist/blocks/stats/four.tsx" }),
    block({ category: "team", variant: "one", path: "mist/blocks/team/one.tsx", dependencies: [ui("button")] }),
    block({ category: "team", variant: "two", path: "mist/blocks/team/two.tsx", dependencies: [ui("button"), ui("hover-card")] }),
    block({ category: "testimonials", variant: "one", path: "mist/blocks/testimonials/one.tsx" }),
    block({ category: "testimonials", variant: "two", path: "mist/blocks/testimonials/two.tsx" }),
    block({ category: "testimonials", variant: "three", path: "mist/blocks/testimonials/three.tsx" }),
    block({ category: "testimonials", variant: "four", path: "mist/blocks/testimonials/four.tsx" }),
    block({ category: "testimonials", variant: "five", path: "mist/blocks/testimonials/five.tsx" }),
]

export const blocks: Registry["items"] = [...components, ...blocksOnly]

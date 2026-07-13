import { type Registry } from "shadcn/schema"
import { components } from "./_components-registry"
import { pages } from "./_pages-registry"
import { createRegistryHelpers } from "@/lib/registry-helpers"

const { block, component, core, motionPrimitive, ui } = createRegistryHelpers({
    componentTarget: true,
    kit: "dusk",
})
const local = ui

const componentItems: Registry["items"] = [
    component({ name: "hero-section-1-header", title: "Hero Section 1 Header", description: "Tailark Dusk hero section 1 header component", path: "dusk/blocks/hero-section/one/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-2-header", title: "Hero Section 2 Header", description: "Tailark Dusk hero section 2 header component", path: "dusk/blocks/hero-section/two/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-2-logo-cloud", title: "Hero Section 2 Logo Cloud", description: "Tailark Dusk hero section 2 logo cloud component", path: "dusk/blocks/hero-section/two/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-3-header", title: "Hero Section 3 Header", description: "Tailark Dusk hero section 3 header component", path: "dusk/blocks/hero-section/three/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-3-logo-cloud", title: "Hero Section 3 Logo Cloud", description: "Tailark Dusk hero section 3 logo cloud component", path: "dusk/blocks/hero-section/three/logo-cloud.tsx", dependencies: [core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-4-header", title: "Hero Section 4 Header", description: "Tailark Dusk hero section 4 header component", path: "dusk/blocks/hero-section/four/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-4-logo-cloud", title: "Hero Section 4 Logo Cloud", description: "Tailark Dusk hero section 4 logo cloud component", path: "dusk/blocks/hero-section/four/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-5-header", title: "Hero Section 5 Header", description: "Tailark Dusk hero section 5 header component", path: "dusk/blocks/hero-section/five/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-5-logo-cloud", title: "Hero Section 5 Logo Cloud", description: "Tailark Dusk hero section 5 logo cloud component", path: "dusk/blocks/hero-section/five/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-5-video", title: "Hero Section 5 Video", description: "Tailark Dusk hero section 5 video component", path: "dusk/blocks/hero-section/five/hero-video.tsx" }),
    component({ name: "hero-section-6-header", title: "Hero Section 6 Header", description: "Tailark Dusk hero section 6 header component", path: "dusk/blocks/hero-section/six/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-6-logo-cloud", title: "Hero Section 6 Logo Cloud", description: "Tailark Dusk hero section 6 logo cloud component", path: "dusk/blocks/hero-section/six/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-7-logo-cloud", title: "Hero Section 7 Logo Cloud", description: "Tailark Dusk hero section 7 logo cloud component", path: "dusk/blocks/hero-section/seven/logo-cloud.tsx", dependencies: [motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt")] }),
    component({ name: "hero-section-9-header", title: "Hero Section 9 Header", description: "Tailark Dusk hero section 9 header component", path: "dusk/blocks/hero-section/nine/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-9-logo-cloud", title: "Hero Section 9 Logo Cloud", description: "Tailark Dusk hero section 9 logo cloud component", path: "dusk/blocks/hero-section/nine/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    component({ name: "hero-section-10-header", title: "Hero Section 10 Header", description: "Tailark Dusk hero section 10 header component", path: "dusk/blocks/hero-section/ten/header.tsx", dependencies: [ui("logo"), ui("button")] }),
    component({ name: "hero-section-10-logo-cloud", title: "Hero Section 10 Logo Cloud", description: "Tailark Dusk hero section 10 logo cloud component", path: "dusk/blocks/hero-section/ten/logo-cloud.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
]

const blockItems: Registry["items"] = [
    block({ category: "call-to-action", variant: "one", path: "dusk/blocks/call-to-action/one.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "45/14", width: 686, height: 213 } }),
    block({ category: "call-to-action", variant: "two", path: "dusk/blocks/call-to-action/two.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "90/20", width: 686, height: 152 } }),
    block({ category: "content", variant: "one", path: "dusk/blocks/content/one.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "80/69", width: 686, height: 592 } }),
    block({ category: "content", variant: "two", path: "dusk/blocks/content/two.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "40/13", width: 686, height: 223 } }),
    block({ category: "content", variant: "three", path: "dusk/blocks/content/three.tsx", meta: { "aspect-ratio": "90/55", width: 686, height: 419 } }),
    block({ category: "content", variant: "four", path: "dusk/blocks/content/four.tsx", meta: { "aspect-ratio": "90/50", width: 686, height: 381 } }),
    block({ category: "faqs", variant: "one", path: "dusk/blocks/faqs/one.tsx", dependencies: [ui("accordion")], meta: { "aspect-ratio": "60/25", width: 686, height: 286 } }),
    block({ category: "features", variant: "one", path: "dusk/blocks/features/one.tsx", dependencies: [ui("card")], meta: { "aspect-ratio": "90/72", width: 686, height: 549 } }),
    block({ category: "features", variant: "two", path: "dusk/blocks/features/two.tsx", dependencies: [ui("card")], meta: { "aspect-ratio": "90/72", width: 686, height: 549 } }),
    block({ category: "features", variant: "three", path: "dusk/blocks/features/three.tsx", dependencies: [ui("card"), ui("button")], meta: { "aspect-ratio": "90/63", width: 686, height: 480 } }),
    block({ category: "features", variant: "four", path: "dusk/blocks/features/four.tsx", dependencies: [ui("card")], meta: { "aspect-ratio": "32/21", width: 686, height: 450 } }),
    block({ category: "features", variant: "five", path: "dusk/blocks/features/five.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "90/83", width: 686, height: 633, "category-media": true } }),
    block({ category: "features", variant: "six", path: "dusk/blocks/features/six.tsx", meta: { "aspect-ratio": "72/55", width: 686, height: 524 } }),
    block({ category: "features", variant: "seven", path: "dusk/blocks/features/seven.tsx", dependencies: [ui("chart")], packageDependencies: ["dotted-map", "recharts"], meta: { "aspect-ratio": "90/95", width: 686, height: 724 } }),
    block({ category: "footer", variant: "one", path: "dusk/blocks/footer/one.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")], meta: { "aspect-ratio": "60/26", width: 686, height: 297 } }),
    block({ category: "footer", variant: "two", path: "dusk/blocks/footer/two.tsx", dependencies: [ui("logo"), ui("button"), core("gemini"), core("claude-ai"), core("openai")], meta: { "aspect-ratio": "60/24", width: 686, height: 274 } }),
    block({ category: "hero-section", variant: "one", path: "dusk/blocks/hero-section/one/hero-section.tsx", dependencies: [ui("button"), local("hero-section-1-header"), core("spotify"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("vercel")], meta: { "aspect-ratio": "60/66", width: 686, height: 755 } }),
    block({ category: "hero-section", variant: "two", path: "dusk/blocks/hero-section/two/hero-section.tsx", dependencies: [ui("button"), local("hero-section-2-header"), local("hero-section-2-logo-cloud")], meta: { "aspect-ratio": "90/76", width: 686, height: 579 } }),
    block({ category: "hero-section", variant: "three", path: "dusk/blocks/hero-section/three/hero-section.tsx", dependencies: [local("hero-section-3-header"), local("hero-section-3-logo-cloud")], meta: { "aspect-ratio": "60/51", width: 686, height: 583 } }),
    block({ category: "hero-section", variant: "four", path: "dusk/blocks/hero-section/four/hero-section.tsx", dependencies: [ui("button"), ui("kdb"), local("hero-section-4-header"), local("hero-section-4-logo-cloud")], meta: { "aspect-ratio": "72/47", width: 686, height: 448 } }),
    block({ category: "hero-section", variant: "five", path: "dusk/blocks/hero-section/five/hero-section.tsx", dependencies: [ui("button"), local("hero-section-5-header"), local("hero-section-5-logo-cloud"), local("hero-section-5-video")], meta: { "aspect-ratio": "90/59", width: 686, height: 450 } }),
    block({ category: "hero-section", variant: "six", path: "dusk/blocks/hero-section/six/hero-section.tsx", dependencies: [ui("button"), local("hero-section-6-header"), local("hero-section-6-logo-cloud")], meta: { "aspect-ratio": "90/80", width: 686, height: 610 } }),
    block({ category: "hero-section", variant: "seven", path: "dusk/blocks/hero-section/seven/hero-section.tsx", dependencies: [ui("button"), local("hero-section-6-header"), local("hero-section-7-logo-cloud")], meta: { "aspect-ratio": "90/59", width: 686, height: 450 } }),
    block({ category: "hero-section", variant: "eight", path: "dusk/blocks/hero-section/eight.tsx", dependencies: [local("hero-section-6-header"), core("google"), core("trustpilot"), core("g2")], meta: { "aspect-ratio": "60/48", width: 686, height: 549, "category-media": true } }),
    block({ category: "hero-section", variant: "nine", path: "dusk/blocks/hero-section/nine/hero-section.tsx", dependencies: [ui("button"), local("hero-section-9-header"), local("hero-section-9-logo-cloud")], meta: { "aspect-ratio": "60/51", width: 686, height: 583 } }),
    block({ category: "hero-section", variant: "ten", path: "dusk/blocks/hero-section/ten/hero-section.tsx", dependencies: [ui("button"), local("hero-section-10-header"), local("hero-section-10-logo-cloud")], meta: { "aspect-ratio": "40/31", width: 686, height: 532 } }),
    block({ category: "integrations", variant: "one", path: "dusk/blocks/integrations/one.tsx", dependencies: [ui("button"), core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm")], meta: { "aspect-ratio": "60/31", width: 686, height: 354 } }),
    block({ category: "logo-cloud", variant: "one", path: "dusk/blocks/logo-cloud/one.tsx", dependencies: [core("spotify"), core("supabase"), core("hulu"), core("firebase"), core("beacon"), core("bolt"), core("claude"), core("figma"), core("vercel"), core("cisco")], meta: { "aspect-ratio": "90/15", width: 686, height: 114 } }),
    block({ category: "logo-cloud", variant: "two", path: "dusk/blocks/logo-cloud/two.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude")], meta: { "aspect-ratio": "90/8", width: 686, height: 61 } }),
    block({ category: "logo-cloud", variant: "three", path: "dusk/blocks/logo-cloud/three.tsx", dependencies: [core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")], meta: { "aspect-ratio": "90/10", width: 686, height: 76 } }),
    block({ category: "logo-cloud", variant: "four", path: "dusk/blocks/logo-cloud/four.tsx", dependencies: [motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt")], meta: { "aspect-ratio": "10/1", width: 686, height: 69 } }),
    block({ category: "pricing", variant: "one", path: "dusk/blocks/pricing/one.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "60/45", width: 686, height: 515 } }),
    block({ category: "pricing", variant: "two", path: "dusk/blocks/pricing/two.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "72/54", width: 686, height: 515 } }),
    block({ category: "stats", variant: "one", path: "dusk/blocks/stats/one.tsx", meta: { "aspect-ratio": "96/43", width: 686, height: 307 } }),
    block({ category: "stats", variant: "two", path: "dusk/blocks/stats/two.tsx", meta: { "aspect-ratio": "90/40", width: 686, height: 305, "category-media": true } }),
    block({ category: "team", variant: "one", path: "dusk/blocks/team/one.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "90/81", width: 686, height: 617 } }),
    block({ category: "team", variant: "two", path: "dusk/blocks/team/two.tsx", meta: { "aspect-ratio": "90/37", width: 686, height: 282 } }),
    block({ category: "testimonials", variant: "one", path: "dusk/blocks/testimonials/one.tsx", dependencies: [ui("button"), core("gemini"), core("openai")], meta: { "aspect-ratio": "18/11", width: 686, height: 419 } }),
    block({ category: "testimonials", variant: "two", path: "dusk/blocks/testimonials/two.tsx", dependencies: [ui("button"), core("claude-ai"), core("gemini"), core("openai")], meta: { "aspect-ratio": "90/42", width: 686, height: 320 } }),
]

export const blocks: Registry["items"] = [...components, ...componentItems, ...blockItems, ...pages]

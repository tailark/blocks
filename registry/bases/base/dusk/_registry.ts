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
    block({ category: "call-to-action", variant: "one", path: "dusk/blocks/call-to-action/one.tsx", dependencies: [ui("button")] }),
    block({ category: "call-to-action", variant: "two", path: "dusk/blocks/call-to-action/two.tsx", dependencies: [ui("button")] }),
    block({ category: "content", variant: "one", path: "dusk/blocks/content/one.tsx", dependencies: [ui("button")] }),
    block({ category: "content", variant: "two", path: "dusk/blocks/content/two.tsx", dependencies: [ui("button")] }),
    block({ category: "content", variant: "three", path: "dusk/blocks/content/three.tsx" }),
    block({ category: "content", variant: "four", path: "dusk/blocks/content/four.tsx" }),
    block({ category: "faqs", variant: "one", path: "dusk/blocks/faqs/one.tsx", dependencies: [ui("accordion")] }),
    block({ category: "features", variant: "one", path: "dusk/blocks/features/one.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "two", path: "dusk/blocks/features/two.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "three", path: "dusk/blocks/features/three.tsx", dependencies: [ui("card"), ui("button")] }),
    block({ category: "features", variant: "four", path: "dusk/blocks/features/four.tsx", dependencies: [ui("card")] }),
    block({ category: "features", variant: "five", path: "dusk/blocks/features/five.tsx", dependencies: [ui("button")] }),
    block({ category: "features", variant: "six", path: "dusk/blocks/features/six.tsx" }),
    block({ category: "features", variant: "seven", path: "dusk/blocks/features/seven.tsx", dependencies: [ui("chart")], packageDependencies: ["dotted-map", "recharts"] }),
    block({ category: "footer", variant: "one", path: "dusk/blocks/footer/one.tsx", dependencies: [ui("logo"), ui("button"), ui("input"), ui("label")] }),
    block({ category: "footer", variant: "two", path: "dusk/blocks/footer/two.tsx", dependencies: [ui("logo"), ui("button"), core("gemini"), core("claude-ai"), core("openai")] }),
    block({ category: "hero-section", variant: "one", path: "dusk/blocks/hero-section/one/hero-section.tsx", dependencies: [ui("button"), local("hero-section-1-header"), core("spotify"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude"), core("vercel")] }),
    block({ category: "hero-section", variant: "two", path: "dusk/blocks/hero-section/two/hero-section.tsx", dependencies: [ui("button"), local("hero-section-2-header"), local("hero-section-2-logo-cloud")] }),
    block({ category: "hero-section", variant: "three", path: "dusk/blocks/hero-section/three/hero-section.tsx", dependencies: [local("hero-section-3-header"), local("hero-section-3-logo-cloud")] }),
    block({ category: "hero-section", variant: "four", path: "dusk/blocks/hero-section/four/hero-section.tsx", dependencies: [ui("button"), ui("kdb"), local("hero-section-4-header"), local("hero-section-4-logo-cloud")] }),
    block({ category: "hero-section", variant: "five", path: "dusk/blocks/hero-section/five/hero-section.tsx", dependencies: [ui("button"), local("hero-section-5-header"), local("hero-section-5-logo-cloud"), local("hero-section-5-video")] }),
    block({ category: "hero-section", variant: "six", path: "dusk/blocks/hero-section/six/hero-section.tsx", dependencies: [ui("button"), local("hero-section-6-header"), local("hero-section-6-logo-cloud")] }),
    block({ category: "hero-section", variant: "seven", path: "dusk/blocks/hero-section/seven/hero-section.tsx", dependencies: [ui("button"), local("hero-section-6-header"), local("hero-section-7-logo-cloud")] }),
    block({ category: "hero-section", variant: "eight", path: "dusk/blocks/hero-section/eight.tsx", dependencies: [local("hero-section-6-header"), core("google"), core("trustpilot"), core("g2")] }),
    block({ category: "hero-section", variant: "nine", path: "dusk/blocks/hero-section/nine/hero-section.tsx", dependencies: [ui("button"), local("hero-section-9-header"), local("hero-section-9-logo-cloud")] }),
    block({ category: "hero-section", variant: "ten", path: "dusk/blocks/hero-section/ten/hero-section.tsx", dependencies: [ui("button"), local("hero-section-10-header"), local("hero-section-10-logo-cloud")] }),
    block({ category: "integrations", variant: "one", path: "dusk/blocks/integrations/one.tsx", dependencies: [ui("button"), core("gemini"), core("replit"), core("magic-ui"), core("vs-codium"), core("media-wiki"), core("google-palm")] }),
    block({ category: "logo-cloud", variant: "one", path: "dusk/blocks/logo-cloud/one.tsx", dependencies: [core("spotify"), core("supabase"), core("hulu"), core("firebase"), core("beacon"), core("bolt"), core("claude"), core("figma"), core("vercel"), core("cisco")] }),
    block({ category: "logo-cloud", variant: "two", path: "dusk/blocks/logo-cloud/two.tsx", dependencies: [core("use-media"), motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("firebase"), core("beacon"), core("claude")] }),
    block({ category: "logo-cloud", variant: "three", path: "dusk/blocks/logo-cloud/three.tsx", dependencies: [core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt"), core("beacon")] }),
    block({ category: "logo-cloud", variant: "four", path: "dusk/blocks/logo-cloud/four.tsx", dependencies: [motionPrimitive("infinite-slider"), core("spotify"), core("vercel"), core("supabase"), core("hulu"), core("bolt")] }),
    block({ category: "pricing", variant: "one", path: "dusk/blocks/pricing/one.tsx", dependencies: [ui("button")] }),
    block({ category: "pricing", variant: "two", path: "dusk/blocks/pricing/two.tsx", dependencies: [ui("button")] }),
    block({ category: "stats", variant: "one", path: "dusk/blocks/stats/one.tsx" }),
    block({ category: "stats", variant: "two", path: "dusk/blocks/stats/two.tsx" }),
    block({ category: "team", variant: "one", path: "dusk/blocks/team/one.tsx", dependencies: [ui("button")] }),
    block({ category: "team", variant: "two", path: "dusk/blocks/team/two.tsx" }),
    block({ category: "testimonials", variant: "one", path: "dusk/blocks/testimonials/one.tsx", dependencies: [ui("button"), core("gemini"), core("openai")] }),
    block({ category: "testimonials", variant: "two", path: "dusk/blocks/testimonials/two.tsx", dependencies: [ui("button"), core("claude-ai"), core("gemini"), core("openai")] }),
]

export const blocks: Registry["items"] = [...components, ...componentItems, ...blockItems, ...pages]

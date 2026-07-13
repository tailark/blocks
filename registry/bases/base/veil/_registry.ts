import { type Registry } from "shadcn/schema"
import { components } from "./_components-registry"
import { createRegistryHelpers } from "@/lib/registry-helpers"

const { block, component, core, shadcn, ui } = createRegistryHelpers({ kit: "veil" })

const companyLogos = [
    core("claude"),
    core("clerk"),
    core("figma"),
    core("firebase"),
    core("linear"),
    core("slack"),
    core("supabase"),
    core("twilio"),
    core("vercel"),
]

const featureLogos = [
    core("clerk"),
    core("firebase"),
    core("linear"),
    core("slack"),
    core("supabase"),
    core("vercel"),
]

const integrationLogos = [
    core("clerk"),
    core("firebase"),
    core("linear"),
    core("slack"),
    core("supabase"),
    core("vercel"),
]

const componentItems: Registry["items"] = [
    component({ name: "footer-5-theme-switcher", title: "Footer 5 Theme Switcher", description: "Tailark Veil footer variant 5 theme switcher component", path: "veil/blocks/footer/five/theme-switcher.tsx", dependencies: [ui("button")], packageDependencies: ["next-themes"] }),
    component({ name: "footer-6-theme-switcher", title: "Footer 6 Theme Switcher", description: "Tailark Veil footer variant 6 theme switcher component", path: "veil/blocks/footer/six/theme-switcher.tsx", dependencies: [ui("button")], packageDependencies: ["next-themes"] }),
    component({ name: "footer-6-social-medias", title: "Footer 6 Social Medias", description: "Tailark Veil footer variant 6 social media links component", path: "veil/blocks/footer/six/social-medias.tsx", dependencies: [ui("button")] }),
    component({ name: "hero-section-1-header", title: "Hero Section 1 Header", description: "Tailark Veil hero-section variant 1 header component", path: "veil/blocks/hero-section/one/header.tsx", dependencies: [ui("button"), ui("logo")] }),
    component({ name: "hero-section-2-header", title: "Hero Section 2 Header", description: "Tailark Veil hero-section variant 2 header component", path: "veil/blocks/hero-section/two/header.tsx", dependencies: [core("use-media"), ui("button"), ui("logo")], packageDependencies: ["motion"] }),
    component({ name: "hero-section-3-header", title: "Hero Section 3 Header", description: "Tailark Veil hero-section variant 3 header component", path: "veil/blocks/hero-section/three/header.tsx", dependencies: [ui("button"), ui("logo")] }),
    component({ name: "hero-section-4-header", title: "Hero Section 4 Header", description: "Tailark Veil hero-section variant 4 header component", path: "veil/blocks/hero-section/four/header.tsx", dependencies: [core("use-media"), ui("button"), ui("logo")], packageDependencies: ["motion"] }),
]

const blockItems: Registry["items"] = [
    block({ category: "call-to-action", variant: "one", path: "veil/blocks/call-to-action/one.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "45/11", width: 686, height: 168 } }),
    block({ category: "call-to-action", variant: "two", path: "veil/blocks/call-to-action/two.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "72/25", width: 686, height: 238 } }),
    block({ category: "call-to-action", variant: "three", path: "veil/blocks/call-to-action/three.tsx", dependencies: [ui("button")], meta: { "aspect-ratio": "90/21", width: 686, height: 160 } }),
    block({ category: "call-to-action", variant: "four", path: "veil/blocks/call-to-action/four.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "8/3", width: 686, height: 257 } }),
    block({ category: "comparator", variant: "one", path: "veil/blocks/comparator/one.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "90/57", width: 686, height: 434 } }),
    block({ category: "comparator", variant: "two", path: "veil/blocks/comparator/two.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "comparator", variant: "three", path: "veil/blocks/comparator/three.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "90/82", width: 686, height: 625 } }),
    block({ category: "contact", variant: "one", path: "veil/blocks/contact/one.tsx", dependencies: [ui("button"), ui("card"), ui("input"), ui("textarea"), ui("label")], meta: { "aspect-ratio": "90/47", width: 686, height: 358 } }),
    block({ category: "contact", variant: "two", path: "veil/blocks/contact/two.tsx", dependencies: [ui("button"), ui("card"), ui("input"), ui("textarea"), ui("label"), ui("select")], meta: { "aspect-ratio": "72/49", width: 686, height: 467 } }),
    block({ category: "content", variant: "one", path: "veil/blocks/content/one.tsx", meta: { "aspect-ratio": "15/4", width: 686, height: 183 } }),
    block({ category: "content", variant: "two", path: "veil/blocks/content/two.tsx", meta: { "aspect-ratio": "90/24", width: 686, height: 183 } }),
    block({ category: "content", variant: "three", path: "veil/blocks/content/three.tsx", meta: { "aspect-ratio": "80/27", width: 686, height: 232 } }),
    block({ category: "faqs", variant: "one", path: "veil/blocks/faqs/one.tsx", dependencies: [ui("card"), shadcn("accordion")], meta: { "aspect-ratio": "9/4", width: 686, height: 305 } }),
    block({ category: "faqs", variant: "two", path: "veil/blocks/faqs/two.tsx", dependencies: [shadcn("accordion")], meta: { "aspect-ratio": "60/19", width: 686, height: 217 } }),
    block({ category: "faqs", variant: "three", path: "veil/blocks/faqs/three.tsx", dependencies: [shadcn("accordion")], meta: { "aspect-ratio": "60/27", width: 686, height: 309 } }),
    block({ category: "faqs", variant: "four", path: "veil/blocks/faqs/four.tsx", dependencies: [ui("card")], meta: { "aspect-ratio": "90/47", width: 686, height: 358 } }),
    block({ category: "faqs", variant: "five", path: "veil/blocks/faqs/five.tsx", dependencies: [ui("card"), shadcn("accordion")], meta: { "aspect-ratio": "60/38", width: 686, height: 434 } }),
    block({ category: "features", variant: "one", path: "veil/blocks/features/one.tsx", dependencies: [ui("card"), ...featureLogos], meta: { "aspect-ratio": "60/40", width: 686, height: 457 } }),
    block({ category: "features", variant: "two", path: "veil/blocks/features/two.tsx", dependencies: [ui("card"), ...featureLogos], meta: { "aspect-ratio": "90/60", width: 686, height: 457 } }),
    block({ category: "features", variant: "three", path: "veil/blocks/features/three.tsx", dependencies: [ui("button"), ...featureLogos], meta: { "aspect-ratio": "90/38", width: 686, height: 290 } }),
    block({ category: "footer", variant: "one", path: "veil/blocks/footer/one.tsx", dependencies: [ui("logo")], meta: { "aspect-ratio": "90/29", width: 686, height: 221 } }),
    block({ category: "footer", variant: "two", path: "veil/blocks/footer/two.tsx", dependencies: [ui("logo")], meta: { "aspect-ratio": "96/19", width: 686, height: 136 } }),
    block({ category: "footer", variant: "three", path: "veil/blocks/footer/three.tsx", dependencies: [ui("logo")], meta: { "aspect-ratio": "80/13", width: 686, height: 111 } }),
    block({ category: "footer", variant: "four", path: "veil/blocks/footer/four.tsx", dependencies: [ui("logo")], meta: { "aspect-ratio": "60/17", width: 686, height: 194 } }),
    block({ category: "footer", variant: "five", path: "veil/blocks/footer/five/footer.tsx", dependencies: [ui("logo"), ui("footer-5-theme-switcher")], meta: { "aspect-ratio": "60/14", width: 686, height: 160 } }),
    block({ category: "footer", variant: "six", path: "veil/blocks/footer/six/footer.tsx", dependencies: [ui("footer-6-theme-switcher"), ui("footer-6-social-medias"), ui("logo")], meta: { "aspect-ratio": "60/17", width: 686, height: 194 } }),
    block({ category: "forgot-password", variant: "one", path: "veil/blocks/forgot-password/one.tsx", dependencies: [ui("button"), ui("card"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "forgot-password", variant: "two", path: "veil/blocks/forgot-password/two.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "forgot-password", variant: "three", path: "veil/blocks/forgot-password/three.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "hero-section", variant: "one", path: "veil/blocks/hero-section/one/hero-section.tsx", dependencies: [ui("hero-section-1-header"), ui("button"), ui("card"), ...companyLogos], meta: { "aspect-ratio": "45/26", width: 686, height: 396 } }),
    block({ category: "hero-section", variant: "two", path: "veil/blocks/hero-section/two/hero-section.tsx", dependencies: [ui("hero-section-2-header"), ui("card"), ...companyLogos], meta: { "aspect-ratio": "45/26", width: 686, height: 396 } }),
    block({ category: "hero-section", variant: "three", path: "veil/blocks/hero-section/three/hero-section.tsx", dependencies: [ui("hero-section-3-header"), ui("card"), ...companyLogos], meta: { "aspect-ratio": "90/47", width: 686, height: 358 } }),
    block({ category: "hero-section", variant: "four", path: "veil/blocks/hero-section/four/hero-section.tsx", dependencies: [ui("hero-section-4-header")], meta: { "aspect-ratio": "90/55", width: 686, height: 419 } }),
    block({ category: "hero-section", variant: "five", path: "veil/blocks/hero-section/five.tsx", dependencies: [ui("button"), ui("logo")], meta: { "aspect-ratio": "30/17", width: 686, height: 389 } }),
    block({ category: "integrations", variant: "one", path: "veil/blocks/integrations/one.tsx", dependencies: [ui("button"), ui("logo"), ...integrationLogos], meta: { "aspect-ratio": "90/36", width: 686, height: 274 } }),
    block({ category: "integrations", variant: "two", path: "veil/blocks/integrations/two.tsx", dependencies: [ui("button"), ui("logo"), ...integrationLogos], meta: { "aspect-ratio": "72/41", width: 686, height: 391 } }),
    block({ category: "login", variant: "one", path: "veil/blocks/login/one.tsx", dependencies: [ui("button"), ui("card"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "login", variant: "two", path: "veil/blocks/login/two.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "login", variant: "three", path: "veil/blocks/login/three.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "logo-cloud", variant: "one", path: "veil/blocks/logo-cloud/one.tsx", dependencies: [core("beacon"), core("bolt"), core("cisco"), core("hulu"), core("linear"), core("spotify"), core("supabase"), core("vercel")], meta: { "aspect-ratio": "90/12", width: 686, height: 91 } }),
    block({ category: "logo-cloud", variant: "two", path: "veil/blocks/logo-cloud/two.tsx", dependencies: [core("beacon"), core("bolt"), core("cisco"), core("hulu"), core("spotify"), core("supabase"), core("vercel")], packageDependencies: ["motion"], meta: { "aspect-ratio": "45/4", width: 686, height: 61 } }),
    block({ category: "pricing", variant: "one", path: "veil/blocks/pricing/one.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "90/78", width: 686, height: 595 } }),
    block({ category: "pricing", variant: "two", path: "veil/blocks/pricing/two.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "90/51", width: 686, height: 389 } }),
    block({ category: "pricing", variant: "three", path: "veil/blocks/pricing/three.tsx", dependencies: [ui("button"), ui("card")], meta: { "aspect-ratio": "80/41", width: 686, height: 352 } }),
    block({ category: "sign-up", variant: "one", path: "veil/blocks/sign-up/one.tsx", dependencies: [ui("button"), ui("card"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "sign-up", variant: "two", path: "veil/blocks/sign-up/two.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "sign-up", variant: "three", path: "veil/blocks/sign-up/three.tsx", dependencies: [ui("button"), ui("input"), ui("logo"), ui("label")], meta: { "aspect-ratio": "90/56", width: 686, height: 427 } }),
    block({ category: "stats", variant: "one", path: "veil/blocks/stats/one.tsx", meta: { "aspect-ratio": "16/5", width: 686, height: 214 } }),
    block({ category: "stats", variant: "two", path: "veil/blocks/stats/two.tsx", meta: { "aspect-ratio": "80/41", width: 686, height: 352 } }),
    block({ category: "stats", variant: "three", path: "veil/blocks/stats/three.tsx", meta: { "aspect-ratio": "90/51", width: 686, height: 389 } }),
    block({ category: "stats", variant: "four", path: "veil/blocks/stats/four.tsx", meta: { "aspect-ratio": "90/42", width: 686, height: 320 } }),
    block({ category: "team", variant: "one", path: "veil/blocks/team/one.tsx", meta: { "aspect-ratio": "90/40", width: 686, height: 305 } }),
    block({ category: "team", variant: "two", path: "veil/blocks/team/two.tsx", meta: { "aspect-ratio": "60/22", width: 686, height: 252 } }),
    block({ category: "testimonials", variant: "one", path: "veil/blocks/testimonials/one.tsx", meta: { "aspect-ratio": "30/13", width: 686, height: 297 } }),
    block({ category: "testimonials", variant: "two", path: "veil/blocks/testimonials/two.tsx", dependencies: [ui("card")], meta: { "aspect-ratio": "40/23", width: 686, height: 394 } }),
    block({ category: "testimonials", variant: "three", path: "veil/blocks/testimonials/three.tsx", meta: { "aspect-ratio": "9/2", width: 686, height: 152 } }),
    block({ category: "testimonials", variant: "four", path: "veil/blocks/testimonials/four.tsx", meta: { "aspect-ratio": "72/19", width: 686, height: 181 } }),
]

export const blocks: Registry["items"] = [...components, ...componentItems, ...blockItems]

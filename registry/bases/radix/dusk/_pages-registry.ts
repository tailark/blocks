import { type Registry } from "shadcn/schema"
import { createRegistryHelpers } from "@/lib/registry-helpers"

const { component, core, motionPrimitive, page, ui } = createRegistryHelpers({
    componentTarget: true,
    kit: "dusk",
})
const local = ui

const pageComponentItems: Registry["items"] = [
    component({
        name: "landing-1-header",
        title: "Landing 1 Header",
        description: "Tailark Dusk landing page 1 header component",
        path: "dusk/pages/landing/one/components/header.tsx",
        dependencies: [ui("logo"), ui("button")],
    }),
    component({
        name: "landing-1-logo-cloud",
        title: "Landing 1 Logo Cloud",
        description: "Tailark Dusk landing page 1 logo cloud component",
        path: "dusk/pages/landing/one/components/logo-cloud.tsx",
        dependencies: [
            core("use-media"),
            motionPrimitive("infinite-slider"),
            core("spotify"),
            core("vercel"),
            core("supabase"),
            core("hulu"),
            core("bolt"),
            core("beacon"),
        ],
    }),
    component({
        name: "landing-1-hero-video",
        title: "Landing 1 Hero Video",
        description: "Tailark Dusk landing page 1 hero video component",
        path: "dusk/pages/landing/one/components/hero-video.tsx",
    }),
]

const pageItems: Registry["items"] = [
    page({
        category: "landing",
        variant: "one",
        path: "dusk/pages/landing/one/landing-page.tsx",
        dependencies: [
            ui("button"),
            local("landing-1-header"),
            local("landing-1-logo-cloud"),
            local("landing-1-hero-video"),
        ],
        packageDependencies: ["lucide-react"],
    }),
]

export const pages: Registry["items"] = [...pageComponentItems, ...pageItems]

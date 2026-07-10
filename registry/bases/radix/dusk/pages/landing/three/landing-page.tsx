import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/three/hero-section'
import FeaturesFive from '@/registry/bases/radix/dusk/blocks/features/five'
import FeaturesSix from '@/registry/bases/radix/dusk/blocks/features/six'
import Content from '@/registry/bases/radix/dusk/blocks/content/three'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/one'
import Team from '@/registry/bases/radix/dusk/blocks/team/one'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesFive />
            <FeaturesSix />
            <Content />
            <Stats />
            <Team />
            <Pricing />
            <CallToAction />
            <Footer />
        </>
    )
}

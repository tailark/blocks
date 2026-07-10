import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/three/hero-section'
import FeaturesFive from '@/registry/bases/base/dusk/blocks/features/five'
import FeaturesSix from '@/registry/bases/base/dusk/blocks/features/six'
import Content from '@/registry/bases/base/dusk/blocks/content/three'
import Stats from '@/registry/bases/base/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/one'
import Team from '@/registry/bases/base/dusk/blocks/team/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/base/dusk/blocks/footer/one'

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

import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/six/hero-section'
import FeaturesFour from '@/registry/bases/base/dusk/blocks/features/four'
import FeaturesFive from '@/registry/bases/base/dusk/blocks/features/five'
import Content from '@/registry/bases/base/dusk/blocks/content/two'
import Stats from '@/registry/bases/base/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/two'
import Team from '@/registry/bases/base/dusk/blocks/team/two'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/base/dusk/blocks/footer/two'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesFour />
            <FeaturesFive />
            <Content />
            <Pricing />
            <Stats />
            <Team />
            <CallToAction />
            <Footer />
        </>
    )
}

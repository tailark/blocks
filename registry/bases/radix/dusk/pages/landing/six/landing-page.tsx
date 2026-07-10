import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/six/hero-section'
import FeaturesFour from '@/registry/bases/radix/dusk/blocks/features/four'
import FeaturesFive from '@/registry/bases/radix/dusk/blocks/features/five'
import Content from '@/registry/bases/radix/dusk/blocks/content/two'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/two'
import Team from '@/registry/bases/radix/dusk/blocks/team/two'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/two'

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

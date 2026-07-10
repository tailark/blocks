import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/four/hero-section'
import FeaturesSeven from '@/registry/bases/radix/dusk/blocks/features/seven'
import FeaturesOne from '@/registry/bases/radix/dusk/blocks/features/one'
import Content from '@/registry/bases/radix/dusk/blocks/content/four'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/two'
import Integrations from '@/registry/bases/radix/dusk/blocks/integrations/one'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/two'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <Content />
            <FeaturesSeven />
            <Integrations />
            <FeaturesOne />
            <Stats />
            <Pricing />
            <CallToAction />
            <Footer />
        </>
    )
}

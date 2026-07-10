import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/four/hero-section'
import FeaturesSeven from '@/registry/bases/base/dusk/blocks/features/seven'
import FeaturesOne from '@/registry/bases/base/dusk/blocks/features/one'
import Content from '@/registry/bases/base/dusk/blocks/content/four'
import Stats from '@/registry/bases/base/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/two'
import Integrations from '@/registry/bases/base/dusk/blocks/integrations/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/base/dusk/blocks/footer/two'

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

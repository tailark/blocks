import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/ten/hero-section'
import FeaturesFive from '@/registry/bases/radix/dusk/blocks/features/five'
import FeaturesSix from '@/registry/bases/radix/dusk/blocks/features/six'
import Content from '@/registry/bases/radix/dusk/blocks/content/two'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/two'
import Integrations from '@/registry/bases/radix/dusk/blocks/integrations/one'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/two'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesFive />
            <Content />
            <Integrations />
            <FeaturesSix />
            <Stats />
            <Pricing />
            <CallToAction />
            <Footer />
        </>
    )
}

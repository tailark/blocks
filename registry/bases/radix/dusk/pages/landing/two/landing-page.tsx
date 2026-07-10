import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/two/hero-section'
import FeaturesThree from '@/registry/bases/radix/dusk/blocks/features/three'
import FeaturesFour from '@/registry/bases/radix/dusk/blocks/features/four'
import Content from '@/registry/bases/radix/dusk/blocks/content/two'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/two'
import FAQs from '@/registry/bases/radix/dusk/blocks/faqs/one'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/two'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesThree />
            <Content />
            <FeaturesFour />
            <Stats />
            <Pricing />
            <FAQs />
            <CallToAction />
            <Footer />
        </>
    )
}

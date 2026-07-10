import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/two/hero-section'
import FeaturesThree from '@/registry/bases/base/dusk/blocks/features/three'
import FeaturesFour from '@/registry/bases/base/dusk/blocks/features/four'
import Content from '@/registry/bases/base/dusk/blocks/content/two'
import Stats from '@/registry/bases/base/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/two'
import FAQs from '@/registry/bases/base/dusk/blocks/faqs/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/base/dusk/blocks/footer/two'

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

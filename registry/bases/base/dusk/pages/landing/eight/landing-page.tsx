import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/eight'
import FeaturesThree from '@/registry/bases/base/dusk/blocks/features/three'
import FeaturesFive from '@/registry/bases/base/dusk/blocks/features/five'
import FeaturesFour from '@/registry/bases/base/dusk/blocks/features/four'
import Content from '@/registry/bases/base/dusk/blocks/content/two'
import Stats from '@/registry/bases/base/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/two'
import LogoCloud from '@/registry/bases/base/dusk/blocks/logo-cloud/three'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/base/dusk/blocks/footer/two'
import Testimonials from '@/registry/bases/base/dusk/blocks/testimonials/one'
import FAQs from '@/registry/bases/base/dusk/blocks/faqs/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <LogoCloud />
            <FeaturesFour />
            <FeaturesFive />
            <Content />
            <FeaturesThree />
            <Stats />
            <Pricing />
            <FAQs />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}

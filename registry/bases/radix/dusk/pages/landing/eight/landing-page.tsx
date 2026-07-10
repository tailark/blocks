import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/eight'
import FeaturesThree from '@/registry/bases/radix/dusk/blocks/features/three'
import FeaturesFive from '@/registry/bases/radix/dusk/blocks/features/five'
import FeaturesFour from '@/registry/bases/radix/dusk/blocks/features/four'
import Content from '@/registry/bases/radix/dusk/blocks/content/two'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/two'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/two'
import LogoCloud from '@/registry/bases/radix/dusk/blocks/logo-cloud/three'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/two'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/two'
import Testimonials from '@/registry/bases/radix/dusk/blocks/testimonials/one'
import FAQs from '@/registry/bases/radix/dusk/blocks/faqs/one'

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

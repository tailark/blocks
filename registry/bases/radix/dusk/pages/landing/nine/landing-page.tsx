import HeroSection from '@/registry/bases/radix/dusk/blocks/hero-section/nine/hero-section'
import FeaturesTwo from '@/registry/bases/radix/dusk/blocks/features/two'
import FeaturesSeven from '@/registry/bases/radix/dusk/blocks/features/seven'
import Content from '@/registry/bases/radix/dusk/blocks/content/one'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/one'
import Testimonials from '@/registry/bases/radix/dusk/blocks/testimonials/one'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesTwo />
            <Pricing />
            <FeaturesSeven />
            <Testimonials />
            <Stats />
            <CallToAction />
            <Footer />
        </>
    )
}

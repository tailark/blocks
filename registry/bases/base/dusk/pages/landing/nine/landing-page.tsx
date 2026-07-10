import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/nine/hero-section'
import FeaturesTwo from '@/registry/bases/base/dusk/blocks/features/two'
import FeaturesSeven from '@/registry/bases/base/dusk/blocks/features/seven'
import Content from '@/registry/bases/base/dusk/blocks/content/one'
import Stats from '@/registry/bases/base/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/one'
import Testimonials from '@/registry/bases/base/dusk/blocks/testimonials/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/base/dusk/blocks/footer/one'

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

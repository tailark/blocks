import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/one/hero-section'
import FeaturesOne from '@/registry/bases/base/dusk/blocks/features/one'
import FeaturesTwo from '@/registry/bases/base/dusk/blocks/features/two'
import Stats from '@/registry/bases/base/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/one'
import Testimonials from '@/registry/bases/base/dusk/blocks/testimonials/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/base/dusk/blocks/footer/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesOne />
            <Stats />
            <FeaturesTwo />
            <Pricing />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}

import HeroSection from '@/registry/bases/base/dusk/pages/landing/five/hero-section'
import FeaturesTwo from '@/registry/bases/base/dusk/blocks/features/two'
import FeaturesThree from '@/registry/bases/base/dusk/blocks/features/three'
import FeaturesFive from '@/registry/bases/base/dusk/blocks/features/five'
import Content from '@/registry/bases/base/dusk/blocks/content/two'
import Stats from '@/registry/bases/base/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/one'
import Testimonials from '@/registry/bases/base/dusk/blocks/testimonials/two'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/base/dusk/blocks/footer/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesTwo />
            <Content />
            <FeaturesThree />
            <Stats />
            <FeaturesFive />
            <Pricing />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}

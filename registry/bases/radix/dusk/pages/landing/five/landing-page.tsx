import HeroSection from '@/registry/bases/radix/dusk/pages/landing/five/hero-section'
import FeaturesTwo from '@/registry/bases/radix/dusk/blocks/features/two'
import FeaturesThree from '@/registry/bases/radix/dusk/blocks/features/three'
import FeaturesFive from '@/registry/bases/radix/dusk/blocks/features/five'
import Content from '@/registry/bases/radix/dusk/blocks/content/two'
import Stats from '@/registry/bases/radix/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/radix/dusk/blocks/pricing/one'
import Testimonials from '@/registry/bases/radix/dusk/blocks/testimonials/two'
import CallToAction from '@/registry/bases/radix/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/radix/dusk/blocks/footer/one'

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

import HeroSection from '@/registry/bases/base/dusk/blocks/hero-section/seven/hero-section'
import FeaturesSix from '@/registry/bases/base/dusk/blocks/features/six'
import FeaturesSeven from '@/registry/bases/base/dusk/blocks/features/seven'
import Content from '@/registry/bases/base/dusk/blocks/content/three'
import Stats from '@/registry/bases/base/dusk/blocks/stats/one'
import Pricing from '@/registry/bases/base/dusk/blocks/pricing/one'
import FAQs from '@/registry/bases/base/dusk/blocks/faqs/one'
import CallToAction from '@/registry/bases/base/dusk/blocks/call-to-action/one'
import Footer from '@/registry/bases/base/dusk/blocks/footer/one'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <Content />
            <FeaturesSix />
            <Stats />
            <FeaturesSeven />
            <Pricing />
            <FAQs />
            <CallToAction />
            <Footer />
        </>
    )
}

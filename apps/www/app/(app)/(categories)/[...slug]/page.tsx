import { redirect, notFound } from 'next/navigation'

const VALID_KITS = new Set(['dusk', 'mist', 'veil', 'quartz'])

export default async function SlugFallbackPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params
    if (!slug || slug[0] === '_next' || slug[0] === '.well-known') {
        notFound()
    }
    if (VALID_KITS.has(slug[0])) {
        notFound()
    }
    if (slug.length === 1) {
        redirect(`/dusk/${slug[0]}`)
    }
    if (slug.length === 2) {
        redirect(`/dusk/${slug[0]}/${slug[1]}`)
    }
    notFound()
}

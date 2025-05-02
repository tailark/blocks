import BlockPreview from '@/components/block-preview'
import { blocks, categories } from '@/data/blocks'
import { notFound } from 'next/navigation'
import { stringToNumber } from '@tailark/core/lib/utils'

interface PageProps {
    params: Promise<{ category: string }>
}

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { category } = await params
    return {
        title: `Shadcn ${category} Blocks | Tailark`,
    }
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params

    const categoryBlocks = blocks
        .filter((b) => b.category === category)
        .sort((a, b) => {
            return stringToNumber(a.id) - stringToNumber(b.id)
        })

    if (categoryBlocks.length === 0) {
        notFound()
    }

    return (
        <>
            <section>
                <h1 className="sr-only text-3xl font-bold sm:text-4xl md:text-nowrap">
                    Shadcn <span className="capitalize">{category}</span> blocks
                </h1>
                <p className="sr-only text-base md:text-lg">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>
                <div className="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"></div>
            </section>

            {categoryBlocks.map((block, index) => (
                <BlockPreview
                    {...block}
                    key={index}
                />
            ))}
        </>
    )
}

'use client'

import { useEffect, useState } from 'react'
import { useDiscover } from '../components/discover-provider'
import { PageCard, PageCardParent } from '@/app/(discover)/page-card'
import type { Page } from '@/data/pages/types'
import { Pagination } from '../components/pagination'
import { Suspense } from 'react'

export default function PagesDiscoveryClient() {
    const { searchQuery, selectedCategories, selectedStyles, setFilterGroups, setPlaceholder, columns, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage } = useDiscover()

    const [allPages, setAllPages] = useState<Page[]>([])

    useEffect(() => {
        setPlaceholder('Search pages...')
    }, [setPlaceholder])

    useEffect(() => {
        const baseUrl = process.env.NODE_ENV === 'production' ? 'https://pro.tailark.com' : 'http://localhost:3000'
        fetch(`${baseUrl}/api/catalog`)
            .then((res) => res.json())
            .then((catalog) => {
                const pages: Page[] = (catalog.pages ?? []).map((p: Page) => ({
                    ...p,
                    imageUrl: p.imageUrl ?? `https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/${p.style}-${p.category}-${p.variant}.png`,
                }))
                setAllPages(pages)
            })
            .catch(() => setAllPages([]))
    }, [])

    useEffect(() => {
        const styles = Array.from(new Set(allPages.map((page) => page.style))).sort()
        const stylesGroup = {
            title: 'Styles',
            key: 'styles',
            items: styles.map((style) => ({
                name: style,
                quantity: allPages.filter((page) => page.style === style).length,
            })),
        }

        const categories = Array.from(new Set(allPages.map((page) => page.category))).sort()
        const categoriesGroup = {
            title: 'Categories',
            key: 'categories',
            items: categories.map((category) => ({
                name: category,
                quantity: allPages.filter((page) => page.category === category).length,
            })),
        }

        setFilterGroups([stylesGroup, categoriesGroup])
    }, [allPages, setFilterGroups])

    const filteredPages = allPages.filter((page) => {
        if (selectedStyles.length > 0 && !selectedStyles.includes(page.style)) {
            return false
        }

        if (selectedCategories.length > 0 && !selectedCategories.includes(page.category)) {
            return false
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            const category = page.category.toLowerCase()
            const variant = page.variant.toLowerCase()
            const style = page.style.toLowerCase()
            return category.includes(query) || variant.includes(query) || style.includes(query) || `${category}-${variant}`.includes(query)
        }

        return true
    })

    const totalPages = Math.ceil(filteredPages.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedPages = filteredPages.slice(startIndex, endIndex)

    return (
        <div className="flex h-[calc(100%-3rem)] min-w-72 flex-col">
            <div className="p-2 lg:p-4">
                <Suspense>
                    <PageCardParent columns={columns}>
                        {paginatedPages.map((page) => (
                            <PageCard
                                key={`${page.style}-${page.category}-${page.variant}`}
                                style={page.style}
                                category={page.category}
                                variant={page.variant}
                                imageUrl={page.imageUrl}
                            />
                        ))}
                    </PageCardParent>
                </Suspense>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                totalItems={filteredPages.length}
            />
        </div>
    )
}

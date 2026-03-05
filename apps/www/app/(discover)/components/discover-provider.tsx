'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'

interface Category {
    name: string
    quantity?: number
}

export interface FilterGroup {
    title: string
    key: string
    items: Category[]
}

interface DiscoverContextType {
    // Search
    searchQuery: string
    setSearchQuery: (query: string) => void
    placeholder: string
    setPlaceholder: (placeholder: string) => void
    // Filters (URL)
    selectedCategories: string[]
    setSelectedCategories: (v: string[]) => void
    selectedStyles: string[]
    setSelectedStyles: (v: string[]) => void
    selectedKits: string[]
    setSelectedKits: (v: string[]) => void
    selectedLicences: string[]
    setSelectedLicences: (v: string[]) => void
    filterGroups: FilterGroup[]
    setFilterGroups: (groups: FilterGroup[]) => void
    // UI
    columns: 2 | 3
    setColumns: (v: 2 | 3) => void
    viewMode: 'categories' | 'content'
    setViewMode: (v: 'categories' | 'content') => void
    isFilterCollapsed: boolean
    setIsFilterCollapsed: (v: boolean) => void
    // Pagination
    currentPage: number
    setCurrentPage: (page: number) => void
    itemsPerPage: number
    // Type
    type: 'blocks' | 'pages'
    setType: (type: 'blocks' | 'pages') => void
    setItemsPerPage: (count: number) => void
}

const DiscoverContext = createContext<DiscoverContextType | undefined>(undefined)

function getLocalStorage<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback
    try {
        const val = localStorage.getItem(key)
        return val !== null ? (JSON.parse(val) as T) : fallback
    } catch {
        return fallback
    }
}

export function DiscoverProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const type: 'blocks' | 'pages' = pathname === '/pages' ? 'pages' : 'blocks'

    // nuqs: filter state in URL search params
    const [searchQuery, setSearchQueryParam] = useQueryState('q', parseAsString.withDefault(''))
    const [selectedCategories, setSelectedCategoriesParam] = useQueryState('categories', parseAsArrayOf(parseAsString).withDefault([]))
    const [selectedKits, setSelectedKitsParam] = useQueryState('kits', parseAsArrayOf(parseAsString).withDefault([]))
    const [selectedLicences, setSelectedLicencesParam] = useQueryState('licences', parseAsArrayOf(parseAsString).withDefault([]))
    const [selectedStyles, setSelectedStylesParam] = useQueryState('styles', parseAsArrayOf(parseAsString).withDefault([]))

    // Persistent UI state (localStorage)
    const [columns, setColumnsState] = useState<2 | 3>(() => getLocalStorage('discover-columns', 3))
    const [viewMode, setViewModeState] = useState<'categories' | 'content'>(() => getLocalStorage('discover-viewMode', 'content'))
    const [isFilterCollapsed, setIsFilterCollapsedState] = useState<boolean>(() => {
        const stored = getLocalStorage<string | null>('discover-filterCollapsed', null)
        if (stored !== null) return stored === 'true'
        return typeof window !== 'undefined' ? !window.matchMedia('(min-width: 1024px)').matches : false
    })

    // Ephemeral state
    const [currentPage, setCurrentPage] = useState(1)
    const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([])
    const [placeholder, setPlaceholder] = useState('Search...')

    const itemsPerPage = 30

    const setColumns = useCallback((v: 2 | 3) => {
        setColumnsState(v)
        localStorage.setItem('discover-columns', JSON.stringify(v))
    }, [])

    const setViewMode = useCallback((v: 'categories' | 'content') => {
        setViewModeState(v)
        localStorage.setItem('discover-viewMode', JSON.stringify(v))
    }, [])

    const setIsFilterCollapsed = useCallback((v: boolean) => {
        setIsFilterCollapsedState(v)
        localStorage.setItem('discover-filterCollapsed', String(v))
    }, [])

    const resetPage = useCallback(() => setCurrentPage(1), [])

    const setSearchQuery = useCallback(
        (q: string) => {
            setSearchQueryParam(q)
            resetPage()
        },
        [setSearchQueryParam, resetPage]
    )
    const setSelectedCategories = useCallback(
        (v: string[]) => {
            setSelectedCategoriesParam(v)
            resetPage()
        },
        [setSelectedCategoriesParam, resetPage]
    )
    const setSelectedStyles = useCallback(
        (v: string[]) => {
            setSelectedStylesParam(v)
            resetPage()
        },
        [setSelectedStylesParam, resetPage]
    )
    const setSelectedKits = useCallback(
        (v: string[]) => {
            setSelectedKitsParam(v)
            resetPage()
        },
        [setSelectedKitsParam, resetPage]
    )
    const setSelectedLicences = useCallback(
        (v: string[]) => {
            setSelectedLicencesParam(v)
            resetPage()
        },
        [setSelectedLicencesParam, resetPage]
    )

    const value: DiscoverContextType = {
        searchQuery,
        setSearchQuery,
        placeholder,
        setPlaceholder,
        selectedCategories,
        setSelectedCategories,
        selectedStyles,
        setSelectedStyles,
        selectedKits,
        setSelectedKits,
        selectedLicences,
        setSelectedLicences,
        filterGroups,
        setFilterGroups,
        columns,
        setColumns,
        viewMode,
        setViewMode,
        isFilterCollapsed,
        setIsFilterCollapsed,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        type,
        setType: () => {},
        setItemsPerPage: () => {},
    }

    return <DiscoverContext.Provider value={value}>{children}</DiscoverContext.Provider>
}

export function useDiscover() {
    const context = useContext(DiscoverContext)
    if (!context) throw new Error('useDiscover must be used within a DiscoverProvider')
    return context
}

// Named sub-hooks for backward compatibility
export const useDiscoverSearch = useDiscover
export const useDiscoverFilter = useDiscover
export const useDiscoverUI = useDiscover
export const useDiscoverPagination = useDiscover
export const useDiscoverType = useDiscover

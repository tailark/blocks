'use client'

import { FilterPanel } from './filter-panel'
import { SearchBar } from './search-bar'
import { useDiscover } from './discover-provider'

interface DiscoverContentProps {
    children: React.ReactNode
}

export function DiscoverContent({ children }: DiscoverContentProps) {
    const { searchQuery, setSearchQuery, selectedCategories, setSelectedCategories, selectedStyles, setSelectedStyles, selectedKits, setSelectedKits, selectedLicences, setSelectedLicences, filterGroups, placeholder, columns, setColumns, isFilterCollapsed, setIsFilterCollapsed } = useDiscover()

    const selectedFilters = {
        categories: selectedCategories,
        styles: selectedStyles,
        kits: selectedKits,
        licences: selectedLicences,
    }

    const handleFilterChange = (groupKey: string, values: string[]) => {
        if (groupKey === 'categories') {
            setSelectedCategories(values)
        } else if (groupKey === 'styles') {
            setSelectedStyles(values)
        } else if (groupKey === 'kits') {
            setSelectedKits(values)
            // Link quartz kit with pro licence
            if (values.includes('quartz-kit') && !selectedLicences.includes('pro')) {
                setSelectedLicences([...selectedLicences, 'pro'])
            } else if (!values.includes('quartz-kit') && selectedLicences.includes('pro')) {
                setSelectedLicences(selectedLicences.filter((l) => l !== 'pro'))
            }
        } else if (groupKey === 'licences') {
            setSelectedLicences(values)
            // Link pro licence with quartz kit
            if (values.includes('pro') && !selectedKits.includes('quartz-kit')) {
                setSelectedKits([...selectedKits, 'quartz-kit'])
            } else if (!values.includes('pro') && selectedKits.includes('quartz-kit')) {
                setSelectedKits(selectedKits.filter((k) => k !== 'quartz-kit'))
            }
        }
    }

    const handleToggleCollapse = () => {
        const newState = !isFilterCollapsed
        setIsFilterCollapsed(newState)
        if (!newState) {
            localStorage.setItem('discover-filterManuallyOpened', 'true')
        } else {
            localStorage.removeItem('discover-filterManuallyOpened')
        }
    }

    return (
        <div className="bg-muted/50 dark:bg-background grid min-h-[calc(100vh-3.5rem)] grid-cols-[auto_1fr] border-y">
            <FilterPanel
                filterGroups={filterGroups}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                isCollapsed={isFilterCollapsed}
                onToggleCollapse={handleToggleCollapse}
            />
            <div className="overflow-hidden">
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder={placeholder}
                    columns={columns}
                    onColumnsChange={setColumns}
                    isFilterCollapsed={isFilterCollapsed}
                    onOpenFilter={() => {
                        setIsFilterCollapsed(false)
                        localStorage.setItem('discover-filterManuallyOpened', 'true')
                    }}
                />
                {children}
            </div>
        </div>
    )
}

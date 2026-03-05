'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    itemsPerPage: number
    onItemsPerPageChange?: (items: number) => void
    totalItems: number
}

const itemsPerPageOptions = [12, 24, 30, 48, 60]

export function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange, totalItems }: PaginationProps) {
    const getPageNumbers = () => {
        const pages: (number | string)[] = []
        const showEllipsis = totalPages > 7

        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)

            if (currentPage > 3) {
                pages.push('...')
            }

            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            if (currentPage < totalPages - 2) {
                pages.push('...')
            }

            if (totalPages > 1) {
                pages.push(totalPages)
            }
        }

        return pages
    }

    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    return (
        <div className="mt-auto border-t px-6 py-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Show</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
                        className="bg-card ring-foreground/6.5 rounded-lg border border-transparent px-2 py-1 text-sm shadow outline-none ring-1 transition-colors">
                        {itemsPerPageOptions.map((option) => (
                            <option
                                key={option}
                                value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <span className="text-muted-foreground">
                        per page · {startItem}-{endItem} of {totalItems}
                    </span>
                </div>

                {totalPages > 1 && (
                    <div className="flex items-center gap-0.5">
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="hover:bg-muted active:scale-98 flex h-7 w-9 items-center justify-center rounded-md transition-all disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Previous page">
                            <ChevronLeft className="size-4" />
                        </button>

                        {getPageNumbers().map((page, index) => {
                            if (page === '...') {
                                return (
                                    <span
                                        key={`ellipsis-${index}`}
                                        className="text-muted-foreground flex size-8 items-center justify-center text-sm">
                                        ...
                                    </span>
                                )
                            }

                            return (
                                <button
                                    key={page}
                                    onClick={() => onPageChange(page as number)}
                                    className={cn('active:scale-98 flex h-7 w-9 items-center justify-center rounded-md text-sm transition-all', currentPage === page ? 'bg-card ring-foreground/6.5 text-foreground font-medium shadow-md shadow-black/5 ring-1' : 'hover:bg-muted text-foreground')}
                                    aria-label={`Page ${page}`}
                                    aria-current={currentPage === page ? 'page' : undefined}>
                                    {page}
                                </button>
                            )
                        })}

                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="hover:bg-muted active:scale-98 flex h-7 w-9 items-center justify-center rounded-md transition-all disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Next page">
                            <ChevronRight className="size-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

import { ScrollArea, ScrollBar } from '@tailark/core/ui/scroll-area'
import { CategoryScrollManager } from './category-scroll-manager'
import { ActiveCategoryLinks } from './active-category-links'

const BlocksNav = ({ categories }: { categories: string[] }) => {
    return (
        <div className="dark:border-border/50 relative z-50 border-b">
            <div className="mx-auto max-w-7xl overflow-hidden lg:overflow-visible">
                <nav className="flex items-center lg:-mx-3">
                    <ScrollArea
                        className="relative -mb-px w-full"
                        type="scroll">
                        <div
                            role="presentation"
                            className="bg-linear-to-r from-background pointer-events-none absolute inset-y-px -left-2.5 z-10 w-12"></div>
                        <div
                            role="presentation"
                            className="bg-linear-to-l from-background pointer-events-none absolute inset-y-px -right-2.5 z-10 w-12"></div>

                        <CategoryScrollManager>
                            <ActiveCategoryLinks categories={categories} />
                        </CategoryScrollManager>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </nav>
            </div>
        </div>
    )
}

export default BlocksNav

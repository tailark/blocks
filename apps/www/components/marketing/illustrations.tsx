'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@tailark/core/ui/button'
import dynamic from 'next/dynamic'

const DocumentDocx = dynamic(() => import('./illustrations/document-docx'), { ssr: false })
const DocumentXLX = dynamic(() => import('./illustrations/document-xlx'), { ssr: false })
const FaceScan2 = dynamic(() => import('./illustrations/face-scan-2'), { ssr: false })
const Collaboration = dynamic(() => import('./illustrations/collaboration'), { ssr: false })
const Meeting4 = dynamic(() => import('./illustrations/meeting-4'), { ssr: false })
const Flow12 = dynamic(() => import('./illustrations/flow-12'), { ssr: false })
const AiAutocomplete = dynamic(() => import('./illustrations/ai-autocomplete'), { ssr: false })
const Workflow = dynamic(() => import('./illustrations/workflow'), { ssr: false })
const Flow2 = dynamic(() => import('./illustrations/flow-2'), { ssr: false })
const CollaborationComment = dynamic(() => import('./illustrations/collaboration-comment'), { ssr: false })
const Kanban = dynamic(() => import('./illustrations/kanban'), { ssr: false })

export const IllustrationsSection = () => {
    return (
        <section
            id="illustrations"
            data-theme="global"
            className="overflow-hidden pt-32 max-md:pt-16">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-foreground/50 v mb-12 block font-mono text-sm">Illustrations</h2>

                <div className="mx-auto max-w-xl space-y-6">
                    <p className="text-foreground/55 text-balance text-3xl font-medium tracking-tight">
                        <span className="text-foreground">Crafted visuals.</span> For modern feature sections and bento grids.
                    </p>

                    <div>
                        <Button
                            asChild
                            variant="ghost"
                            size="sm">
                            <Link
                                href="https://pro.tailark.com/illustrations"
                                className="text-sm!"
                                target="_blank">
                                Explore illustrations
                                <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-w-380 relative mx-auto mt-6 md:mt-12">
                <div className="bg-muted/50 border-y p-4 2xl:rounded-3xl 2xl:border-x">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="grid grid-cols-2 gap-4">
                            <IllustrationCard>
                                <DocumentDocx />
                            </IllustrationCard>
                            <IllustrationCard>
                                <DocumentXLX />
                            </IllustrationCard>
                        </div>
                        <div className="grid gap-4 sm:col-span-2 sm:grid-cols-5">
                            <IllustrationCard className="sm:col-span-2">
                                <FaceScan2 />
                            </IllustrationCard>
                            <IllustrationCard className="sm:col-span-3">
                                <Collaboration />
                            </IllustrationCard>
                        </div>
                        <IllustrationCard className="max-lg:row-start-1">
                            <AiAutocomplete />
                        </IllustrationCard>
                        <IllustrationCard className="*:scale-90 max-sm:hidden sm:col-span-2">
                            <Flow12 />
                        </IllustrationCard>
                        <IllustrationCard>
                            <Meeting4 />
                        </IllustrationCard>
                        <IllustrationCard className="group">
                            <Flow2 />
                        </IllustrationCard>
                        <IllustrationCard className="sm:max-lg:hidden">
                            <Workflow />
                        </IllustrationCard>
                        <div className="-mx-2 -mt-2 grid gap-4 px-2 pt-2 sm:col-span-full sm:grid-cols-2">
                            <IllustrationCard>
                                <CollaborationComment />
                            </IllustrationCard>
                            <IllustrationCard className="py-12 sm:max-lg:*:scale-90">
                                <Kanban />
                            </IllustrationCard>
                        </div>
                    </div>
                </div>
                <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-sm! z-10 mx-auto mt-6 flex w-fit">
                    <Link
                        href="https://pro.tailark.com/illustrations"
                        target="_blank">
                        See more illustrations
                        <span className="border-t-foreground/50 ml-0.5 block size-0 -rotate-90 border-x-4 border-t-4 border-x-transparent" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

const IllustrationCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-card dark:bg-background ring-border shadow-black/4 relative flex items-center justify-center overflow-hidden rounded-xl p-12 shadow ring', className)}>{children}</div>
}

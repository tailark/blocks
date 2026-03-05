import { Linear } from '@tailark/core/components/ui/svgs/linear'
import { Vercel } from '@tailark/core/components/ui/svgs/vercel'
import { CheckCircle2, GitBranch } from 'lucide-react'

export const WorkflowIllustration = () => {
    return (
        <div
            aria-hidden
            className="min-w-2xs">
            <div>
                <div className="bg-illustration ring-border-illustration shadow-black/6.5 flex items-center gap-2 rounded-xl p-3 shadow-md ring-1">
                    <CheckCircle2 className="size-4 fill-emerald-500/15 text-emerald-500" />
                    <span className="text-foreground text-sm font-medium">Workflow completed</span>
                </div>
                <div className="relative space-y-4 pl-6 pt-6">
                    <div className="border-foreground/15 absolute bottom-8 left-6 top-0 border-l border-dashed"></div>
                    <div className="relative pl-6">
                        <div className="border-foreground/15 absolute bottom-1/2 left-0 top-0 w-6 rounded-bl-full border-b border-l border-dashed"></div>
                        <div className="bg-card ring-border-illustration flex items-center gap-2 rounded-xl p-3 shadow ring-1">
                            <Linear className="size-3.5" />
                            <span className="text-muted-foreground text-xs font-medium">
                                Issue created <span className="text-foreground/50 pl-0.5 text-xs">12s ago</span>
                            </span>
                        </div>
                    </div>

                    <div className="relative pl-6">
                        <div className="border-foreground/15 absolute bottom-1/2 left-0 top-0 w-6 rounded-bl-full border-b border-l border-dashed"></div>
                        <div className="bg-card ring-border-illustration flex items-center gap-2 rounded-xl p-3 shadow ring-1">
                            <GitBranch className="size-3.5" />
                            <span className="text-muted-foreground text-xs font-medium">
                                Branch created <span className="text-foreground/50 pl-0.5 text-xs">3s ago</span>
                            </span>
                        </div>
                    </div>

                    <div className="relative pl-6">
                        <div className="border-foreground/15 absolute bottom-1/2 left-0 top-0 w-6 rounded-bl-full border-b border-l border-dashed"></div>
                        <div className="bg-card ring-border-illustration flex items-center gap-2 rounded-xl p-3 shadow ring-1">
                            <Vercel className="fill-foreground size-3.5" />
                            <span className="text-muted-foreground text-xs font-medium">
                                Preview deployed <span className="text-foreground/50 pl-0.5 text-xs">now</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkflowIllustration

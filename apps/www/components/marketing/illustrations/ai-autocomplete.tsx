import { CornerDownLeft, Sparkles } from 'lucide-react'

export const AiAutocompleteIllustration = () => {
    return (
        <div
            aria-hidden
            className="min-w-2xs">
            <div className="ring-border-illustration relative rounded-lg p-3 ring-1">
                <div className="relative flex w-fit items-center gap-1">
                    <div className="bg-linear-to-r absolute inset-0 h-5 via-indigo-500/15 to-emerald-500/15"></div>

                    <span className="text-xs">How do I implement</span>
                    <div className="text-primary h-5 w-px animate-pulse bg-current"></div>
                </div>
            </div>

            <div className="bg-illustration ring-border-illustration shadow-black/6.5 mt-2 overflow-hidden rounded-xl shadow-lg ring-1">
                <div className="bg-primary/10 border-primary/20 flex items-center gap-2 border-b px-3 py-2">
                    <Sparkles className="text-primary fill-primary *:nth-2:text-purple-400 *:nth-3:text-purple-400 *:not-first:text-foreground/25 size-3.5" />
                    <div className="text-xs font-medium">AI Suggestions</div>
                </div>

                <div className="divide-border divide-y">
                    <div className="bg-primary/5 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
                        <div className="flex-1 text-xs">...authentication with OAuth 2.0?</div>
                        <div className="bg-background ring-border-illustration text-muted-foreground flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] ring-1">
                            <CornerDownLeft className="size-2.5" />
                            Tab
                        </div>
                    </div>

                    <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
                        <div className="text-muted-foreground flex-1 text-xs">...a dark mode toggle in React?</div>
                    </div>

                    <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
                        <div className="text-muted-foreground flex-1 text-xs">...caching for API responses?</div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
                <div className="text-muted-foreground">3 suggestions</div>
                <div className="text-muted-foreground flex items-center gap-1">
                    <span className="bg-background ring-border-illustration rounded px-1 ring-1">↑</span>
                    <span className="bg-background ring-border-illustration rounded px-1 ring-1">↓</span>
                    to navigate
                </div>
            </div>
        </div>
    )
}

export default AiAutocompleteIllustration

import { PlusIcon } from 'lucide-react'
import Image from 'next/image'

const SHADCN_AVATAR = 'https://avatars.githubusercontent.com/u/124599?v=4'
const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'

const KanbanIllustration = () => {
    return (
        <div
            className="min-w-md mask-b-from-65%"
            aria-hidden>
            <div className="grid grid-cols-2 gap-2 *:rounded-xl *:border *:p-1">
                <div>
                    <div className="text-foreground/65 px-2 pb-2 pt-1 text-xs font-semibold">In Progress</div>
                    <div className="space-y-3">
                        <div className="ring-border-illustration relative h-32 rounded-xl ring-1">
                            <div
                                className="absolute inset-2 z-0 opacity-25"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-zinc-500) 1px, transparent 0)',
                                    backgroundSize: '12px 12px',
                                }}
                            />
                            <div className="bg-illustration z-1 rotate-4 translate-4 ring-border-illustration absolute inset-0 flex h-32 flex-col justify-between rounded-xl p-4 shadow-2xl shadow-indigo-900/30 ring-1 dark:shadow-black/50">
                                <div className="text-sm font-semibold">Implement user authentication flow</div>

                                <div className="flex items-center gap-1.5">
                                    <div className="before:border-foreground/20 relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                        <Image
                                            src={SHADCN_AVATAR}
                                            alt="Shadcn"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <span className="text-xs font-medium">Shadcn</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card ring-border-illustration flex h-32 flex-col justify-between rounded-xl p-4 ring-1">
                            <div className="text-sm font-semibold">Optimize database queries</div>

                            <div className="flex items-center gap-1.5">
                                <div className="before:border-foreground/20 relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src={MESCHAC_AVATAR}
                                        alt="Méschac Irung"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <span className="text-xs font-medium">Méschac Irung</span>
                            </div>
                        </div>
                        <div className="bg-foreground/5 flex cursor-pointer gap-2 rounded-xl p-2">
                            <PlusIcon className="size-4 opacity-50" />
                            <span className="text-xs font-medium">Add new task</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-foreground/65 px-2 pb-2 pt-1 text-xs font-semibold">Ready for Review</div>
                    <div className="space-y-3">
                        <div className="relative flex h-32 items-center justify-center rounded-xl ring-1 ring-emerald-500/15">
                            <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Drop here</div>

                            <div
                                className="absolute inset-2 z-0 opacity-15"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-emerald-500) 1px, transparent 0)',
                                    backgroundSize: '12px 12px',
                                }}
                            />
                        </div>
                    </div>
                    <div className="bg-foreground/5 mt-auto flex cursor-pointer gap-2 rounded-xl p-2">
                        <PlusIcon className="size-4 opacity-50" />
                        <span className="text-xs font-medium">Add new task</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanbanIllustration

import Image from 'next/image'

const SHADCN_AVATAR = 'https://avatars.githubusercontent.com/u/124599?v=4'
const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'

export const CollaborationIllustration = () => {
    return (
        <div
            aria-hidden
            className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top max-w-sm">
            <div className="mb-4 text-xl font-medium">Project Board</div>

            <div className="text-muted-foreground space-y-3 text-base/6">
                <div>
                    Colla<span className="before:mask-l-from-65% bg-linear-to-r relative select-none to-indigo-500/35 text-indigo-600 before:absolute before:inset-0 before:border before:border-indigo-500/45 dark:text-indigo-300">borate on project</span>{' '}
                    <span className="relative inline-block">
                        <div className="before:h-9.5 bg-primary before:bg-primary shadow-black/6.5 absolute top-0.5 flex -translate-x-0.5 -translate-y-full select-none items-center gap-1.5 rounded-r-md rounded-tl-md px-1.5 py-1 text-white shadow-md before:absolute before:left-0 before:top-2 before:w-0.5 before:rounded">
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
                        planning
                    </span>{' '}
                    requirements.
                </div>
                <div>
                    Share feedback, review designs, and align on goals to deliver{' '}
                    <span className="relative inline-block">
                        <div className="before:h-9.5 absolute top-0.5 flex -translate-x-0.5 -translate-y-full select-none items-center gap-1.5 rounded-r-md rounded-tl-md bg-emerald-600 px-1.5 py-1 text-white shadow-md before:absolute before:left-0 before:top-2 before:w-0.5 before:rounded before:bg-emerald-600">
                            <div className="before:border-foreground/20 relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                <Image
                                    src={MESCHAC_AVATAR}
                                    alt="Méschac Irung"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <span className="truncate text-xs font-medium">Méschac I.</span>
                        </div>
                        high-quality
                    </span>{' '}
                    results seamlessly across your team.
                </div>
            </div>
        </div>
    )
}

export default CollaborationIllustration

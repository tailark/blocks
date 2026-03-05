'use client'

import { cn } from '@tailark/core/lib/utils'
import { ArrowUp, SmilePlus, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const SHADCN_AVATAR = 'https://avatars.githubusercontent.com/u/124599?v=4'

export const CollbarationCommentIllustration = () => {
    const [reactions, setReactions] = useState([
        { emoji: '🔥', count: 2, active: false },
        { emoji: '🚀', count: 12, active: false },
    ])

    const [showComment, setShowComment] = useState(true)

    const toggleReaction = (index: number) => {
        setReactions((prev) =>
            prev.map((reaction, i) =>
                i === index
                    ? {
                          ...reaction,
                          count: reaction.active ? reaction.count - 1 : reaction.count + 1,
                          active: !reaction.active,
                      }
                    : reaction
            )
        )
    }

    const addReaction = () => {
        const emojis = ['👍', '❤️', '😂', '😮', '😢', '👏']
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
        const existingIndex = reactions.findIndex((r) => r.emoji === randomEmoji)

        if (existingIndex >= 0) {
            toggleReaction(existingIndex)
        } else {
            setReactions((prev) => [...prev, { emoji: randomEmoji, count: 1, active: true }])
        }
    }

    return (
        <div aria-hidden>
            <div className="peer py-12">
                <div className="min-w-sm mask-radial-at-top mask-radial-from-65% mask-radial-[100%_100%] space-y-2">
                    <div className="bg-foreground/4 border-border/50 mb-4 size-20 rounded-2xl border"></div>

                    <div className="flex gap-2">
                        <div className="bg-foreground/6.5 h-1 w-20 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-11/12 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-4/5 rounded" />
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-foreground/6.5 h-1 w-20 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-20 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-16 rounded" />
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-foreground/6.5 h-1 w-12 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-20 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-16 rounded" />
                    </div>
                    <div className="space-y-2">
                        <div className="bg-foreground/6.5 h-1 w-full rounded" />
                        <div className="bg-foreground/6.5 h-1 w-2/12 rounded" />
                        <div className="bg-foreground/6.5 h-1 w-1/12 rounded" />
                    </div>
                </div>
            </div>
            <div className="min-w-sm group absolute inset-0 m-auto flex size-fit justify-end gap-2">
                <div
                    onClick={() => setShowComment(!showComment)}
                    className="bg-primary shadow-black/6.5 mt-1.5 h-fit shrink-0 cursor-pointer rounded-r-full rounded-t-full p-1.5 shadow-md">
                    <div className="before:border-foreground/20 relative size-6 overflow-hidden rounded-full border shadow-md before:absolute before:inset-0 before:rounded-full before:border">
                        <Image
                            src={SHADCN_AVATAR}
                            alt="shadcn"
                            width={56}
                            height={56}
                        />
                    </div>
                </div>

                <div
                    data-shown={showComment}
                    className="bg-illustration group-peer-active:scale-99 not-data-[shown=true]:scale-99 not-data-[shown=true]:opacity-0 max-w-2xs shadow-black/6.5 ring-border-illustration relative origin-top-left rounded-2xl shadow-lg ring-1 duration-200">
                    <div
                        onClick={() => setShowComment(false)}
                        className="hover:bg-foreground/5 absolute right-1 top-1 flex size-7 rounded-full">
                        <X className="m-auto size-3.5" />
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-2.5 p-5">
                        <div className="before:border-foreground/20 relative size-7 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border">
                            <Image
                                src={SHADCN_AVATAR}
                                alt="shadcn"
                                width={56}
                                height={56}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex items-end gap-1">
                                <div className="text-sm font-medium [text-trim:both]">Shadcn</div>
                                <div className="text-foreground/50 border border-transparent text-xs [text-trim:both]">6:32 pm</div>
                            </div>
                            <div>
                                <div className="text-foreground/65 text-sm/6">Hey team, I've been thinking about the new dashboard redesign.</div>
                                <div className="text-muted-foreground mt-3 flex flex-wrap gap-2 *:cursor-pointer">
                                    {reactions
                                        .filter((reaction) => reaction.count > 0)
                                        .map((reaction, index) => (
                                            <div
                                                key={index}
                                                onClick={() => toggleReaction(reactions.findIndex((r) => r.emoji === reaction.emoji))}
                                                className={cn('flex h-6 select-none items-center gap-1 rounded-full px-1.5 transition-colors', reaction.active ? 'bg-primary/20 ring-primary/50 ring-1' : 'bg-foreground/5 hover:bg-foreground/6.5')}>
                                                <span className="text-sm">{reaction.emoji}</span>
                                                <span className="text-xs font-medium">{reaction.count}</span>
                                            </div>
                                        ))}
                                    <div
                                        onClick={addReaction}
                                        className="bg-foreground/5 hover:bg-foreground/6.5 flex h-6 items-center gap-1 rounded-full px-1.5">
                                        <SmilePlus className="size-3.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t py-3 pl-5 pr-3">
                        <span className="text-foreground/40 text-sm">Reply</span>
                        <div className="bg-foreground/10 flex size-5 rounded-full border">
                            <ArrowUp
                                className="m-auto size-3.5 opacity-50"
                                strokeWidth={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollbarationCommentIllustration

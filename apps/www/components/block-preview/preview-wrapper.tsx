import React from 'react'

export const BlockPreviewWrapper = ({ children, id, height }: { children: React.ReactNode; id: string; height: number }) => {
    return (
        <section
            id={id}
            className="border-foreground/[0.075] lg:h-(--block-height) h-116 group mb-16 scroll-my-6 border-b"
            style={{ '--block-height': `${height + 48}px` } as React.CSSProperties}>
            {children}
        </section>
    )
}

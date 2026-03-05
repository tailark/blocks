import React from 'react'

export const BlockPreviewWrapper = ({ children, id, height }: { children: React.ReactNode; id: string; height: number | undefined }) => {
    return (
        <section
            id={id}
            className="scroll-my-6 pb-16">
            <div
                className="h-(--block-height) group [--block-height:36rem] lg:[--block-height:var(--block-static-height)]"
                style={height !== undefined ? ({ '--block-static-height': `${height + 48}px` } as React.CSSProperties) : undefined}>
                {children}
            </div>
        </section>
    )
}

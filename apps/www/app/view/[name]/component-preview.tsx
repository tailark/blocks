import { DevToolbar } from "@/components/toolbar"
import { type RegistryKit } from "@/lib/registry"

export function ComponentPreview({
    children,
    theme,
}: {
    children: React.ReactNode
    theme: RegistryKit
}) {
    return (
        <>
            {process.env.NODE_ENV === "development" && <DevToolbar />}

            <div
                data-theme={theme}
                className="scheme-light selection:bg-foreground/10 selection:text-primary dark:selection:bg-foreground/10 bg-background dark:scheme-dark">
                {children}
            </div>
        </>
    )
}

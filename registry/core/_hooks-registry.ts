import { type Registry } from "shadcn/schema"

export const hooks: Registry["items"] = [
    {
        name: "core-use-media",
        type: "registry:hook",
        title: "Use Media",
        description: "Tailark core use media hook",
        files: [
            {
                path: "core/hooks/use-media.ts",
                type: "registry:hook",
            },
        ],
    },
]

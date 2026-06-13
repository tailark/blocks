import { readFile } from "node:fs/promises"
import path from "node:path"
import { type Registry, type RegistryItem } from "shadcn/schema"
import { registry } from "@/registry/registry"

const APP_ROOT = process.cwd()
const REGISTRY_BASE = path.join(APP_ROOT, "registry/bases/radix")
const REGISTRY_ROOT = path.join(APP_ROOT, "registry")
const REGISTRY_IMPORT_PREFIX = "@/registry/bases/radix/veil/"
const REGISTRY_MIST_BLOCK_IMPORT_PREFIX = "@/registry/bases/radix/mist/blocks/"
const REGISTRY_MIST_UI_IMPORT_PREFIX = "@/registry/bases/radix/mist/ui/"
const REGISTRY_DUSK_BLOCK_IMPORT_PREFIX = "@/registry/bases/radix/dusk/blocks/"
const REGISTRY_DUSK_UI_IMPORT_PREFIX = "@/registry/bases/radix/dusk/ui/"
const REGISTRY_CORE_IMPORT_PREFIX = "@/registry/core/"

const packageNamespaces = [
    "@tailark/core",
    "@tailark/mist",
    "@tailark/dusk",
    "@tailark/veil",
    "@mist",
    "@veil",
]

const segmentToLocalAlias: Record<string, string> = {
    "components/ui": "@/components/ui",
    components: "@/components",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks",
    styles: "@/styles",
    data: "@/data",
    public: "@/public",
    "motion-primitives": "@/components/motion-primitives",
    "magic-ui": "@/components/magic-ui",
    magicui: "@/components/magic-ui",
}

const exactSpecifierMap = new Map<string, string>()
const prefixSpecifierMap = new Map<string, string>()

for (const namespace of packageNamespaces) {
    for (const [segment, localAlias] of Object.entries(segmentToLocalAlias)) {
        exactSpecifierMap.set(`${namespace}/${segment}`, localAlias)
        prefixSpecifierMap.set(`${namespace}/${segment}/`, `${localAlias}/`)
    }
}

function rewritePackageSpecifier(specifier: string): string {
    if (!specifier.startsWith("@") || specifier.startsWith("@/")) {
        return specifier
    }

    for (const [sourcePrefix, targetPrefix] of prefixSpecifierMap) {
        if (specifier.startsWith(sourcePrefix)) {
            return `${targetPrefix}${specifier.slice(sourcePrefix.length)}`
        }
    }

    return exactSpecifierMap.get(specifier) ?? specifier
}

function toRelativeImport(from: string, to: string): string {
    const fromDir = path.dirname(from)
    let relativePath = path.relative(fromDir, to).replace(/\.(tsx?|jsx?)$/, "")

    if (!relativePath.startsWith(".")) {
        relativePath = `./${relativePath}`
    }

    return relativePath.split(path.sep).join("/")
}

const numberWords: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
}

function blockSpecifierToComponentAlias(suffix: string): string {
    const parts = suffix.split("/")
    const [category, variant, component] = parts
    const variantNumber = numberWords[variant] ?? variant

    if (parts.length === 2) {
        return `@/components/${category}-${variantNumber}`
    }

    return `@/components/${category}-${variantNumber}-${component}`
}

function uiSpecifierToComponentAlias(suffix: string): string {
    if (suffix === "logo") {
        return "@/components/logo"
    }

    return `@/components/ui/${suffix}`
}

function rewriteSpecifier(
    specifier: string,
    currentFilePath: string,
    itemFilePaths: string[]
): string {
    if (specifier.startsWith("@tailark/")) {
        return rewritePackageSpecifier(specifier)
    }

    if (specifier.startsWith(REGISTRY_MIST_UI_IMPORT_PREFIX) || specifier.startsWith(REGISTRY_DUSK_UI_IMPORT_PREFIX)) {
        const suffix = specifier.startsWith(REGISTRY_MIST_UI_IMPORT_PREFIX)
            ? specifier.slice(REGISTRY_MIST_UI_IMPORT_PREFIX.length)
            : specifier.slice(REGISTRY_DUSK_UI_IMPORT_PREFIX.length)

        return uiSpecifierToComponentAlias(suffix)
    }

    if (specifier.startsWith(REGISTRY_MIST_BLOCK_IMPORT_PREFIX) || specifier.startsWith(REGISTRY_DUSK_BLOCK_IMPORT_PREFIX)) {
        const suffix = specifier.startsWith(REGISTRY_MIST_BLOCK_IMPORT_PREFIX)
            ? specifier.slice(REGISTRY_MIST_BLOCK_IMPORT_PREFIX.length)
            : specifier.slice(REGISTRY_DUSK_BLOCK_IMPORT_PREFIX.length)

        return blockSpecifierToComponentAlias(suffix)
    }

    if (!specifier.startsWith(REGISTRY_IMPORT_PREFIX)) {
        if (!specifier.startsWith(REGISTRY_CORE_IMPORT_PREFIX)) {
            return specifier
        }

        const suffix = specifier.slice(REGISTRY_CORE_IMPORT_PREFIX.length)

        if (suffix === "lib/utils") {
            return "@/lib/utils"
        }

        if (suffix.startsWith("hooks/")) {
            return `@/hooks/${suffix.slice("hooks/".length)}`
        }

        if (suffix.startsWith("ui/svgs/")) {
            return `@/components/ui/svgs/${suffix.slice("ui/svgs/".length)}`
        }

        if (suffix.startsWith("ui/motion-primitives/")) {
            return `@/components/motion-primitives/${suffix.slice("ui/motion-primitives/".length)}`
        }

        if (suffix.startsWith("ui/magicui/")) {
            return `@/components/magic-ui/${suffix.slice("ui/magicui/".length)}`
        }

        return specifier
    }

    const suffix = specifier.slice(REGISTRY_IMPORT_PREFIX.length)

    if (suffix === "ui/logo") {
        return uiSpecifierToComponentAlias("logo")
    }

    if (suffix.startsWith("ui/")) {
        return uiSpecifierToComponentAlias(suffix.slice(3))
    }

    const targetBase = `veil/${suffix}`

    for (const filePath of itemFilePaths) {
        const filePathNoExt = filePath.replace(/\.(tsx?|jsx?)$/, "")

        if (filePathNoExt === targetBase && filePath !== currentFilePath) {
            return toRelativeImport(currentFilePath, filePath)
        }
    }

    return specifier
}

function rewriteImportSpecifiers(
    code: string,
    currentFilePath: string,
    itemFilePaths: string[]
): string {
    const patterns = [
        /(from\s+['"])([^'"]+)(['"])/g,
        /(import\s*\(\s*['"])([^'"]+)(['"]\s*\))/g,
        /(require\(\s*['"])([^'"]+)(['"]\s*\))/g,
    ]

    let output = code

    for (const pattern of patterns) {
        output = output.replace(pattern, (match, prefix, specifier, suffix) => {
            const rewritten = rewriteSpecifier(specifier, currentFilePath, itemFilePaths)
            return rewritten === specifier ? match : `${prefix}${rewritten}${suffix}`
        })
    }

    return output
}

async function resolveRegistryFilePath(filePath: string): Promise<string> {
    const candidates = [
        filePath.startsWith("../../")
            ? path.resolve(APP_ROOT, filePath)
            : filePath.startsWith("core/")
              ? path.join(REGISTRY_ROOT, filePath)
            : path.join(REGISTRY_BASE, filePath),
    ]

    if (filePath === "veil/logo.tsx") {
        candidates.push(path.join(REGISTRY_BASE, "veil/ui/logo.tsx"))
    }

    for (const candidate of candidates) {
        try {
            await readFile(candidate, "utf8")
            return candidate
        } catch {
            continue
        }
    }

    throw new Error(`Registry file not found: ${filePath}`)
}

function normalizeTarget(file: NonNullable<RegistryItem["files"]>[number]): string {
    if ("target" in file && file.target) {
        return file.target.replace(/^@/, "")
    }

    const basename = path.basename(file.path)

    if (file.type === "registry:ui") {
        if (file.path.includes("logo")) {
            return "components/logo.tsx"
        }

        return `components/ui/${basename}`
    }

    if (file.type === "registry:hook") {
        return `hooks/${basename}`
    }

    return `components/${basename}`
}

function findRegistryItem(name: string): Registry["items"][number] | undefined {
    return registry.items?.find((item) => item.name === name)
}

export function isRegistryIndexRequest(name: string): boolean {
    return name === "registry.json" || name === "registry"
}

export function normalizeRegistryItemName(name: string): string {
    return name.endsWith(".json") ? name.slice(0, -".json".length) : name
}

export async function getRegistryItem(name: string): Promise<RegistryItem | null> {
    const item = findRegistryItem(name)

    if (!item || !item.files?.length) {
        return null
    }

    const itemFilePaths = item.files.map((file) => file.path)
    const files = await Promise.all(
        item.files.map(async (file) => {
            const absolutePath = await resolveRegistryFilePath(file.path)
            const content = await readFile(absolutePath, "utf8")
            const rewrittenContent = rewriteImportSpecifiers(
                content,
                file.path,
                itemFilePaths
            )

            return {
                ...file,
                content: rewrittenContent,
                target: normalizeTarget(file),
            }
        })
    )

    return {
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        name: item.name,
        type: item.type,
        title: item.title,
        description: item.description,
        dependencies: item.dependencies,
        devDependencies: item.devDependencies,
        registryDependencies: item.registryDependencies,
        files,
    } as RegistryItem
}

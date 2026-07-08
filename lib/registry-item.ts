import { readFile } from "node:fs/promises"
import path from "node:path"
import { type Registry, type RegistryItem } from "shadcn/schema"
import { registry as baseRegistry } from "@/registry/bases/base/registry"
import { registry as radixRegistry } from "@/registry/bases/radix/registry"
import { variantNumber } from "@/lib/registry-helpers"

const APP_ROOT = process.cwd()
const REGISTRY_ROOT = path.join(APP_ROOT, "registry")
const REGISTRY_BASES = ["radix", "base"] as const
const REGISTRY_CORE_IMPORT_PREFIX = "@/registry/core/"

type RegistryBase = (typeof REGISTRY_BASES)[number]

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

export function isRegistryBase(base: string): base is RegistryBase {
    return REGISTRY_BASES.includes(base as RegistryBase)
}

export function getRegistryBase(base = "radix"): RegistryBase {
    return REGISTRY_BASES.includes(base as RegistryBase) ? (base as RegistryBase) : "radix"
}

export function getRegistryIndex(base = getRegistryBase()): Registry {
    return base === "base" ? baseRegistry : radixRegistry
}

function toRelativeImport(from: string, to: string): string {
    const fromDir = path.dirname(from)
    let relativePath = path.relative(fromDir, to).replace(/\.(tsx?|jsx?)$/, "")

    if (!relativePath.startsWith(".")) {
        relativePath = `./${relativePath}`
    }

    return relativePath.split(path.sep).join("/")
}

function blockSpecifierToComponentAlias(suffix: string): string {
    const parts = suffix.split("/")
    const [category, variant, component] = parts

    if (parts.length === 2) {
        return `@/components/${category}-${variantNumber(variant)}`
    }

    return `@/components/${category}-${variantNumber(variant)}-${component}`
}

function uiSpecifierToComponentAlias(suffix: string): string {
    if (suffix === "logo") {
        return "@/components/logo"
    }

    return `@/components/ui/${suffix}`
}

function normalizeRegistryPath(filePath: string): string {
    return filePath.replace(/\.(tsx?|jsx?)$/, "")
}

function registryImportToPath(specifier: string): string | null {
    const basePrefix = "@/registry/bases/"

    if (!specifier.startsWith(basePrefix)) {
        return null
    }

    const [, kitPath] = specifier.slice(basePrefix.length).split(/\/(.+)/)

    return kitPath ?? null
}

function coreSpecifierToAlias(suffix: string): string {
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

    return `@/components/${suffix}`
}

function registryPathToConsumerAlias(suffix: string): string | null {
    const parts = suffix.split("/")
    const kit = parts[0]

    if (!kit) {
        return null
    }

    if (parts[1] === "ui") {
        return uiSpecifierToComponentAlias(parts.slice(2).join("/"))
    }

    if (parts[1] === "blocks") {
        return blockSpecifierToComponentAlias(parts.slice(2).join("/"))
    }

    if (parts.length >= 3) {
        return blockSpecifierToComponentAlias(parts.slice(1).join("/"))
    }

    return null
}

function rewriteSpecifier(
    specifier: string,
    currentFilePath: string,
    itemFilePaths: string[]
): string {
    if (specifier.startsWith("@tailark/")) {
        return rewritePackageSpecifier(specifier)
    }

    if (specifier.startsWith(REGISTRY_CORE_IMPORT_PREFIX)) {
        return coreSpecifierToAlias(specifier.slice(REGISTRY_CORE_IMPORT_PREFIX.length))
    }

    const registryPath = registryImportToPath(specifier)
    if (!registryPath) {
        return specifier
    }

    const normalizedRegistryPath = normalizeRegistryPath(registryPath)
    const itemPath = itemFilePaths.find(
        (filePath) => normalizeRegistryPath(filePath) === normalizedRegistryPath
    )

    if (itemPath && itemPath !== currentFilePath) {
        return toRelativeImport(currentFilePath, itemPath)
    }

    return registryPathToConsumerAlias(registryPath) ?? specifier
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

async function resolveRegistryFilePath(
    filePath: string,
    base = getRegistryBase()
): Promise<string> {
    const candidates: string[] = []

    if (filePath.startsWith("../../")) {
        candidates.push(path.resolve(APP_ROOT, filePath))
    } else if (filePath.startsWith("core/")) {
        candidates.push(path.join(REGISTRY_ROOT, filePath))
    } else {
        candidates.push(path.join(REGISTRY_ROOT, "bases", base, filePath))
    }

    if (filePath === "veil/logo.tsx") {
        candidates.push(path.join(REGISTRY_ROOT, "bases", base, "veil/ui/logo.tsx"))
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

function findRegistryItem(
    name: string,
    base = getRegistryBase()
): Registry["items"][number] | undefined {
    return getRegistryIndex(base).items?.find((item) => item.name === name)
}

export function isRegistryIndexRequest(name: string): boolean {
    return name === "registry.json" || name === "registry"
}

export function normalizeRegistryItemName(name: string): string {
    return name.endsWith(".json") ? name.slice(0, -".json".length) : name
}

export async function getRegistryItem(
    name: string,
    base = getRegistryBase()
): Promise<RegistryItem | null> {
    const registryBase = getRegistryBase(base)
    const item = findRegistryItem(name, registryBase)

    if (!item || !item.files?.length) {
        return null
    }

    const itemFilePaths = item.files.map((file) => file.path)
    const files = await Promise.all(
        item.files.map(async (file) => {
            const absolutePath = await resolveRegistryFilePath(file.path, registryBase)
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
        ...(item.meta ? { meta: item.meta } : {}),
        files,
    } as RegistryItem
}

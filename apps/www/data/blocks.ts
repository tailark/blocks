import { File } from '@/components/code-editor'
import fs from 'fs'
import path from 'path'
export interface Block {
    id:string
    slug: string
    title: string
    description: string
    category: string
    preview: string
    code?: string,
    codes?: File[]
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    if (fs.existsSync(fullPath)) {
        let code = fs.readFileSync(fullPath, 'utf-8')
        
        code = code.replace(/<!--.*?-->/g, '').trim()

        const tailarkPattern = /@tailark\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)/g
        code = code.replace(tailarkPattern, (match, kit, type) => {
            const replacements: Record<string, string> = {
                'ui': '@/components/ui',
                'components': '@/components',
                'lib': '@/lib',
                'hooks': '@/hooks',
                'styles': '@/styles',
                'public': '@/public',
                'motion-primitives': '@/components/motion-primitives',
                'magic-ui': '@/components/magic-ui'
            }
            
            return replacements[type] || `@/${type}`;
        })

        code = code.replace(/from\s+['"]\.\.\/([^'"]+)['"]|from\s+['"]\.\/?([^'"]+)['"]/g, (match, p1, p2) => {
            const importPath = p1 || p2
            return `from "@/components/${importPath}"`
        })
        
        return code
    }
    return '// Code not found'
}

function loadAllComponentsFromFolder(folderPath: string, category: string): File[] {
    const result: File[] = []
    const fullPath = path.join(process.cwd(), folderPath)
    
    if (!fs.existsSync(fullPath)) {
        return result
    }
    
    const files = fs.readdirSync(fullPath)
        .filter(file => file.endsWith('.tsx'))
    
    for (const file of files) {
        const fileName = file === 'index.tsx' ? `${category}.tsx` : file
        const filePath = path.join(folderPath, file)
        const code = loadCode(filePath)
        
        result.push({
            name: fileName,
            lang: 'tsx',
            code: code
        })
    }
    
    return result
}

function generateBlocks(): Block[] {
    const blocks: Block[] = []
    const defaultKitDir = path.join(process.cwd(), '../../packages/default-kit/blocks')
    
    if (!fs.existsSync(defaultKitDir)) {
        console.warn(`Default kit directory not found at ${defaultKitDir}`)
        return blocks
    }
    
    const categories = fs.readdirSync(defaultKitDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    
    for (const category of categories) {
        const categoryDir = path.join(defaultKitDir, category)
        const variants = fs.readdirSync(categoryDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
        
        for (const variant of variants) {
            const blockFolderPath = path.join('../../packages/default-kit/blocks', category, variant)
            const blockFilePath = path.join(blockFolderPath, 'index.tsx')
            
            const allComponents = loadAllComponentsFromFolder(blockFolderPath, category)
            
            const formattedCategory = category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            const formattedVariant = variant.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            blocks.push({
                id : variant,
                slug: `${category}-${variant}`,
                title: `${formattedCategory} block ${formattedVariant}`,
                description: `Beautiful ${formattedCategory.toLowerCase()} block for your Shadcn UI marketing website (variant ${formattedVariant})`,
                category: category,
                preview: `/preview/${category}/${variant}`,
                code: loadCode(blockFilePath),
                codes: allComponents
            })
        }
    }
    
    return blocks
}

export const blocks: Block[] = generateBlocks()

const categoryOrder = [
    'hero-section',
    'logo-cloud',
    'features',
    'integrations',
    'content',
    'stats',
    'team',
    'testimonials',
    'call-to-action',
    'footer',
    'pricing',
    'comparator',
    'faqs',
    'login',
    'sign-up',
    'forgot-password',
    'contact'
]

const uniqueCategories = [...new Set(blocks.map((b) => b.category))]

export const categories = uniqueCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a)
    const indexB = categoryOrder.indexOf(b)
    
    if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB
    }
    
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1
    
    return a.localeCompare(b)
})
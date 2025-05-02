import { File } from '@/components/code-editor'
import fs from 'fs'
import path from 'path'
export interface Block {
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

        // Replace relative imports with absolute imports
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
    
    // Get all TSX files in the folder
    const files = fs.readdirSync(fullPath)
        .filter(file => file.endsWith('.tsx'))
    
    // For each file, load its content
    for (const file of files) {
        // Rename index.tsx to match the category name
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
            
            // Load all components from the folder
            const allComponents = loadAllComponentsFromFolder(blockFolderPath, category)
            
            // Format the category and variant for display (convert kebab-case to Title Case)
            const formattedCategory = category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            const formattedVariant = variant.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            blocks.push({
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
export const categories = [...new Set(blocks.map((b) => b.category))]
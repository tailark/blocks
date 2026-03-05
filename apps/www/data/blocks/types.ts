import { File } from '@/components/code-editor'

export interface Block {
    id: string
    slug: string
    title: string
    description: string
    category: string
    previewLink: string
    code?: string
    codes?: File[]
    kit?: string
    imageUrl?: string
    imageWidth?: number
    imageHeight?: number
    aspectRatio?: number
    categoryCoverUrl?: string
    categoryCoverWidth?: number
    categoryCoverHeight?: number
    categoryCoverAspect?: number
}

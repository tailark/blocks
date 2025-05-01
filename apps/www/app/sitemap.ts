import { MetadataRoute } from 'next'
import { blocks, categories } from '@/data/blocks'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tailark.com' 
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefrequency: 'daily',
      priority: 1,
    },
  ]
  
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changefrequency: 'weekly',
    priority: 0.8,
  }))
  
  const blockRoutes = blocks.map((block) => ({
    url: `${baseUrl}/preview/${block.category}/${block.title}`,
    lastModified: new Date(),
    changefrequency: 'monthly',
    priority: 0.5,
  }))
  
  return [...routes, ...categoryRoutes, ...blockRoutes]
}
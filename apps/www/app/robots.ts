import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], 
    },
    sitemap: 'https://tailark.com/sitemap.xml',
  }
}
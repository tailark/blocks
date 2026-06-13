import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://tailark.com"
    const lastModified = new Date()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/registry`,
            lastModified,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/registry.json`,
            lastModified,
            changeFrequency: "daily",
            priority: 0.9,
        },
    ]
}
import { getSetups } from '@/lib/setup-loader'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const setups = await getSetups()
  const baseUrl = 'https://awesome-web-setups.vercel.app'

  // Base URL entry
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // Add an entry for each setup
  const setupRoutes = setups.map((setup) => ({
    url: `${baseUrl}/setup/${setup.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...setupRoutes]
} 
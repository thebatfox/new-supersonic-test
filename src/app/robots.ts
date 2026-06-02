import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/images/'],
    },
    sitemap: 'https://supersoniccustoms.co.za/sitemap.xml',
  }
}

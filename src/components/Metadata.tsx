'use client'

import { useEffect } from 'react'
import type { Setup } from '@/lib/setup-loader'

interface MetadataProps {
  setup: Setup | null
}

export function Metadata({ setup }: MetadataProps) {
  useEffect(() => {
    if (setup) {
      // Update page title
      document.title = `${setup.title} - Awesome Web Setups`

      // Update meta description
      const descriptionMeta = document.querySelector('meta[name="description"]')
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', setup.description)
      }

      // Update Open Graph meta tags
      const ogTitleMeta = document.querySelector('meta[property="og:title"]')
      const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
      const ogUrlMeta = document.querySelector('meta[property="og:url"]')

      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', `${setup.title} - Awesome Web Setups`)
      }
      if (ogDescriptionMeta) {
        ogDescriptionMeta.setAttribute('content', setup.description)
      }
      if (ogUrlMeta) {
        ogUrlMeta.setAttribute('content', `${window.location.origin}/setup/${setup.slug}`)
      }

      // Update Twitter meta tags
      const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
      const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]')

      if (twitterTitleMeta) {
        twitterTitleMeta.setAttribute('content', `${setup.title} - Awesome Web Setups`)
      }
      if (twitterDescriptionMeta) {
        twitterDescriptionMeta.setAttribute('content', setup.description)
      }
    } else {
      // Reset to default metadata
      document.title = 'Awesome Web Setups - Open Source Web Development Configurations'
      
      const descriptionMeta = document.querySelector('meta[name="description"]')
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', 'Explore a collection of open source web development setups. Find and share modern web stacks, tools, and frameworks configurations.')
      }
    }
  }, [setup])

  return null
} 
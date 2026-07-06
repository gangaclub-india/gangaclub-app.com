'use client'

import { useEffect } from 'react'

type JsonLdProps = {
  organization: Record<string, unknown>
  website: Record<string, unknown>
}

/**
 * Ensures JSON-LD scripts exist exactly once in <head> and are updated on navigation.
 * Avoids duplicates caused by re-renders or client transitions.
 */
export default function JsonLd({ organization, website }: JsonLdProps) {
  useEffect(() => {
    function setOrUpdate(id: string, data: unknown) {
      // Remove accidental duplicates if any
      const all = document.querySelectorAll<HTMLScriptElement>(`script#${id}`)
      all.forEach((el, idx) => {
        if (idx > 0) el.parentElement?.removeChild(el)
      })

      let el = document.getElementById(id) as HTMLScriptElement | null
      if (!el) {
        el = document.createElement('script')
        el.type = 'application/ld+json'
        el.id = id
        document.head.appendChild(el)
      }
      // Update content (use .text to avoid HTML parsing issues)
      el.text = JSON.stringify(data)
    }

    setOrUpdate('schema-org', organization)
    setOrUpdate('schema-website', website)
  }, [organization, website])

  return null
}

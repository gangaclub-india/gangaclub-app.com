"use client"

import Link from "next/link"
import { ChevronRightIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  const breadcrumbItems = [{ label: "Ganga Club", href: "/" }];

  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = decodeURIComponent(segment)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbItems.push({ label, href });
  });

  // For the last item, if it's the current page, it shouldn't be a link
  if (breadcrumbItems.length > 1) {
    breadcrumbItems[breadcrumbItems.length - 1].href = undefined;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? 'https://gangaclub-app.com' + item.href : undefined // Ganti dengan domain situs Anda
    }))
  };

  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="text-text-muted hover:text-accent-cyan transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-light font-medium">{item.label}</span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <ChevronRightIcon className="h-4 w-4 text-text-muted mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

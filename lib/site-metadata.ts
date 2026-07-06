import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://gangaclub-app.com'), // Ganti dengan domain situs Anda yang sebenarnya
  title: {
    default: 'Ganga Club - Official Best Game Online App in India',
    template: '%s | Ganga Club', // Template untuk judul dinamis
  },
  keywords: ['9awin', '9a win'],
  authors: [{ name: 'Soyo' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gangaclub-app.com', // Ganti dengan domain situs Anda yang sebenarnya
  },
  icons: {
    icon: '/images/favicon-ganga-club.webp', // Ganti dengan path favicon Anda yang sebenarnya
    apple: '/images/favicon-ganga-club.webp', // Ganti dengan path apple-touch-icon Anda yang sebenarnya
  },
  verification: {
    google: "qwU4dKcJVboiMSt0_G5kErHXoZYM42_BCxNbMYmGRTk",
    yandex: "",
  },
  other: {
    'page-locale': 'en_IN',
    'language': 'en',
    'geo.region': 'IN',
    'geo.country': 'IN',
    'geo.placename': 'New Delhi', // Contoh kota besar di Filipina
    'tgn.nation': 'India',
  },
  // JSON-LD schema for Organization and Website
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ganga Club",
      "url": "https://gangaclub-app.com",
      "logo": "/images/logo-ganga-club.webp",
      "sameAs": [
        "https://www.facebook.com/9awinph",
        "https://twitter.com/9awinph",
        "https://www.youtube.com/channel/your-channel-id"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+63-912-345-6789",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://gangaclub-app.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://gangaclub-app.com/game?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

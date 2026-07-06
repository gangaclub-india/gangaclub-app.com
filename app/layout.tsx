import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteMetadata } from "@/lib/site-metadata"
import { ThemeProvider } from "@/components/theme-provider"
import MainContentWrapper from "@/components/main-content-wrapper"
import Header from "@/components/navbar/header"
import JsonLd from "@/components/json-ld"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Centralized schemas (server-calculated, client-injected once)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ganga Club",
    url: "https://gangaclub-app.com",
    logo: "/images/logo-ganga-club.webp",
    sameAs: [
      "https://www.facebook.com/9awinph",
      "https://twitter.com/9awinph",
      "https://www.youtube.com/channel/your-channel-id",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+63-912-345-6789",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://gangaclub-app.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gangaclub-app.com/game?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en-IN" suppressHydrationWarning className={inter.variable}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html, body {
              height: auto;
              min-height: 100vh;
            }
            html {
              overflow-x: hidden;
            }
            body {
              background: #000000;
              color: hsl(var(--foreground));
              font-family: var(--font-inter), system-ui, sans-serif;
              overflow-x: hidden;
              overflow-y: auto;
            }
            /* Added scrollbar width compensation */
            body.modal-open {
              overflow: hidden;
              padding-right: var(--scrollbar-width, 0px);
            }
            :root {
              --background: 0 0% 100%;
              --foreground: 0 0% 3.9%;
              --primary: 0 0% 9%;
              --primary-foreground: 0 0% 98%;
            }
            .dark {
              --background: 0 0% 3.9%;
              --foreground: 0 0% 98%;
              --primary: 0 0% 98%;
              --primary-foreground: 0 0% 9%;
            }
          `,
          }}
        />
        <link rel="preload" href="/images/logo-ganga-club.webp" as="image" type="image/webp" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              function getScrollbarWidth() {
                const outer = document.createElement('div');
                outer.style.visibility = 'hidden';
                outer.style.overflow = 'scroll';
                outer.style.msOverflowStyle = 'scrollbar';
                document.body.appendChild(outer);
                const inner = document.createElement('div');
                outer.appendChild(inner);
                const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
                outer.parentNode.removeChild(outer);
                return scrollbarWidth;
              }
              
              function setScrollbarWidth() {
                const width = getScrollbarWidth();
                document.documentElement.style.setProperty('--scrollbar-width', width + 'px');
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', setScrollbarWidth);
              } else {
                setScrollbarWidth();
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <JsonLd organization={organizationSchema} website={websiteSchema} />
          <Header />
          <MainContentWrapper>{children}</MainContentWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

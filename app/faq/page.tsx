import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import FaqSection from "@/components/sections/faq-section"
import { faqsData } from "@/lib/faq-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: "FAQ - Help & Support India",
  description:
    "Find answers to common questions about Ganga Club App, Game, Login, and account management in India.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/faq`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/faq`,
    title: "FAQ - Help & Support India | Ganga Club",
    description:
      "Find answers to common questions about Ganga Club App, Game, Login, and account management in India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/faq`,
    title: "FAQ - Help & Support India | Ganga Club",
    description:
      "Find answers to common questions about Ganga Club App, Game, Login, and account management in India.",
  },
}

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-dark text-text-light overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">
            FAQ - Help & Support India
          </h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              Find answers to common questions about {" "}
              <a href="/" className="text-accent-cyan">
                <strong>Ganga Club</strong>
              </a> App, Game, Login, and account management in India.
            </p>
          </div>
          <FaqSection />
          {/* Back to Home Button */}
          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="bg-primary-dark text-accent-cyan border-accent-cyan hover:bg-accent-cyan hover:text-primary-dark"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileStickyFooter />
      <ScrollToTopButton />
    </div>
  )
}

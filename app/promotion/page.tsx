import Footer from "@/components/navbar/footer"
import ImageWithFallback from "@/components/image-with-fallback"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import PromotionSection from "@/components/sections/promotion-section" // Corrected to default import
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"
import { promotionsData } from "@/lib/promotion-data" // Import promotionsData

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Promotions - Bonuses & Rewards",
  description:
    "Check out latest Ganga Club promotions. Claim bonuses, participate in events, and enjoy extra rewards easily.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/promotion`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/promotion`,
    title: "Promotions - Bonuses & Rewards | Ganga Club",
    description:
      "Check out latest Ganga Club promotions. Claim bonuses, participate in events, and enjoy extra rewards easily.",
    images: [
      {
        url: "https://gangaclub-app.com/images/logo-ganga-club.webp",
        alt: "Ganga Club Logo",
      },
      {
        url: "/images/banner/Ganga Club-Progressive-Jackpot.webp", // Contoh gambar relevan untuk halaman promosi
        alt: "Ganga Club-Progressive-Jackpot",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/promotion`,
    title: "Promotions - Bonuses & Rewards | Ganga Club",
    description:
      "Check out latest Ganga Club promotions. Claim bonuses, participate in events, and enjoy extra rewards easily.",
    images: ["/images/banner/Ganga Club-Progressive-Jackpot.webp"],
  },
}

export default function PromotionPage() {
  const promotionListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Promotions - Bonuses & Rewards | Ganga Club",
    description:
      "Check out latest Ganga Club promotions. Claim bonuses, participate in events, and enjoy extra rewards easily.",
    url: "https://gangaclub-app.com/promotion",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: promotionsData.map((promo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          name: promo.description,
          url: `https://gangaclub-app.com/promotion`,
          validThrough: promo.endTime.toISOString(),
          description: promo.description,
          category: "Casino Promotion",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "0",
            priceCurrency: "INR",
          },
          eligibleRegion: {
            "@type": "Place",
            name: "India",
          },
          availability: "https://schema.org/InStock",
          businessFunction: "https://schema.org/Sell",
          itemCondition: "https://schema.org/NewCondition",
          offeredBy: {
            "@type": "Organization",
            name: "Ganga Club",
            url: "https://gangaclub-app.com",
            logo: "https://gangaclub-app.com/images/logo-ganga-club.webp",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Bonus Type",
              value: promo.description.includes("Sign Up")
                ? "Welcome Bonus"
                : promo.description.includes("Deposit")
                  ? "Deposit Bonus"
                  : promo.description.includes("Cashback")
                    ? "Cashback Offer"
                    : "Special Promotion",
            },
            {
              "@type": "PropertyValue",
              name: "Terms",
              value: "Terms and conditions apply. Must be 18+ to participate.",
            },
          ],
        },
      })),
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-dark text-text-light overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(promotionListSchema) }} />
      <main className="flex-1">
        <section className="pt-8 pb-12">
          <div className="container px-4 md:px-6">
            <Breadcrumb />
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">Promotions - Bonuses & Rewards</h1>
            <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
                Check out latest {" "}
                <a href="/" className="text-accent-cyan">
                  <strong>Ganga Club</strong>
                </a>
                 promotions. Claim bonuses, participate in events, and enjoy extra rewards easily.
              </p>
            </div>

            <PromotionSection promotions={promotionsData} />
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
        </section>
      </main>
      <Footer />
      <MobileStickyFooter />
      <ScrollToTopButton />
    </div>
  )
}

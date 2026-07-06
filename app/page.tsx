import HeroSection from "@/components/sections/hero-section"
import GamesSection from "@/components/sections/games-section"
import GameProvidersSection from "@/components/sections/game-providers-section"
import INSection from "@/components/sections/in-section"
import LoginSection from "@/components/sections/login-section"
import AppSection from "@/components/sections/app-section"
import GameSection from "@/components/sections/game-section"
import PromotionSection from "@/components/sections/promotion-section"
import FaqSection from "@/components/sections/faq-section"
import TableOfContents from "@/components/table-of-contents"
import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import { faqsData } from "@/lib/faq-data"
import { promotionsData } from "@/lib/promotion-data" // Import promotionsData
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: siteMetadata.title.default,
  description:
    "Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.",
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: "https://gangaclub-app.com",
    title: "Ganga Club - Official Best Game Online App in India",
    description:
      "Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.",
    images: [
      {
        url: "/images/logo-ganga-club.webp",
        alt: "Ganga Club Logo",
      },
      {
        url: "/images/banner/Ganga-Club-Deposit-Bonus.webp",
        alt: "Ganga-Club-Deposit-Bonus",
      },
      {
        url: "/images/banner/Ganga-Club-Fair-Gameplay.webp",
        alt: "Ganga-Club-Fair-Gameplay",
      },
      {
        url: "/images/banner/Ganga-Club-Guarantee-Big-Win.webp",
        alt: "Ganga-Club-Guarantee-Big-Win",
      },
      {
        url: "/images/banner/Ganga-Club-Bonus-For-India.webp",
        alt: "Ganga-Club-Bonus-For-India",
      },
      {
        url: "/images/banner/Ganga-Club-Daily-Bonus.webp",
        alt: "Ganga-Club-Daily-Bonus",
      },
      {
        url: "/images/banner/Ganga-Club-Download-App.webp",
        alt: "Ganga-Club-Download-App",
      },
      {
        url: "/images/banner/Ganga-Club-Big-Jackpot-Prizes.webp",
        alt: "Ganga-Club-Big-Jackpot-Prizes",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://gangaclub-app.com",
    title: "Ganga Club - Official Best Game Online App in India",
    description:
      "Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.",
    images: ["/images/logo-ganga-club.webp"],
  },
}

export default function Home() {
  const limitedFaqs = faqsData.slice(0, 5)
  const limitedPromotions = promotionsData.slice(0, 5)

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ganga Club",
    url: "https://gangaclub-app.com",
    logo: "https://gangaclub-app.com/images/logo-ganga-club.webp",
    description:
      "Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    areaServed: "IN",
    sameAs: ["https://gangaclub-app.com"],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: ["Credit Card", "Debit Card", "Bank Transfer", "E-Wallet"],
    foundingDate: "2024",
    slogan: "Trusted Casino and Slot Platform India",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+63-912-345-6789",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: limitedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ganga Club - Official Best Game Online App in India",
    url: "https://gangaclub-app.com",
    description:
      "Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.",
    isPartOf: {
      "@type": "WebSite",
      name: "Ganga Club",
      url: "https://gangaclub-app.com",
    },
    about: {
      "@type": "Organization",
      name: "Ganga Club",
      url: "https://gangaclub-app.com",
      logo: "/images/logo-ganga-club.webp",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <main className="flex-1">
        <HeroSection />
        <GamesSection />
        <GameProvidersSection />
        <PromotionSection promotions={limitedPromotions} />
        <INSection />
        <LoginSection />
        <AppSection />
        <GameSection />
        <FaqSection faqs={limitedFaqs} />
      </main>
      <Footer />
      <MobileStickyFooter />
      <ScrollToTopButton />
      <TableOfContents />
    </div>
  )
}

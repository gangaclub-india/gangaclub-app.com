import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"
import { MailIcon, PhoneIcon, MessageSquareIcon } from "lucide-react"

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Contact Us - Always Serve Great Support",
  description:
    "Ganga Club support team is always ready to assist players with any questions, feedback, or technical issue concerns.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/contact`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/contact`,
    title: "Contact Us - Always Serve Great Support | Ganga Club",
    description:
      "Ganga Club support team is always ready to assist players with any questions, feedback, or technical issue concerns.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/contact`,
    title: "Contact Us - Always Serve Great Support | Ganga Club",
    description:
      "Ganga Club support team is always ready to assist players with any questions, feedback, or technical issue concerns.",
  },
}

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ganga Club",
    url: "https://gangaclub-app.com",
    logo: "https://gangaclub-app.com/images/logo-ganga-club.webp",
    description:
      "Nangungunang online casino at slot platform sa Pilipinas na nag-aalok ng mga exciting bonuses, ligtas na pagtaya, at pinakamahusay na gaming experience.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: [
      {
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
      {
        "@type": "ContactPoint",
        email: "support@gangaclub-app.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
    sameAs: ["https://gangaclub-app.com"],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: ["Credit Card", "Debit Card", "Bank Transfer", "E-Wallet"],
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us - Always Serve Great Support | Ganga Club",
    url: "https://9a-win.ph/contact",
    description:
      "Ganga Club support team is always ready to assist players with any questions, feedback, or technical issue concerns.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+63-912-345-6789",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
      {
        "@type": "ContactPoint",
        email: "support@gangaclub-app.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-primary">Contact Us - Always Serve Great Support</h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-foreground">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              <a href="https://gangaclub-app.com" className="text-accent font-bold">
                Ganga Club
              </a> Ganga Club support team is always ready to assist players with any questions, feedback, or technical issue concerns.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground text-lg leading-relaxed text-center">
            <h2 className="text-3xl font-semibold text-accent-cyan">How to Reach Us</h2>
            <p>
              We make it simple for users in India to connect with us. You can reach Ganga Club through the following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col items-center text-center">
                <MailIcon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Email Support</h3>
                <p className="text-muted-foreground">
                  We make it simple for users in India to connect with us. You can reach Ganga Club through the following channels:
                </p>
                <Link href="mailto:support@gangaclub-app.com" className="text-accent hover:underline mt-4">
                  support@gangaclub-app.com
                </Link>
                <p className="text-muted-foreground">
                  Our support team responds within 24 hours, ensuring that your concerns are handled promptly.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col items-center text-center">
                <MessageSquareIcon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Live Chat</h3>
                <p className="text-muted-foreground">
                  Ganga Club also provides a Help & Support Center within the app and website. Here, players can find answers to common issues, troubleshooting guides, and step-by-step instructions on topics like:
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-accent-cyan">Help & Support Center</h2>
            <p>
              We make it simple for users in India to connect with us. You can reach Ganga Club through the following channels:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Password reset and account recovery</li>
              <li>Ganga Club App installation guide</li>
              <li>Responsible platform use</li>
            </ul>
            <p>
              This self-help section is updated regularly to cover the most frequent user needs.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Our Commitment to You</h2>
            <p>
              At Ganga Club, user satisfaction is our top priority. Every query is handled with care, transparency, and respect. Whether you’re new to the platform or an experienced player, our support team is here to ensure your journey with Us is smooth, safe, and enjoyable.
            </p>

          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="bg-background text-primary border-primary hover:bg-primary hover:text-primary-foreground"
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

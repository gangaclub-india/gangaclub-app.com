import ImageWithFallback from "@/components/image-with-fallback" // Changed import
import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: "About Us - Vission Mission",
  description:
    "Ganga Club is a trusted digital platform designed to provide Indian users with engaging delivering a seamless experience and secure entertainment.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/about`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/about`,
    title: "About Us - Vission Mission | Ganga Club",
    description:
      "Ganga Club is a trusted digital platform designed to provide Indian users with engaging delivering a seamless experience and secure entertainment.",
    images: [
      {
        url: "https://gangaclub-app.com/images/logo-ganga-club.webp",
        alt: "Ganga Club Logo",
      },
      {
        url: "/images/banner/Ganga Club-Download-App.webp", // Gambar spesifik halaman About Us
        alt: "Ganga Club-Download-App",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/about`,
    title: "About Us - Vission Mission | Ganga Club",
    description:
      "Ganga Club is a trusted digital platform designed to provide Indian users with engaging delivering a seamless experience and secure entertainment.",
  },
}

export default function AboutUsPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ganga Club",
    url: "https://gangaclub-app.com",
    logo: "https://gangaclub-app.com/images/logo-ganga-club.webp",
    description:
      "Premier online casino and slot platform in the India offering exciting bonuses, safe betting, and top-notch gaming experience.",
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
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Us - Vission Mission | Ganga Club",
    url: "https://gangaclub-app.com/about",
    description:
      "Ganga Club is a trusted digital platform designed to provide Indian users with engaging delivering a seamless experience and secure entertainment.",
    isPartOf: {
      "@type": "WebSite",
      name: "Ganga Club",
      url: "https://gangaclub-app.com",
    },
    about: {
      "@type": "Organization",
      name: "Ganga Club",
      url: "https://gangaclub-app.com",
      logo: "https://gangaclub-app.com/images/logo-ganga-club.webp",
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-dark text-text-light overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">About Us - Vission Mission Ganga Club</h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              <a href="/" className="text-accent-cyan" title="Ganga Club">
                <strong>Ganga Club</strong>
              </a> is a trusted digital platform designed to provide Indian users with engaging delivering a seamless experience and secure entertainment.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-lg leading-relaxed">
            <h2 className="text-3xl font-semibold text-accent-cyan">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              Our mission is to create a digital environment where users feel valued, supported, and motivated to explore a variety of activities. With the Ganga Club App and website, players can enjoy a modern interface, smooth navigation, and enhanced features tailored specifically for the Indian audience.
            </p>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxedd">
              At Ganga Club, our mission is to provide a trustworthy, user-friendly, and immersive experience. We strive to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Ensure secure access and data protection for all users.</li>
              <li>Deliver high-quality interactive games with fair systems.</li>
              <li>Provide consistent updates and improvements based on user feedback.</li>
              <li>Foster a safe and engaging environment for the Indian community.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Our Vision</h2>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              Ganga Club envisions becoming the leading platform in India for digital entertainment. We aim to combine innovation, technology, and cultural relevance to offer a comprehensive experience that meets modern user expectations. Our goal is to ensure every player enjoys a reliable and enjoyable digital journey with us.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Why Choose us</h2>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              Ganga Club stands out from other platforms by focusing on user satisfaction, security, and convenience. Here’s what makes us unique:
            </p>
            <h3 className="text-2xl font-semibold text-accent-cyan">Secure and Reliable Platform</h3>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              All accounts, transactions, and interactions on Ganga Club are protected using advanced security measures, giving players peace of mind while exploring the platform.
            </p>
            <h3 className="text-2xl font-semibold text-accent-cyan">Seamless User Experience</h3>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              The App and website are designed for intuitive navigation, fast loading, and easy access to all features. Users can enjoy smooth gameplay, responsive design, and quick account management.
            </p>
            <h3 className="text-2xl font-semibold text-accent-cyan">Localized for Indian Users</h3>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              We understand the Indian audience and provide features that reflect cultural preferences, language considerations, and practical usability. This ensures a personal and relevant experience for every player.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Our Commitment to Users</h2>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              Ganga Club stands out from other platforms by focusing on user satisfaction, security, and convenience. Here’s what makes us unique:
            </p>
            <h3 className="text-2xl font-semibold text-accent-cyan">Secure and Reliable Platform</h3>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              We are committed to supporting its users with:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Responsive customer service for technical or account issues.</li>
              <li>Regular updates to maintain security and improve features.</li>
              <li>Clear and fair systems for interactive games.</li>
              <li>A platform that prioritizes both fun and safety.</li>
            </ul>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              We believe that transparency, trust, and community engagement are essential to a successful and enjoyable digital experience.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Join the Ganga Club Community</h2>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              By choosing Us, Indian users become part of a growing community that values entertainment, reliability, and user satisfaction. Whether accessing through the App, exploring new games, or participating in interactive features, every player enjoys a safe and seamless experience tailored just for them.
            </p>
            <p className="max-w-3xl mx-auto text-text-muted text-lg leading-relaxed">
              We continues to innovate and adapt to modern digital trends, ensuring that each visit is engaging, rewarding, and secure.
            </p>
          </div>
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

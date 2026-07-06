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
  title: "Responsible Gaming - Our Commitment",
  description:
    "Ganga Club believe entertainment should always remain enjoyable and balanced. Designed to offer engaging digital experiences, and responsible habits.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/responsible-gaming`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/responsible-gaming`,
    title: "Responsible Gaming - Our Commitment | Ganga Club",
    description:
      "Ganga Club believe entertainment should always remain enjoyable and balanced. Designed to offer engaging digital experiences, and responsible habits.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/responsible-gaming`,
    title: "Responsible Gaming - Our Commitment | Ganga Club",
    description:
      "Ganga Club believe entertainment should always remain enjoyable and balanced. Designed to offer engaging digital experiences, and responsible habits.",
  },
}

export default function ResponsibleGamingPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Responsible Gaming - Our Commitment | Ganga Club",
    url: "https://gangaclub-app.com/responsible-gaming",
    description:
      "Learn about Ganga Club's commitment to Responsible Gaming - Our Commitment, including tools and resources to help you manage your gaming habits.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">Responsible Gaming - Our Commitment</h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              <a href="https://gangaclub-app.com" className="text-accent-cyan">
                <strong>Ganga Club</strong>
              </a> believe entertainment should always remain enjoyable and balanced. Designed to offer engaging digital experiences, and responsible habits.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-lg leading-relaxed">
            <h2 className="text-3xl font-semibold text-accent-cyan">Understanding Responsible Gaming</h2>
            <p>
              Responsible gaming means setting clear boundaries and maintaining control over your activity. It involves enjoying the fun aspects of online play without letting it interfere with your personal, financial, or social responsibilities. Key principles of responsible use include :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Staying aware of the time and money you invest.</li>
              <li>Recognizing early signs of unhealthy habits.</li>
              <li>Ensuring that gaming remains a form of entertainment, not a necessity.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-accent-cyan">Set Personal Limits</h3>
            <p>
              One of the most effective strategies is creating boundaries before you start. Decide how much time and budget you want to dedicate and stick to it.
            </p>
            <p>
              You can manage this by :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Allocating a fixed amount of leisure spending.</li>
              <li>Scheduling specific hours for playing.</li>
              <li>Using self control tools to monitor activity.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-accent-cyan">Keep Balance in Daily Life</h3>
            <p>
              Digital entertainment should be only one part of your lifestyle. Prioritize work, studies, family, and social commitments first. A balanced routine may include :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Regular breaks during play sessions.</li>
              <li>Engaging in outdoor activities or exercise.</li>
              <li>Spending quality time with friends offline.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-accent-cyan">Recognize Warning Signs</h3>
            <p>
              It is important to stay alert to patterns that may suggest harmful use. Some indicators include :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Playing longer than intended.</li>
              <li>Spending beyond your comfort zone.</li>
              <li>Neglecting responsibilities due to online activity.</li>
            </ul>
            <p>
              If you notice any of these signs, it is time to pause and reconsider your approach.
            </p>

            <h3 className="text-2xl font-semibold text-accent-cyan">Self Exclusion Features</h3>
            <p>
              We provide options to help you take a step back if needed. Self exclusion tools allow you to temporarily or permanently restrict your access.
            </p>

            <h3 className="text-2xl font-semibold text-accent-cyan">Account Controls</h3>
            <p>
              Our system supports limit setting features that let you :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Control daily or weekly spending.</li>
              <li>Restrict the amount of time spent online.</li>
              <li>Pause your account when necessary.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Guidance for Families</h2>
            <p>
              At Ganga Club, we encourage families to maintain open communication about online activities. Our platform is strictly intended for adults. Protecting minors from access is a priority, and we recommend parental oversight where applicable. Best practices include :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Keeping login details private.</li>
              <li>Using parental control software.</li>
              <li>Monitoring shared devices.</li>
              <li>Professional Help and Resources</li>
            </ul>
            <p>
              If you feel your use is becoming difficult to manage, professional assistance is available. There are organizations that specialize in offering guidance and support. Helpful resources include :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>National helplines for digital wellness in India..</li>
              <li>Counseling services for behavioral balance.</li>
              <li>Community support groups for self control.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Our Promise to You</h2>
            <p>
              Ganga Club is committed to maintaining a healthy environment for every member. We continuously improve our tools and policies to safeguard your experience. Our mission is to ensure that gaming remains a joyful, safe, and balanced part of life.
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

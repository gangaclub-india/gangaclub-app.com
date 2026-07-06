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
  title: "Terms and Conditions - Transparent",
  description:
    "Ganga Club is ensure a transparent, safe, and enjoyable experience. By accessing our website, app and services, you agree to the terms below.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/terms-conditions`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/terms-conditions`,
    title: "Terms and Conditions - Transparent | Ganga Club",
    description:
      "Ganga Club is ensure a transparent, safe, and enjoyable experience. By accessing our website, app and services, you agree to the terms below.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/terms-conditions`,
    title: "Terms and Conditions - Transparent | Ganga Club",
    description:
      "Ganga Club is ensure a transparent, safe, and enjoyable experience. By accessing our website, app and services, you agree to the terms below.",
  },
}

export default function ResponsibleGamingPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions - Transparent | Ganga Club",
    url: "https://gangaclub-app.com/terms-conditions",
    description:
      'Basahin ang Terms and Conditions - Transparent ng Ganga Club upang maunawaan ang mga patakaran, karapatan ng manlalaro, at responsibilidad.',
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">Terms and Conditions - Transparent</h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              <a href="/" className="text-accent-cyan">
                <strong>Ganga Club</strong>
              </a> is ensure a transparent, safe, and enjoyable experience. By accessing our website, app and services, you agree to the terms below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-lg leading-relaxed">
            <h2 className="text-3xl font-semibold text-accent-cyan">Eligibility to Use Ganga Club</h2>
            <p>
              Ganga Club is intended only for individuals who meet the minimum legal age requirement in their jurisdiction, which is 18 years or older in India.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Accounts created with false information will be suspended.</li>
              <li>If we discover underage access, the account will be closed immediately.</li>
              <li>Users are responsible for ensuring their participation complies with local laws.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Account Registration and Security</h2>
            <p>
              To access the full features of Ganga Club, you must create an account.
            </p>
            <h3 className="text-2xl font-semibold text-accent-cyan">Registration Requirements</h3>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Provide accurate details such as your name, contact information, and age verification.</li>
              <li>One account per person is allowed. Multiple accounts may be terminated.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-accent-cyan">Security Responsibilities</h3>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Keep your login details (username and password) confidential.</li>
              <li>Notify us immediately if you suspect unauthorized use of your account.</li>
              <li>You are responsible for all activity under your account unless proven otherwise.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">User Obligations</h2>
            <p>
              When using Ganga Club services, you agree to :
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Use the platform for lawful purposes only.</li>
              <li>Respect the rights and privacy of other users.</li>
              <li>Avoid sharing offensive, abusive, or illegal content.</li>
              <li>Refrain from attempting to hack, reverse engineer, or damage the platform.</li>
              <li>Failure to comply with these rules may result in account suspension or permanent ban.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Services and Content</h2>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Ganga Club provides a variety of interactive games and entertainment services through its website and app.</li>
              <li>Content is subject to updates, upgrades, and periodic changes.</li>
              <li>We do not guarantee uninterrupted access due to technical or maintenance issues.</li>
              <li>Promotions or offers are time limited and subject to specific terms.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Payments and Transactions</h2>
            <p>
              When using financial features :
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>All transactions must be completed using secure and verified payment methods.</li>
              <li>You are responsible for ensuring accurate payment details.</li>
              <li>Ganga Club reserves the right to delay or reject transactions flagged as suspicious.</li>
              <li>Refunds or disputes will be handled according to applicable policies and local regulations.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Intellectual Property Rights</h2>
            <p>
              All digital assets, including logos, designs, text, software, and multimedia content on Ganga Club, are the exclusive property of the company.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Unauthorized reproduction, redistribution, or modification is prohibited.</li>
              <li>Trademarks and brand names displayed belong to their rightful owners.</li>
              <li>Permission must be obtained before using any intellectual property.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Privacy and Data Handling</h2>
            <p>
              Ganga Club respects user privacy. All personal information is managed in line with our Privacy Policy. By using the platform, you consent to the collection, processing, and storage of your information as described there.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Suspension and Termination</h2>
            <p>
              We may suspend or terminate your account if :
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>You violate these Terms and Conditions.</li>
              <li>Fraudulent, abusive, or harmful activity is detected.</li>
              <li>Requests are made by legal or regulatory authorities.</li>
              <li>Termination may result in the loss of access to your account and any associated data.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Limitation of Liability</h2>
            <p>
              Ganga Club strives to provide reliable services but cannot be held responsible for :
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-text-light">
              <li>Temporary downtime or technical issues beyond our control.</li>
              <li>Loss of data due to third party attacks or unforeseen events.</li>
              <li>Any misuse of the platform by unauthorized individuals.</li>
              <li>Users agree to access at their own risk.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Changes to These Terms</h2>
            <p>
              We reserve the right to update or revise these Terms and Conditions at any time. Updates will take effect once published on the website or app. Users are encouraged to review this page regularly.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from the use of Ganga Club shall fall under the jurisdiction of Indian courts.
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

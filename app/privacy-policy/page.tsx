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
  title: "Privacy and Policy - Safe Your Data",
  description:
    "Ganga Club respect your privacy and are committed to safeguarding your personal information. Explains the ways your information is gathered, applied, and safe.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/privacy-policy`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/privacy-policy`,
    title: "Privacy and Policy - Safe Your Data | Ganga Club",
    description:
      "Ganga Club respect your privacy and are committed to safeguarding your personal information. Explains the ways your information is gathered, applied, and safe.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/privacy-policy`,
    title: "Privacy and Policy - Safe Your Data | Ganga Club",
    description:
      "Ganga Club respect your privacy and are committed to safeguarding your personal information. Explains the ways your information is gathered, applied, and safe.",
  },
}

export default function ResponsibleGamingPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy and Policy - Safe Your Data | Ganga Club",
    url: "https://gangaclub-app.com/privacy-policy",
    description:
      "Ganga Club respect your privacy and are committed to safeguarding your personal information. Explains the ways your information is gathered, applied, and safe.",
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">Privacy and Policy - Safe Your Data</h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              <a href="https://gangaclub-app.com" className="text-accent-cyan">
                <strong>Ganga Club</strong>
              </a> respect your privacy and are committed to safeguarding your personal information. Explains the ways your information is gathered, applied, and safe.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-lg leading-relaxed">
            <h2 className="text-3xl font-semibold text-accent-cyan">Information We Collect</h2>
            <p>
              When you interact with Ganga Club, we may collect the following types of information :
            </p>

            <h3 className="text-2xl font-semibold text-accent-cyan">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Name, date of birth, and gender</li>
              <li>Communication information, including your registered email and mobile number</li>
              <li>Login credentials (username and password)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-accent-cyan">Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Device type, operating system, and browser version</li>
              <li>IP address and geolocation data (where permitted by law)</li>
              <li>Usage data, including pages visited and session duration</li>
            </ul>

            <h3 className="text-2xl font-semibold text-accent-cyan">Transaction Information</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Deposit and withdrawal records</li>
              <li>Chosen payment method (but not full financial details)</li>
              <li>Activity history related to Ganga Club Games</li>
            </ul>


            <h2 className="text-3xl font-semibold text-accent-cyan">How We Use Your Information</h2>
            <p>
              Your information is processed to improve your overall experience on Ganga Club. Main purposes include :
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To verify and create your Ganga Club Login</li>
              <li>To process transactions securely</li>
              <li>To provide personalized recommendations</li>
              <li>To communicate updates, promotions, or important notices</li>
              <li>To ensure platform security and prevent fraudulent activities</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Data Sharing and Disclosure</h2>
            <p>
              We value your trust and do not sell or rent your personal data to third parties. Information may be shared only in these cases :
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Secure payment processors or technical maintenance partners</li>
              <li>When required by law or government authorities</li>
              <li>To protect the integrity and security of Ganga Club systems</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Cookies and Tracking Technologies</h2>
            <p>
              Ganga Club uses cookies and similar technologies to enhance usability. These help us :
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Remember your preferences for faster login</li>
              <li>Analyze traffic patterns to improve functionality</li>
              <li>Provide relevant content and personalized experiences</li>
              <li>Users have the option to adjust or turn off cookies directly through their browser preferences.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Data Protection and Security</h2>
            <p>
              Protecting your information is our priority. We use :
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>SSL encryption for all transactions</li>
              <li>Two-factor authentication (2FA) for accounts</li>
              <li>Regular system audits and monitoring</li>
              <li>Secure storage with limited access to authorized staff only</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Your Rights</h2>
            <p>
              As a Ganga Club user, you have the right to :
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Review the personal information associated with your account</li>
              <li>Update or correct inaccurate information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request account deletion or data removal (subject to legal requirements)</li>
            </ul>

            <h2 className="text-3xl font-semibold text-accent-cyan">Children’s Privacy</h2>
            <p>
              Ganga Club is strictly intended for users aged 18 and above. Our platform is not designed for underage users, and any accounts found to belong to individuals below the required age will be removed. If we discover underage usage, the account will be closed and data deleted immediately.
            </p>

            <h2 className="text-3xl font-semibold text-accent-cyan">Updates to This Policy</h2>
            <p>
              Ganga Club may update this Privacy Policy from time to time to reflect changes in law, technology, or services. Updates will be posted on this page, and significant changes may be notified via email or app notification.
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

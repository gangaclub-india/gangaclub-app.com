import Link from "next/link"
import ImageWithFallback from "@/components/image-with-fallback" // Changed import
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  YoutubeIcon,
  XIcon,
  PaintbrushIcon as PinterestIcon,
} from "lucide-react"

export default function Footer() {
  const paymentMethods = [
    { id: 1, name: "GCash", logo: "/images/providers-payment/Bank.webp" },
    { id: 2, name: "PayMaya", logo: "/images/providers-payment/GooglePay.webp" },
    { id: 3, name: "PayPal", logo: "/images/providers-payment/HDFC.webp" },
    { id: 4, name: "DragonPay", logo: "/images/providers-payment/ICICI.webp" },
    { id: 5, name: "DragonPay", logo: "/images/providers-payment/Kotak.webp" },
    { id: 6, name: "DragonPay", logo: "/images/providers-payment/Mastercard.webp" },
    { id: 7, name: "DragonPay", logo: "/images/providers-payment/Neteller.webp" },
    { id: 8, name: "DragonPay", logo: "/images/providers-payment/PhonePe.webp" },
    { id: 9, name: "DragonPay", logo: "/images/providers-payment/SBI.webp" },
    { id: 10, name: "DragonPay", logo: "/images/providers-payment/Skrill.webp" },
    { id: 11, name: "DragonPay", logo: "/images/providers-payment/UPI.webp" },
    { id: 12, name: "DragonPay", logo: "/images/providers-payment/Visa.webp" },
  ]

  return (
    <footer className="bg-secondary-dark text-text-light py-8 md:py-12 mt-auto">
      <div className="container px-4 md:px-6">
        {/* Payment Methods Section - Centered and above columns */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-center">
                <ImageWithFallback
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  width={100}
                  height={50}
                  sizes="100px"
                  quality={90}
                  fallbackQuery={method.name}
                  className="object-contain"
                />
                <span className="sr-only">{method.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <ImageWithFallback
                src="/images/logo-ganga-club.webp"
                alt="Ganga Club Logo"
                width={150}
                height={50}
                sizes="150px"
                quality={90}
                fallbackQuery="Ganga Club Logo"
                className="filter-none"
              />
              <span className="sr-only">Ganga Club Home</span>
            </Link>
            <p className="text-text-muted text-sm">
              Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.
            </p>
            <a
              className="dmca-badge"
              title="DMCA.com Protection Status"
              href="https://www.dmca.com/Protection/Status.aspx?ID=94e76991-aaf4-4917-b4e7-f82269938245"
              rel="nofollow noreferrer noopener"
            >
              <ImageWithFallback
                src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=94e76991-aaf4-4917-b4e7-f82269938245"
                alt="DMCA.com Protection Status"
                width={100}
                height={50}
                sizes="100px"
                quality={90}
                fallbackQuery="DMCA Protection Status"
              />
            </a>
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <MailIcon className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <YoutubeIcon className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-text-muted hover:text-accent-cyan">
                <PinterestIcon className="h-6 w-6" />
                <span className="sr-only">Pinterest</span>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent-cyan text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-accent-cyan text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/game" className="text-text-muted hover:text-accent-cyan text-sm">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/promotion" className="text-text-muted hover:text-accent-cyan text-sm">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-muted hover:text-accent-cyan text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-text-muted hover:text-accent-cyan text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-text-muted hover:text-accent-cyan text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-text-muted hover:text-accent-cyan text-sm">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-accent-cyan text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Games</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/game/slot" className="text-text-muted hover:text-accent-cyan text-sm">
                  Ganga Club Slot Game
                </Link>
              </li>
              <li>
                <Link href="/game/casino" className="text-text-muted hover:text-accent-cyan text-sm">
                  Ganga Club Casino Game
                </Link>
              </li>
              <li>
                <Link href="/game/fishing" className="text-text-muted hover:text-accent-cyan text-sm">
                  Ganga Club Fish Game
                </Link>
              </li>
              <li>
                <Link href="/game/poker" className="text-text-muted hover:text-accent-cyan text-sm">
                  Ganga Club Poker Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border-subtle text-center text-text-muted text-sm">
        &copy; {new Date().getFullYear()} Ganga Club. All Rights Reserved. Build by Soyo
      </div>
    </footer>
  )
}

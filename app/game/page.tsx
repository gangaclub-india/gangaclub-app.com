import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import GameGrid from "@/components/game-grid"
import { allGames, gameCategories } from "@/lib/game-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteMetadata } from "@/lib/site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Play & Explore Interactive Game in India",
  description:
    "Discover a wide range of engaging games on Ganga Club. Play anytime with smooth performance, secure access and interactive gameplay.",
  alternates: {
    canonical: `${siteMetadata.metadataBase.origin}/game`,
  },
  openGraph: {
    siteName: "Ganga Club",
    type: "website",
    url: `${siteMetadata.metadataBase.origin}/game`,
    title: "Play & Explore Interactive Game in India | Ganga Club",
    description:
      "Discover a wide range of engaging games on Ganga Club. Play anytime with smooth performance, secure access and interactive gameplay.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: `${siteMetadata.metadataBase.origin}/game`,
    title: "Play & Explore Interactive Game in India | Ganga Club",
    description:
      "Discover a wide range of engaging games on Ganga Club. Play anytime with smooth performance, secure access and interactive gameplay.",
  },
}

export default function GamePage() {
  const gameListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Atau "WebPage" dengan "mainEntity" berupa "ItemList"
    name: "Play & Explore Interactive Game in India | Ganga Club",
    description:
      "Discover a wide range of engaging games on Ganga Club. Play anytime with smooth performance, secure access and interactive gameplay.",
    url: "https://gangaclub-app.com/game",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allGames.length, // Menunjukkan total jumlah game
      itemListElement: allGames.slice(0, 20).map((game, index) => ({
        // Batasi hingga 20 item pertama
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoGame", // Atau "Game" jika lebih umum
          name: game.name,
          image: `https://gangaclub-app.com${game.image}`,
          url: `https://gangaclub-app.com/game/${game.category.toLowerCase()}/${game.id}`, // Contoh URL detail game
          gamePlatform: "Web", // Atau platform lain yang relevan
          genre: game.category,
        },
      })),
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-dark text-text-light overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameListSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">
            Play & Explore Interactive Game in India
          </h1>
          <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
              Discover a wide range of engaging games on {" "}
              <a href="/" className="text-accent-cyan">
                <strong>Ganga Club</strong>
              </a>. Play anytime with smooth performance, secure access and interactive gameplay.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <Link
              href="/game"
              className="px-3 py-1.5 text-sm font-medium rounded-sm text-text-light hover:text-accent-cyan data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm"
            >
              All Games
            </Link>
            {gameCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.name}
                  href={`/game/${category.name.toLowerCase()}`}
                  className="px-3 py-1.5 text-sm font-medium rounded-sm text-text-light hover:text-accent-cyan flex items-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </Link>
              )
            })}
          </div>

          <GameGrid games={allGames} />
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

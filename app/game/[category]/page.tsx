import Footer from "@/components/navbar/footer"
import MobileStickyFooter from "@/components/navbar/mobile-sticky-footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import Breadcrumb from "@/components/breadcrumb"
import GameGrid from "@/components/game-grid"
import { gamesByCategory, gameCategories } from "@/lib/game-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { siteMetadata } from "@/lib/site-metadata"

const categoryDescriptions: { [key: string]: string } = {
  Slot: 
    "Explore immersive slot games on Ganga Club with smooth interface, bonus features, and seamless mobile experience.",
  Casino:
    "Enjoy classic and modern games with fast navigation and fair play on Ganga Club Casino Live Online Games in India.",
  Poker:
    "Test your skills with poker games on Ganga Club. Fast access, secure login, and interactive experience included.",
  Fishing:
    "Play engaging fishing games on Ganga Club. Enjoy interactive gameplay, secure login, and rewarding features.",
}

interface GameCategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: GameCategoryPageProps): Promise<Metadata> {
  const categoryParam = decodeURIComponent(params.category)
  const categoryObj = gameCategories.find((cat) => cat.name.toLowerCase() === categoryParam.toLowerCase())

  if (!categoryObj) {
    return {
      ...siteMetadata,
      title: "Category Not Found",
      description: "The game category you are looking for does not exist.",
      openGraph: {
        siteName: "Ganga Club",
        type: "website",
        url: `${siteMetadata.metadataBase.origin}/game/${categoryParam}`,
        title: "Category Not Found | Ganga Club",
        description: "The game category you are looking for does not exist.",
        images: [
          {
            url: "https://gangaclub-app.com/images/logo-ganga-club.webp",
            alt: "Ganga Club Logo",
          },
        ],
        locale: "en_IN",
      },
      twitter: {
        card: "summary_large_image",
        url: `${siteMetadata.metadataBase.origin}/game/${categoryParam}`,
        title: "Category Not Found | Ganga Club",
        description: "The game category you are looking for does not exist.",
        images: ["https://gangaclub-app.com/images/banner/banner1-9awin.webp"],
      },
    }
  }

  const categoryName = categoryObj.name.trim()
  const pageTitle = `${categoryName} - India Online Play | Ganga Club`
  const pageDescription =
    categoryDescriptions[categoryName] ||
    `Explore all ${categoryName} games available at Ganga Club. Find your favorite ${categoryName} titles and start playing!`

  return {
    ...siteMetadata,
    title: categoryName + " Games",
    description: pageDescription,
    alternates: {
      canonical: `${siteMetadata.metadataBase.origin}/game/${categoryParam}`,
    },
    openGraph: {
      siteName: "Ganga Club",
      type: "website",
      url: `${siteMetadata.metadataBase.origin}/game/${categoryParam}`,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: "https://gangaclub-app.com/images/logo-ganga-club.webp",
          alt: "Ganga Club Logo",
        },
        {
          url: "/images/banner/banner1-9awin.webp",
          alt: `${categoryName} Games`,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      url: `${siteMetadata.metadataBase.origin}/game/${categoryParam}`,
      title: pageTitle,
      description: pageDescription,
    },
  }
}

export default function GameCategoryPage({ params }: GameCategoryPageProps) {
  const categoryParam = decodeURIComponent(params.category)
  const categoryObj = gameCategories.find((cat) => cat.name.toLowerCase() === categoryParam.toLowerCase())

  if (!categoryObj) {
    notFound()
  }

  const categoryName = categoryObj.name.trim()
  const paragraphContent =
    categoryDescriptions[categoryName] ||
    `Explore all ${categoryName} games available at Ganga Club. Find your favorite ${categoryName} titles and start playing!`
  const filteredGames = gamesByCategory[categoryName]

  if (!filteredGames) {
    notFound()
  }

  const gameCategoryListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} Games at Ganga Club`,
    description: `Explore the complete collection of ${categoryName} games available at Ganga Club.`,
    url: `https://gangaclub-app.com/game/${categoryParam}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: filteredGames.length,
      itemListElement: filteredGames.slice(0, 20).map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoGame",
          name: game.name,
          image: `https://gangaclub-app.com${game.image}`,
          url: `https://gangaclub-app.com/game/${game.category.toLowerCase()}/${game.id}`,
          gamePlatform: "Web",
          genre: game.category,
        },
      })),
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-primary-dark text-text-light overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameCategoryListSchema) }} />
      <main className="flex-1 pt-8 pb-12">
        <div className="container px-4 md:px-6">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-accent-cyan">
            Games Category: {categoryName}
          </h1>
          <p className="text-lg text-center text-text-light mb-12 max-w-3xl mx-auto">{paragraphContent}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <Link
              href="/game"
              className="px-3 py-1.5 text-sm font-medium rounded-sm text-text-light hover:text-accent-cyan"
            >
              Lahat ng Laro
            </Link>
            {gameCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.name}
                  href={`/game/${cat.name.toLowerCase()}`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm text-text-light hover:text-accent-cyan flex items-center gap-2 ${cat.name === categoryName ? "bg-primary-dark text-accent-cyan shadow-sm" : ""}`}
                >
                  <Icon className="h-5 w-5" />
                  {cat.name}
                </Link>
              )
            })}
          </div>

          <GameGrid games={filteredGames} />
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

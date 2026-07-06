"use client"

import { useState } from "react"
import ImageWithFallback from "@/components/image-with-fallback"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlusIcon, MinusIcon, PlayIcon, ArrowRightIcon } from "lucide-react"
import { allGames, gamesByCategory, gameCategories } from "@/lib/game-data"
import Link from "next/link"

export default function GamesSection() {
  const [activeTab, setActiveTab] = useState("All")
  const [visibleItemsCount, setVisibleItemsCount] = useState<{ [key: string]: number }>(
    Object.keys(gamesByCategory).reduce((acc, category) => ({ ...acc, [category]: 12 }), { All: 12 }),
  )
  const itemsPerLoad = 6

  const getGamesForTab = (tab: string) => {
    return tab === "All" ? allGames : gamesByCategory[tab] || []
  }

  const loadMore = (category: string) => {
    setVisibleItemsCount((prev) => ({
      ...prev,
      [category]: prev[category] + itemsPerLoad,
    }))
  }

  const showLess = (category: string) => {
    setVisibleItemsCount((prev) => ({
      ...prev,
      [category]: 12,
    }))
  }

  const gamesToDisplay = getGamesForTab(activeTab)
  const currentVisibleCount = visibleItemsCount[activeTab] || 12

  return (
    <section id="games" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-cyan">
          Ganga Club Highest WinRate Games
        </h2>
        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-secondary-dark rounded-md p-1">
            <TabsTrigger
              value="All"
              className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan"
            >
              All Games
            </TabsTrigger>
            {gameCategories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="data-[state=active]:bg-primary-dark data-[state=active]:text-accent-cyan data-[state=active]:shadow-sm text-text-light hover:text-accent-cyan flex items-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <TabsContent key={activeTab} value={activeTab} className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {gamesToDisplay.slice(0, currentVisibleCount).map((game) => (
                <div
                  key={game.id}
                  className="relative bg-secondary-dark rounded-lg shadow-md overflow-hidden group cursor-pointer border border-border-subtle"
                >
                  <ImageWithFallback
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={160}
                    height={160}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    quality={85}
                    fallbackQuery={game.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-shadow-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      className="rounded-full bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark"
                    >
                      <PlayIcon className="h-6 w-6" />
                      <span className="sr-only">Play {game.name}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center mt-8 gap-4">
              {gamesToDisplay.length > currentVisibleCount && (
                <Button
                  onClick={() => loadMore(activeTab)}
                  variant="outline"
                  className="bg-primary-dark text-accent-cyan border-accent-cyan hover:bg-accent-cyan hover:text-primary-dark"
                >
                  <PlusIcon className="h-4 w-4 mr-2" /> Show More
                </Button>
              )}
              {currentVisibleCount > 12 && (
                <Button
                  onClick={() => showLess(activeTab)}
                  variant="outline"
                  className="bg-primary-dark text-text-muted border-border-subtle hover:bg-accent-cyan hover:text-primary-dark"
                >
                  <MinusIcon className="h-4 w-4 mr-2" /> Show Less
                </Button>
              )}
              {/* New "Show All Games" button */}
              {activeTab === "All" && gamesToDisplay.length > 12 && (
                <Button asChild className="bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90 mt-4">
                  <Link href="/game">
                    Show All Games <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

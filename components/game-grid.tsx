"use client"

import ImageWithFallback from "@/components/image-with-fallback"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import type { Game } from "@/lib/game-data"

interface GameGridProps {
  games: Game[]
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {games.map((game) => (
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
            quality={80}
            fallbackQuery={game.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-shadow-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" className="rounded-full bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark">
              <PlayIcon className="h-6 w-6" />
              <span className="sr-only">Play {game.name}</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

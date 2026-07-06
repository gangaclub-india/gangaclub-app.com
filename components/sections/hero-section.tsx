"use client"

import ImageWithFallback from "@/components/image-with-fallback" // Changed import
import Image from "next/image" // Added direct Next.js Image import for LCP optimization
import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    desktop: "/images/banner/Ganga-Club-Deposit-Bonus.webp",
    mobile: "/images/banner/Ganga-Club-Deposit-Bonus.webp",
    alt: "Ganga-Club-Deposit-Bonus",
  },
  {
    id: 2,
    desktop: "/images/banner/Ganga-Club-Fair-Gameplay.webp",
    mobile: "/images/banner/Ganga-Club-Fair-Gameplay.webp",
    alt: "Ganga-Club-Fair-Gameplay",
  },
  {
    id: 3,
    desktop: "/images/banner/Ganga-Club-Guarantee-Big-Win.webp",
    mobile: "/images/banner/Ganga-Club-Guarantee-Big-Win.webp",
    alt: "Ganga-Club-Guarantee-Big-Win",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero-slider" className="w-full bg-primary-dark pt-8 pb-8 md:pb-12 border-b border-border-subtle">
      <div className="container px-4 md:px-6 text-center text-text-light">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-accent-cyan">
          Ganga Club - Official Best Game Online App in India
        </h1>
      </div>

      <div className="relative w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            {index === 0 ? (
              <Image
                src={slide.desktop || "/placeholder.svg"}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 300px, 500px"
                quality={80}
                className="hidden md:block object-cover object-center"
                priority={true}
                fetchPriority="high"
                loading="eager"
              />
            ) : (
              <ImageWithFallback
                src={slide.desktop || "/placeholder.svg"}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 300px, 500px"
                quality={80}
                fallbackQuery={slide.alt}
                className="hidden md:block object-cover object-center"
              />
            )}
            {index === 0 ? (
              <Image
                src={slide.mobile || "/placeholder.svg"}
                alt={slide.alt}
                fill
                sizes="300px"
                quality={80}
                className="block md:hidden object-cover object-center"
                priority={true}
                fetchPriority="high"
                loading="eager"
              />
            ) : (
              <ImageWithFallback
                src={slide.mobile || "/placeholder.svg"}
                alt={slide.alt}
                fill
                sizes="300px"
                quality={80}
                fallbackQuery={slide.alt}
                className="block md:hidden object-cover object-center"
                loading="lazy"
              />
            )}
          </div>
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-text-light hover:bg-text-light/20"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-text-light hover:bg-text-light/20"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </Button>
      </div>

      <div className="container px-4 md:px-6 py-8 md:py-12 text-center text-text-light">
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
          Ganga Club is the most wanted India players to play Game Online like Live Casino and Sports Betting, download and login the app to claim big prizes.
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted mb-8">
          As one of India’s fast growing entertainment hubs, We ensures a balance between innovation and accessibility. The platform has been crafted to meet the needs of players who want simple navigation, responsive performance, and a trusted environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90">
            <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
              Play Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-text-light border-text-light hover:bg-text-light hover:text-primary-dark bg-transparent"
          >
            <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
              Claim Bonus
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

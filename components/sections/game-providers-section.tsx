"use client"

import ImageWithFallback from "@/components/image-with-fallback"
import { gameProvidersRow1, gameProvidersRow2 } from "@/lib/game-data" // Import array data terpisah

export default function GameProvidersSection() {
  // Menggunakan array data terpisah secara langsung
  const duplicatedRow1 = [...gameProvidersRow1, ...gameProvidersRow1]
  const duplicatedRow2 = [...gameProvidersRow2, ...gameProvidersRow2]

  return (
    <section id="providers" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-cyan">
          Powered by Leading Providers
        </h2>
      </div>
      <div className="relative w-full overflow-hidden py-4">
        {/* Baris Marquee Pertama */}
        <div className="flex animate-marquee-row1 whitespace-nowrap mb-4">
          {duplicatedRow1.map((provider, index) => (
            <div key={`${provider.id}-row1-${index}`} className="flex-shrink-0 mx-8">
              <ImageWithFallback
                src={provider.logo || "/placeholder.svg"}
                alt={provider.name}
                width={96}
                height={48}
                sizes="96px"
                quality={80}
                fallbackQuery={provider.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Baris Marquee Kedua */}
        <div className="flex animate-marquee-row2 whitespace-nowrap">
          {duplicatedRow2.map((provider, index) => (
            <div key={`${provider.id}-row2-${index}`} className="flex-shrink-0 mx-8">
              <ImageWithFallback
                src={provider.logo || "/placeholder.svg"}
                alt={provider.name}
                width={96}
                height={48}
                sizes="96px"
                quality={80}
                fallbackQuery={provider.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-row1 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-row2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-row1 {
          animation: marquee-row1 30s linear infinite;
        }
        .animate-marquee-row2 {
          animation: marquee-row2 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

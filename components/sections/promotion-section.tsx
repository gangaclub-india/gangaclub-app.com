import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import { promotionsData, type Promotion } from "@/lib/promotion-data" // Import promotionsData and Promotion type
import { ChevronRightIcon, ArrowRightIcon } from 'lucide-react'

interface PromotionSectionProps {
  promotions: Promotion[]; // Now accepts an array of promotions
}

export default function PromotionSection({ promotions }: PromotionSectionProps) {
  // displayedPromotions is now simply the 'promotions' prop
  const displayedPromotions = promotions;
  // showAllButton checks if the passed array is shorter than the full data
  // This means it will only show if a subset is passed (e.g., on homepage)
  // On the /promotion page, the full data will be passed, so this will be false.
  const showAllButton = displayedPromotions.length < promotionsData.length;

  return (
    <section id="promotions" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-accent-cyan">Nakatutuwang Promosyon</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-center text-text-muted mb-10">
          Palakasin ang iyong gameplay gamit ang aming mga espesyal na alok
        </p>

        <div className="bg-secondary-dark rounded-lg shadow-lg overflow-hidden border border-border-subtle">
          {/* Table Header - Visible only on large screens, now with 2fr for Promotion */}
          <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] gap-4 p-4 border-b border-border-subtle font-semibold text-text-light">
            <div className="col-span-1">Promotion</div>
            <div className="col-span-1 text-center">Time Remaining</div>
            <div className="col-span-1 text-center">Action</div>
          </div>

          {/* Table Rows */}
          {displayedPromotions.map((promo) => (
            <div key={promo.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 p-4 border-b border-border-subtle last:border-b-0 items-center">
              {/* Promotion Description - Aligned left on larger screens */}
              <div className="col-span-1 text-center md:text-left text-text-light font-medium">
                {promo.description}
              </div>

              {/* Time Remaining Column */}
              <div className="col-span-1 text-center">
                <CountdownTimer endTime={promo.endTime} />
              </div>

              {/* Action Column */}
              <div className="col-span-1 text-center">
                <Button asChild className="bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90">
                  <Link href={promo.actionLink} target="_blank" rel="nofollow noreferrer noopener">Claim Now <ChevronRightIcon className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {showAllButton && (
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90">
              <Link href="/promotion">
                Show All Promotions <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

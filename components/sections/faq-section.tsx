"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { faqsData, type Faq } from "@/lib/faq-data" // Import type Faq
import { ArrowRightIcon } from "lucide-react" // Import ArrowRightIcon

interface FaqSectionProps {
  faqs?: Faq[] // Change to accept faqs array
}

export default function FaqSection({ faqs = faqsData }: FaqSectionProps) {
  const displayedFaqs = faqs
  // Determine if the "Show All FAQs" button should be displayed
  // It should be displayed if the number of FAQs shown is less than the total available FAQs.
  const showAllButton = displayedFaqs.length < faqsData.length

  return (
    <section id="faq" className="py-12 md:py-20 bg-primary-dark text-text-light border-b border-border-subtle">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-cyan">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border-subtle">
                <AccordionTrigger className="text-lg font-semibold text-text-light hover:text-accent-cyan data-[state=open]:text-accent-cyan text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted text-base pb-4 text-left leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {showAllButton && (
            <div className="flex justify-center mt-8">
              <Button asChild className="bg-accent-cyan text-primary-dark hover:bg-accent-cyan/90">
                <Link href="/faq">
                  Ipakita ang Lahat ng FAQ <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

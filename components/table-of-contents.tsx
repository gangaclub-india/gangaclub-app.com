"use client"

import Link from "next/link"
import { useState } from "react"
import { ListOrderedIcon, XIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const sections = [
    { id: "hero-slider", title: "Home" },
    { id: "games", title: "Games" },
    { id: "providers", title: "Providers" },
    { id: "promotions", title: "Promotions" },
    { id: "IN", title: "Ganga Club PH" },
    { id: "login", title: "Ganga Club Login" },
    { id: "casino", title: "Ganga Club Casino" },
    { id: "slot", title: "Ganga Club Slot" },
    { id: "app", title: "Ganga Club App" },
    { id: "choose", title: "Bakit Maglaro sa Ganga Club?" },
    { id: "faq", title: "FAQ" },
  ]

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] md:right-6 flex items-center">
      {/* The expanding TOC panel */}
      <div
        className={cn(
          "bg-secondary-dark text-text-light rounded-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "w-64 opacity-100 p-4 mr-4" : "w-0 opacity-0 p-0 mr-0",
        )}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <h3 className="text-lg font-bold mb-4 text-accent-cyan">Table of Contents</h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="block text-text-light hover:text-accent-cyan transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* The toggle button */}
      <Button
        onClick={toggleOpen}
        size="icon"
        className="rounded-full shadow-lg bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark flex-shrink-0"
        aria-label={isOpen ? "Close Table of Contents" : "Open Table of Contents"}
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <ListOrderedIcon className="h-6 w-6" />}
      </Button>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-20 right-6 z-50 md:bottom-6">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-lg bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

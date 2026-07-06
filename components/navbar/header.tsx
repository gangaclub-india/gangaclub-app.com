"use client"

import Link from "next/link"
import ImageWithFallback from "@/components/image-with-fallback"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { gameCategories } from "@/lib/game-data"

export default function Header() {
  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-secondary-dark shadow-lg py-4">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <ImageWithFallback
            src="/images/logo-ganga-club.webp"
            alt="Ganga Club Logo"
            width={150}
            height={50}
            fallbackQuery="Ganga Club Logo"
            className="filter-none"
          />
          <span className="sr-only">Ganga Club Home</span>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Login and Sign Up buttons for desktop, next to hamburger */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="text-accent-cyan border-accent-cyan hover:bg-accent-cyan hover:text-primary-dark bg-transparent"
            >
              <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
                Login
              </Link>
            </Button>
            <Button asChild variant="default" className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark">
              <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Hamburger menu for all screen sizes */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-accent-cyan">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary-dark text-text-light border-l border-border-subtle">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse through the main sections of the website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  About Us
                </Link>
                <div>
                  <Link href="/game" className="text-lg font-medium text-text-light hover:text-accent-cyan block mb-2">
                    Games
                  </Link>
                  <ul className="ml-4 space-y-1">
                    {gameCategories.map((category) => {
                      const Icon = category.icon
                      return (
                        <li key={category.name}>
                          <Link
                            href={`/game/${category.name.toLowerCase()}`}
                            className="text-base text-text-muted hover:text-accent-cyan flex items-center gap-2"
                          >
                            <Icon className="h-4 w-4" />
                            {category.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <Link href="/promotion" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Promotions
                </Link>
                <Link href="/faq" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  FAQ
                </Link>
                <Link href="/privacy-policy" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Terms and Conditions
                </Link>
                <Link href="/responsible-gaming" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Responsible Gaming
                </Link>
                <Link href="/contact" className="text-lg font-medium text-text-light hover:text-accent-cyan">
                  Contact Us
                </Link>
                {/* Login and Sign Up buttons inside menu for all screen sizes (no md:hidden) */}
                <Button
                  asChild
                  variant="outline"
                  className="text-accent-cyan border-accent-cyan hover:bg-accent-cyan hover:text-primary-dark bg-transparent"
                >
                  <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
                    Login
                  </Link>
                </Button>
                <Button asChild variant="default" className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary-dark">
                  <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
                    Sign Up
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

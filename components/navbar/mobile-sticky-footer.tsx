import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogInIcon, UserPlusIcon, GiftIcon } from 'lucide-react'

export default function MobileStickyFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-secondary-dark text-accent-cyan py-3 md:hidden shadow-lg">
      <div className="container px-4 flex items-center justify-around text-sm">
        <Button asChild variant="ghost" className="flex flex-col items-center gap-1 text-accent-cyan hover:bg-primary-dark">
          <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
            <LogInIcon className="h-5 w-5 text-accent-cyan" />
            <span>Login</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="flex flex-col items-center gap-1 text-accent-cyan hover:bg-primary-dark">
          <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
            <UserPlusIcon className="h-5 w-5 text-accent-cyan" />
            <span>Sign Up</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="flex flex-col items-center gap-1 text-accent-cyan hover:bg-primary-dark">
          <Link href="https://gangaclub-app.pages.dev" rel="nofollow noreferrer noopener">
            <GiftIcon className="h-5 w-5 text-accent-cyan" />
            <span>Bonus</span>
          </Link>
        </Button>
      </div>
    </footer>
  )
}

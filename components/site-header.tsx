import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <nav className="flex items-center gap-2">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Button variant="ghost" >
          <div className="flex items-center gap-2">
            <Icons.gitHub className="size-5" />
            <span className="font-mono bg-muted px-1.5 py-0.5 rounded-[7px] leading-none border border-primary/10 flex items-center justify-center">G</span>
          </div>
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <ThemeToggle />
    </nav>
  )
}

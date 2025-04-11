import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { KeyboardShortcut } from "./keyboard-shortcut"

export function SiteHeader() {
  return (
    <nav className="flex items-center gap-2">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Button variant="outline" className="backdrop-blur-[1px]">
          <div className="hidden md:flex items-center gap-2">
            <Icons.gitHub className="size-5" />
            <KeyboardShortcut shortcut="G" />
          </div>
          <Icons.gitHub className="size-5 block md:hidden" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <ThemeToggle />
    </nav>
  )
}

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <nav className="flex items-center gap-2">
        <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                })}
            >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
            </div>
        </Link>
        {/* <Link
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link> */}
        <ThemeToggle />
    </nav>
  )
}

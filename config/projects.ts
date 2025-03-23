import type { IconName } from "@/components/tech-icon";
import type { ChipStatus } from "@/components/progress-chips";

export type Project = {
  title: string;
  description: string;
  href?: string;
  githubRepo?: string;
  status?: ChipStatus;
  tags: IconName[];
}

export const projects: Project[] = [
  {
    title: "Lofiplayer",
    description: "Minimalistic 24/7 lofi music player for work, study, or relaxation.",
    href: "https://lofiplayer.gergo.cc",
    status: "Shipped",
    tags: ["Nextjs", "Tailwind", "Typescript", "Vercel"]
  },
  {
    title: "Magneto",
    description: "Chrome extension to automatically grab magnet links. Privacy-focused, built with Svelte.",
    githubRepo: "https://github.com/gergogyulai/magneto",
    status: "Shipped",
    tags: ["Svelte", "Tailwind", "Vite", "Typescript"]
  },
  {
    title: "Yetweets",
    description: "Archive of Kanye West's tweet history",
    href: "https://yetweets.xyz/",
    githubRepo: "https://github.com/gergogyulai/yetweets",
    status: "InProgress",
    tags: ["Nextjs", "Tailwind", "Typescript", "Vercel"]
  },
  {
    title: "Sonora",
    description: "Sleek and modern music streaming app, powered by Jellyfin, built with Expo and React Native",
    githubRepo: "https://github.com/gergogyulai/sonora",
    status: "InProgress",
    tags: ["ReactNative", "Expo", "Typescript"]
  },
  {
    title: "Noisr",
    description: "Noise texture generator with custom size, density and color options",
    href: "https://noisr.gergo.cc",
    githubRepo: "https://github.com/gergogyulai/noisr",
    status: "Shipped",
    tags: ["Nextjs", "Tailwind", "Typescript", "Vercel"]
  },
  {
    title: "Wintoolbelt",
    description: "Tools for cleaning public school PCs, including browser resets and Veyon controls",
    githubRepo: "https://github.com/gergogyulai/wintoolbelt",
    status: "Shipped",
    tags: ["PowerShell", "Hono", "Typescript"]
  },
  {
    title: "Veyonctl",
    description: "CLI tool for Veyon Service control on Windows",
    githubRepo: "https://github.com/gergogyulai/veyonctl",
    status: "Archived",
    tags: ["CSharp"]
  },
  {
    title: "Minitools",
    description: "Collection of simple utility tools in various languages",
    githubRepo: "https://github.com/gergogyulai/minitools",
    status: "Archived",
    tags: ["Javascript", "Python", "Golang"]
  },
  {
    title: "movie-web-tv",
    description: "Modified version of movie-web optimized for Smart TVs",
    githubRepo: "https://github.com/gergogyulai/movie-web-tv",
    status: "Unknown",
    tags: ["React", "Tailwind", "Typescript", "Vite"]
  }
]

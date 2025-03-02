import { type IconName } from "@/components/tech-icon";
import { type ChipStatus } from "@/components/progress-chips";

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
    title: "Lofiplayer.live",
    description: "A minimalistic, 24/7 lofi music player for daily work, study, or relaxation.",
    href: "https://lofiplayer.gergo.cc",
    status: "Shipped",
    tags: [
      "Nextjs", 
      "Tailwind", 
      "Typescript", 
      "Vercel"
    ]
  },
  {
    title: "Magneto",
    description: "Automatically grab magnet links in Chrome. Privacy-focused and built with Svelte.",
    githubRepo: "https://github.com/gergogyulai/magneto",
    status: "Shipped",
    tags: [
      "Svelte",
      "Tailwind",
      "Vite",
      "Typescript",
    ]
  },
  {
    title: "Ye Tweets",
    description: "A more or less complete archive of every tweet ever published by Kanye West",
    href: "https://yetweets.xyz/",
    githubRepo: "https://github.com/gergogyulai/yetweets",
    status: "InProgress",
    tags: [
      "Nextjs",
      "Tailwind",
      "Typescript",
      "Vercel"
    ]
  },
  {
    title: "Noisr",
    description: "Genrate noise texture with custom size, density and color.",
    href: "https://noisr.gergo.cc",
    githubRepo: "https://github.com/gergogyulai/noisr",
    status: "Shipped",
    tags: [
      "Nextjs",
      "Tailwind",
      "Typescript",
      "Vercel"
    ]
  },
  {
    title: "Veyonctl",
    description: "Simple CLI tool to take control of the Veyon Service on Windows systems.",
    githubRepo: "https://github.com/gergogyulai/veyonctl",
    status: "InProgress",
    tags: [
      "CSharp"
    ]
  },
  {
    title: "Minitools",
    description: "A collection of simple and useful tools. Typically written in python or JavaScript.",
    githubRepo: "https://github.com/gergogyulai/minitools",
    status: "Repo",
    tags: [
      "Javascript", 
      "Python", 
      "Golang", 
    ]
  },
  {
    title: "movie-web-tv",
    description: "A modified version of the original movie-web project optimized for use on Smart TVs.",
    githubRepo: "https://github.com/gergogyulai/movie-web-tv",
    status: "Unknown",
    tags: [
      "React", 
      "Tailwind", 
      "Typescript", 
      "Vite"
    ]
  },
  // {
  //   title : "Lofiplayer Mobile",
  //   description: "An upcoming mobile version of the Lofiplayer.live webapp.",
  //   status: "Planning",
  //   tags: [
  //     "ReactNative",
  //     "Typescript"
  //   ]
  // }
]

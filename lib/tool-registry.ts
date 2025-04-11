import { Tool } from "@/components/tool-links";

export const toolsRegistry: Record<
  string,
  Omit<Tool, "position" | "animationDelay">
> = {
  astro: {
    href: "https://astro.build",
    id: "astro",
    src: "/icons/astro.svg",
    darkSrc: "/icons/astro-dark.svg",
    alt: "Astro",
  },
  c: {
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    id: "c",
    src: "/icons/c.svg",
    alt: "C",
  },
  cplus: {
    href: "https://en.wikipedia.org/wiki/C%2B%2B",
    id: "cplus",
    src: "/icons/cplus.svg",
    alt: "C++",
  },
  csharp: {
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    id: "csharp",
    src: "/icons/csharp.svg",
    alt: "C#",
  },
  drizzle: {
    href: "https://orm.drizzle.team",
    id: "drizzle",
    src: "/icons/drizzle.svg",
    alt: "Drizzle",
  },
  cursor: {
    href: "https://cursor.dev",
    id: "cursor",
    src: "/icons/cursor.svg",
    alt: "Cursor",
  },
  electron: {
    href: "https://www.electronjs.org",
    id: "electron",
    src: "/icons/electron.svg",
    alt: "Electron",
  },
  expo: {
    href: "https://expo.dev",
    id: "expo",
    src: "/icons/expo.svg",
    darkSrc: "/icons/expo-dark.svg",
    alt: "Expo",
  },
  github: {
    href: "https://github.com",
    id: "github",
    src: "/icons/github.svg",
    darkSrc: "/icons/github-dark.svg",
    alt: "GitHub",
  },
  golang: {
    href: "https://go.dev",
    id: "golang",
    src: "/icons/golang.svg",
    alt: "Go",
  },
  hono: {
    href: "https://hono.dev",
    id: "hono",
    src: "/icons/hono.svg",
    alt: "Hono",
  },
  javascript: {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    id: "javascript",
    src: "/icons/javascript.svg",
    alt: "JavaScript",
  },
  dotnet: {
    href: "https://dotnet.microsoft.com",
    id: "dotnet",
    src: "/icons/dotnet.svg",
    alt: ".NET",
  },
  nextjs: {
    href: "https://nextjs.org",
    id: "nextjs",
    src: "/icons/nextjs.svg",
    alt: "Next.js",
  },
  powershell: {
    href: "https://learn.microsoft.com/en-us/powershell/",
    id: "powershell",
    src: "/icons/powershell.svg",
    alt: "PowerShell",
  },
  python: {
    href: "https://www.python.org",
    id: "python",
    src: "/icons/python.svg",
    alt: "Python",
  },
  react: {
    href: "https://reactjs.org",
    id: "react",
    src: "/icons/react.svg",
    alt: "React",
  },
  rust: {
    href: "https://www.rust-lang.org",
    id: "rust",
    src: "/icons/rust.svg",
    darkSrc: "/icons/rust-dark.svg",
    alt: "Rust",
  },
  svelte: {
    href: "https://svelte.dev",
    id: "svelte",
    src: "/icons/svelte.svg",
    alt: "Svelte",
  },
  swift: {
    href: "https://swift.org",
    id: "swift",
    src: "/icons/swift.svg",
    alt: "Swift",
  },
  tailwind: {
    href: "https://tailwindcss.com",
    id: "tailwind",
    src: "/icons/tailwind.svg",
    alt: "Tailwind CSS",
  },
  tanstack: {
    href: "https://tanstack.com",
    id: "tanstack",
    src: "/icons/tanstack.png",
    alt: "TanStack",
  },
  tauri: {
    href: "https://tauri.app",
    id: "tauri",
    src: "/icons/tauri.svg",
    alt: "Tauri",
  },
  typescript: {
    href: "https://www.typescriptlang.org",
    id: "typescript",
    src: "/icons/typescript.svg",
    alt: "TypeScript",
  },
  vercel: {
    href: "https://vercel.com",
    id: "vercel",
    src: "/icons/vercel.svg",
    darkSrc: "/icons/vercel-dark.svg",
    alt: "Vercel",
  },
  vite: {
    href: "https://vitejs.dev",
    id: "vite",
    src: "/icons/vite.svg",
    alt: "Vite",
  },
  vscode: {
    href: "https://code.visualstudio.com",
    id: "vscode",
    src: "/icons/vscode.svg",
    alt: "VS Code",
  },
  postgres: {
    href: "https://www.postgresql.org",
    id: "postgres",
    src: "/icons/postgresql.svg",
    alt: "PostgreSQL",
  },
  zustand: {
    href: "https://zustand.docs.pmnd.rs",
    id: "zustand",
    src: "/icons/zustand.svg",
    alt: "Zustand",
  },
  docker: {
    href: "https://www.docker.com",
    id: "docker",
    src: "/icons/docker.svg",
    alt: "Docker",
  },
};

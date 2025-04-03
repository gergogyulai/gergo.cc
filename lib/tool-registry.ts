import { Tool } from "@/components/tool-links";

export const toolsRegistry: Record<
  string,
  Omit<Tool, "position" | "animationDelay">
> = {
  astro: {
    href: "https://astro.build",
    src: "/icons/astro.svg",
    darkSrc: "/icons/astro-dark.svg",
    alt: "Astro",
  },
  c: {
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    src: "/icons/c.svg",
    alt: "C",
  },
  cplus: {
    href: "https://en.wikipedia.org/wiki/C%2B%2B",
    src: "/icons/cplus.svg",
    alt: "C++",
  },
  csharp: {
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    src: "/icons/csharp.svg",
    alt: "C#",
  },
  drizzle: {
    href: "https://orm.drizzle.team",
    src: "/icons/drizzle.svg",
    alt: "Drizzle",
  },
  cursor: {
    href: "https://cursor.dev",
    src: "/icons/cursor.svg",
    alt: "Cursor",
  },
  electron: {
    href: "https://www.electronjs.org",
    src: "/icons/electron.svg",
    alt: "Electron",
  },
  expo: {
    href: "https://expo.dev",
    src: "/icons/expo.svg",
    darkSrc: "/icons/expo-dark.svg",
    alt: "Expo",
  },
  github: {
    href: "https://github.com",
    src: "/icons/github.svg",
    darkSrc: "/icons/github-dark.svg",
    alt: "GitHub",
  },
  golang: {
    href: "https://go.dev",
    src: "/icons/golang.svg",
    alt: "Go",
  },
  hono: {
    href: "https://hono.dev",
    src: "/icons/hono.svg",
    alt: "Hono",
  },
  javascript: {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "/icons/javascript.svg",
    alt: "JavaScript",
  },
  dotnet: {
    href: "https://dotnet.microsoft.com",
    src: "/icons/dotnet.svg",
    alt: ".NET",
  },
  nextjs: {
    href: "https://nextjs.org",
    src: "/icons/nextjs.svg",
    alt: "Next.js",
  },
  powershell: {
    href: "https://learn.microsoft.com/en-us/powershell/",
    src: "/icons/powershell.svg",
    alt: "PowerShell",
  },
  python: {
    href: "https://www.python.org",
    src: "/icons/python.svg",
    alt: "Python",
  },
  react: {
    href: "https://reactjs.org",
    src: "/icons/react.svg",
    alt: "React",
  },
  rust: {
    href: "https://www.rust-lang.org",
    src: "/icons/rust.svg",
    darkSrc: "/icons/rust-dark.svg",
    alt: "Rust",
  },
  svelte: {
    href: "https://svelte.dev",
    src: "/icons/svelte.svg",
    alt: "Svelte",
  },
  swift: {
    href: "https://swift.org",
    src: "/icons/swift.svg",
    alt: "Swift",
  },
  tailwind: {
    href: "https://tailwindcss.com",
    src: "/icons/tailwind.svg",
    alt: "Tailwind CSS",
  },
  tanstack: {
    href: "https://tanstack.com",
    src: "/icons/tanstack.png",
    alt: "TanStack",
  },
  tauri: {
    href: "https://tauri.app",
    src: "/icons/tauri.svg",
    alt: "Tauri",
  },
  typescript: {
    href: "https://www.typescriptlang.org",
    src: "/icons/typescript.svg",
    alt: "TypeScript",
  },
  vercel: {
    href: "https://vercel.com",
    src: "/icons/vercel.svg",
    darkSrc: "/icons/vercel-dark.svg",
    alt: "Vercel",
  },
  vite: {
    href: "https://vitejs.dev",
    src: "/icons/vite.svg",
    alt: "Vite",
  },
  vscode: {
    href: "https://code.visualstudio.com",
    src: "/icons/vscode.svg",
    alt: "VS Code",
  },
  postgres: {
    href: "https://www.postgresql.org",
    src: "/icons/postgresql.svg",
    alt: "PostgreSQL",
  },
  zustand: {
    href: "https://zustand.docs.pmnd.rs",
    src: "/icons/zustand.svg",
    alt: "Zustand",
  },
};
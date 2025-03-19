import Image from "next/image";
import React from "react";

interface TechIconProps {
  name: IconName;
}

export type IconName =
  | "Tailwind"
  | "Svelte"
  | "Nextjs"
  | "Rust"
  | "Typescript"
  | "Javascript"
  | "Swift"
  | "Astro"
  | "ReactNative"
  | "React"
  | "Vite"
  | "C"
  | "CPlus"
  | "CSharp"
  | "Python"
  | "Golang"
  | "PowerShell"
  | "Electron"
  | "Tauri"
  | "Hono"
  | "DotNET"
  | "Vercel";

const iconMap: Record<IconName, React.FC> = {
  Tailwind: () => (
    <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
      <Image src="/icons/tailwind.svg" width={100} height={100} className="size-5" alt="Tailwind Logo" />
    </a>
  ),
  Svelte: () => (
    <a target="_blank" rel="noreferrer" href="https://svelte.dev/">
      <Image src="/icons/svelte.svg" width={100} height={100} className="size-5" alt="Svelte Logo" />
    </a>
  ),
  Nextjs: () => (
    <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
      <Image src="/icons/nextjs.svg" width={100} height={100} className="size-5" alt="Nextjs Logo" />
    </a>
  ),
  Rust: () => (
    <a target="_blank" rel="noreferrer" href="https://www.rust-lang.org/">
      <Image src="/icons/rust.svg" width={100} height={100} className="size-5 dark:invert" alt="Rust Logo" />
    </a>
  ),
  Typescript: () => (
    <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
      <Image src="/icons/typescript.svg" width={100} height={100} className="size-5" alt="Typescript Logo" />
    </a>
  ),
  Javascript: () => (
    <Image src="/icons/javascript.svg" width={100} height={100} className="size-5" alt="Javascript Logo" />
  ),
  Swift: () => (
    <a target="_blank" rel="noreferrer" href="https://www.swift.org/">
      <Image src="/icons/swift.svg" width={100} height={100} className="size-5" alt="Swift Logo" />
    </a>
  ),
  Astro: () => (
    <a target="_blank" rel="noreferrer" href="https://astro.build/">
      <Image src="/icons/astro.svg" width={100} height={100} className="hidden size-5 dark:block" alt="Astro Logo" />
      <Image src="/icons/astro-dark.svg" width={100} height={100} className="block size-5 dark:hidden" alt="Astro Logo" />
    </a>
  ),
  ReactNative: () => (
    <a target="_blank" rel="noreferrer" href="https://reactnative.dev/">
      <Image src="/icons/react.svg" width={100} height={100} className="size-5" alt="React Native Logo" />
    </a>
  ),
  React: () => (
    <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
      <Image src="/icons/react.svg" width={100} height={100} className="size-5" alt="React Logo" />
    </a>
  ),
  Vite: () => (
    <a target="_blank" rel="noreferrer" href="https://vitejs.dev/">
      <Image src="/icons/vite.svg" width={100} height={100} className="size-5" alt="Vite Logo" />
    </a>
  ),
  C: () => (
    <Image src="/icons/c.svg" width={100} height={100} className="size-5" alt="C Logo" />
  ),
  CPlus: () => (
    <Image src="/icons/cplus.svg" width={100} height={100} className="size-5" alt="C++ Logo" />
  ),
  Python: () => (
    <a target="_blank" rel="noreferrer" href="https://www.python.org/">
      <Image src="/icons/python.svg" width={100} height={100} className="size-5" alt="Python Logo" />
    </a>
  ),
  Golang: () => (
    <a target="_blank" rel="noreferrer" href="https://golang.org/">
      <Image src="/icons/golang.svg" width={100} height={100} className="size-5" alt="Golang Logo" />
    </a>
  ),
  Vercel: () => (
    <a target="_blank" rel="noreferrer" href="https://vercel.com/">
      <Image src="/icons/vercel-dark.svg" width={100} height={100} className="hidden size-5 dark:block" alt="Vercel Logo" />
      <Image src="/icons/vercel.svg" width={100} height={100} className="block size-5 dark:hidden" alt="Vercel Logo" />
    </a>
  ),
  CSharp: () => (
    <a target="_blank" rel="noreferrer" href="https://dotnet.microsoft.com/en-us/languages/csharp">
      <Image src="/icons/csharp.svg" width={100} height={100} className="size-5" alt="CSharp Logo" />
    </a>
  ),
  PowerShell: () => (
    <a target="_blank" rel="noreferrer" href="https://docs.microsoft.com/en-us/powershell/">
      <Image src="/icons/powershell.svg" width={100} height={100} className="size-5" alt="PowerShell Logo" />
    </a>
  ),
  Electron: () => (
    <a target="_blank" rel="noreferrer" href="https://www.electronjs.org/">
      <Image src="/icons/electron.svg" width={100} height={100} className="size-5" alt="Electron Logo" />
    </a>
  ),
  Tauri: () => (
    <a target="_blank" rel="noreferrer" href="https://tauri.app/">
      <Image src="/icons/tauri.svg" width={100} height={100} className="size-5" alt="Tauri Logo" />
    </a>
  ),
  Hono: () => (
    <a target="_blank" rel="noreferrer" href="https://hono.dev/">
      <Image src="/icons/hono.svg" width={100} height={100} className="size-5" alt="Hono Logo" />
    </a>
  ),
  DotNET: () => (
    <a target="_blank" rel="noreferrer" href="https://asp.net/">
      <Image src="/icons/net.svg" width={100} height={100} className="size-5" alt=".NET Logo" />
    </a>
  )
};

const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const IconComponent = iconMap[name];

  return <IconComponent />;
};

export default TechIcon;
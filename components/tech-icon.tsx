import Image from "next/image";

interface TechIconProps {
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const iconMap: Record<string, React.FC> = {
    Tailwind: () => (
      <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
        <Image src="/tailwind.svg" width={100} height={100} className="size-5" alt="Tailwind Logo" />
      </a>
    ),
    Svelte: () => (
      <a target="_blank" rel="noreferrer" href="https://kit.svelte.dev/">
        <Image src="/svelte.svg" width={100} height={100} className="size-5" alt="Svelte Logo" />
      </a>
    ),
    Nextjs: () => (
      <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
        <Image src="/nextjs.svg" width={100} height={100} className="size-5" alt="Nextjs Logo" />
      </a>
    ),
    Rust: () => (
      <a target="_blank" rel="noreferrer" href="https://www.rust-lang.org/">
        <Image src="/rust.svg" width={100} height={100} className="size-5 dark:invert" alt="Rust Logo" />
      </a>
    ),
    Typescript: () => (
      <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
        <Image src="/typescript.svg" width={100} height={100} className="size-5" alt="Typescript Logo" />
      </a>
    ),
    Javascript: () => (
      <Image src="/javascript.svg" width={100} height={100} className="size-5" alt="Javascript Logo" />
    ),
    Swift: () => (
      <a target="_blank" rel="noreferrer" href="https://www.swift.org/">
        <Image src="/swift.svg" width={100} height={100} className="size-5" alt="Swift Logo" />
      </a>
    ),
    Astro: () => (
      <a target="_blank" rel="noreferrer" href="https://astro.build/">
        <Image src="/astro.svg" width={100} height={100} className="hidden size-5 dark:block" alt="Rust Logo" />
        <Image src="/astro-dark.svg" width={100} height={100} className="block size-5 dark:hidden" alt="Astro Logo" />
      </a>
    ),
    ReactNative: () => (
      <a target="_blank" rel="noreferrer" href="https://reactnative.dev/">
        <Image src="/react.svg" width={100} height={100} className="size-5" alt="ReactNative Logo" />
      </a>
    )
  };

  const IconComponent = iconMap[name] || (() => null);

  return <IconComponent />;
};

export default TechIcon;
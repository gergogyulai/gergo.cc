import Image from "next/image";

interface TechIconProps {
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const iconMap: Record<string, React.FC> = {
    Tailwind: () => (
      <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
        <Image src="/icons/tailwind.svg" width={100} height={100} className="size-5" alt="Tailwind Logo" />
      </a>
    ),
    Svelte: () => (
      <a target="_blank" rel="noreferrer" href="https://kit.svelte.dev/">
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
        <Image src="/typescript.svg" width={100} height={100} className="size-5" alt="Typescript Logo" />
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
        <Image src="/icons/astro.svg" width={100} height={100} className="hidden size-5 dark:block" alt="Rust Logo" />
        <Image src="/icons/astro-dark.svg" width={100} height={100} className="block size-5 dark:hidden" alt="Astro Logo" />
      </a>
    ),
    ReactNative: () => (
      <a target="_blank" rel="noreferrer" href="https://reactnative.dev/">
        <Image src="/icons/react.svg" width={100} height={100} className="size-5" alt="ReactNative Logo" />
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
    )
  };

  const IconComponent = iconMap[name] || (() => null);

  return <IconComponent />;
};

export default TechIcon;
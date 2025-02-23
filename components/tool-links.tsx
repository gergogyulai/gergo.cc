import Image from 'next/image';
import Link from 'next/link';

export type Tool = {
  href: string;
  src: string;
  alt: string;
  darkSrc?: string;
};

export default function ToolLink({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col justify-center items-center ring-border ring-1 h-20 w-20 sm:h-24 sm:w-24 rounded-lg transition-colors relative shadow-md group select-none">
        {tool.darkSrc ? (
          <>
            <Image
              src={tool.src}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-150 group-hover:scale-125 dark:hidden"
            />
            <Image
              src={tool.darkSrc}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-150 group-hover:scale-125 hidden dark:block"
            />
            <Image
              src={tool.src}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 absolute dark:hidden"
            />
            <Image
              src={tool.darkSrc}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 absolute hidden dark:block"
            />
          </>
        ) : (
          <>
            <Image
              src={tool.src}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-150 group-hover:scale-125"
            />
            <Image
              src={tool.src}
              alt={tool.alt}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-12 sm:w-12 absolute"
            />
          </>
        )}
        <span className="sr-only">{tool.alt}</span>
      </div>
    </Link>
  );
}
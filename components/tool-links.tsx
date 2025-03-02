"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

export type Tool = {
  href: string;
  src: string;
  alt: string;
  darkSrc?: string;
};

export default function ToolLink({ tool }: { tool: Tool }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring physics for smoother movement
  const springConfig = { damping: 80, stiffness: 340 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Transform x/y values for parallax effect
  const rotateX = useTransform(ySpring, [-100, 100], [3, -3]);
  const rotateY = useTransform(xSpring, [-100, 100], [-3, 3]);

  // Create a shadow movement that's slightly offset
  const xShadow = useTransform(xSpring, v => v * 0.25);
  const yShadow = useTransform(ySpring, v => v * 0.25);
  
  // Create extremely subtle foreground movement
  const xForeground = useTransform(xSpring, v => v * 0.15);
  const yForeground = useTransform(ySpring, v => v * 0.15);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the center of the card
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    // Reset position on mouse leave
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Link href={tool.href} target="_blank" rel="noopener noreferrer">
      <motion.div 
        className="flex flex-col justify-center items-center ring-border ring-1 h-20 w-20 sm:h-24 sm:w-24 rounded-lg transition-colors relative shadow-md group select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          z: 100,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        {tool.darkSrc ? (
          <>
            {/* Shadow layer */}
            <motion.div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ 
                scale: isHovered ? 1.08 : 1.03, // Reduced from 1.15/1.05 to 1.08/1.03
                x: xShadow,
                y: yShadow,
                transition: "scale 0.3s ease-out", // Slowed down for more subtlety
                zIndex: 1
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125 dark:hidden"
              />
              <Image
                src={tool.darkSrc}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125 hidden dark:block"
              />
            </motion.div>
            
            {/* Foreground layer */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                x: xForeground,
                y: yForeground,
                scale: 1,
                transition: "all 0.2s ease-out", // Slowed down slightly
                zIndex: 2
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 dark:hidden"
              />
              <Image
                src={tool.darkSrc}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 hidden dark:block"
              />
            </motion.div>
          </>
        ) : (
          <>
            {/* Shadow layer */}
            <motion.div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ 
                scale: isHovered ? 1.08 : 1.03,
                x: xShadow,
                y: yShadow,
                transition: "scale 0.3s ease-out",
                zIndex: 1
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12 blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125"
              />
            </motion.div>
            
            {/* Foreground layer */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                x: xForeground,
                y: yForeground,
                scale: 1,
                transition: "all 0.2s ease-out",
                zIndex: 2
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className="h-8 w-8 sm:h-12 sm:w-12"
              />
            </motion.div>
          </>
        )}
        <span className="sr-only">{tool.alt}</span>
      </motion.div>
    </Link>
  );
}
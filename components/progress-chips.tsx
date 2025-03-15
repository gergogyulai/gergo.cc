"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProgressChipProps {
  name: ChipStatus;
}

export type ChipStatus =
  | "Archived"
  | "Unknown"
  | "InProgress"
  | "Shipped"
  | "Planning"
  | "Abandoned"
  | "Repo"
  | "OnHold"
  | "Discontinued";

const chipMap = {
  Archived: () => (
    <div className="flex items-center justify-center rounded-lg bg-neutral-300 px-2 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
      <span>Archived</span>
    </div>
  ),
  Unknown: () => (
    <div className="flex items-center justify-center rounded-lg bg-neutral-300 px-2 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
      <span>Unkown</span>
    </div>
  ),
  InProgress: () => (
    <div className="flex items-center justify-center rounded-lg bg-indigo-300 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200">
      <span>In Progress</span>
    </div>
  ),
  Shipped: () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div 
        className="relative flex items-center justify-center rounded-lg bg-green-200 px-2 py-1 text-xs font-medium text-green-800 ring-2 ring-inset ring-green-300 dark:bg-green-900 dark:text-green-300 dark:ring-green-700 cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {isHovering && (
          <motion.div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 222, 128, 0.8) 0%, rgba(134, 239, 172, 0.3) 40%, transparent 70%)`,
              pointerEvents: "none"
            }}
          />
        )}
        <span className="relative z-10">Shipped</span>
      </motion.div>
    );
  },
  Planning: () => (
    <div className="flex items-center justify-center rounded-lg bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      <span>Planning Phase</span>
    </div>
  ),
  Abandoned: () => (
    <div className="flex items-center justify-center rounded-lg bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
      <span>Abandoned</span>
    </div>
  ),
  Repo: () => (
    <div className="flex items-center justify-center rounded-lg bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
      <span>Repository</span>
    </div>
  ),
  OnHold: () => (
    <div className="flex items-center justify-center rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-300">
      <span>On Hold</span>
    </div>
  ),
  Discontinued: () => (
    <div className="flex items-center justify-center rounded-lg bg-rose-100 px-2 py-1 text-xs font-medium text-rose-800 dark:bg-rose-900 dark:text-rose-300">
      <span>Discontinued</span>
    </div>
  ),
};

export const ProgressChip: React.FC<ProgressChipProps> = ({ name }) => {
  const ChipComponent = chipMap[name];

  return <ChipComponent />;
};

export default ProgressChip;

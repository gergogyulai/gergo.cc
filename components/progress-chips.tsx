import React from 'react';

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
      <div className="flex items-center justify-center rounded-lg bg-violet-300 px-2 py-1 text-xs font-medium text-violet-800 dark:bg-violet-800 dark:text-violet-200">
        <span>In Progress</span>
      </div>
    ),
    Shipped: () => (
      <div className="flex items-center justify-center rounded-lg bg-green-200 px-2 py-1 text-xs font-medium text-green-800 ring-2 ring-inset ring-green-300 dark:bg-green-900 dark:text-green-300 dark:ring-green-700">
        <span>Shipped</span>
      </div>
    ),
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
      <div className="flex items-center justify-center rounded-lg bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-300">
        <span>Repository</span>
      </div>
    ),
    OnHold: () => (
      <div className="flex items-center justify-center rounded-lg bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
        <span>On Hold</span>
      </div>
    )
};

export const ProgressChip: React.FC<ProgressChipProps> = ({ name }) => {
    const ChipComponent = chipMap[name];

    return <ChipComponent />;
};

export default ProgressChip 
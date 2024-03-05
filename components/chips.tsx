import React from 'react';

export interface ChipStatusProps {
  status: keyof typeof chipMap;
}

const chipMap = {
  Archived: () => (
    <div className="flex items-center justify-center rounded-lg bg-neutral-300 px-2 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
      <span>archived</span>
    </div>
  ),
  Unknown: () => (
    <div className="flex items-center justify-center rounded-lg bg-neutral-300 px-2 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
      <span>unknown</span>
    </div>
  ),
  InProgress: () => (
    <div className="flex items-center justify-center rounded-lg bg-green-200 px-2 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
      <span>in progress</span>
    </div>
  ),
  Completed: () => (
    <div className="flex items-center justify-center rounded-lg bg-violet-300 px-2 text-xs font-medium text-violet-800 dark:bg-violet-800 dark:text-violet-200">
      <span>completed</span>
    </div>
  ),
  Planning: () => (
    <div className="flex items-center justify-center rounded-lg bg-blue-100 px-2 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      <span>planning phase</span>
    </div>
  ),
  Abandoned: () => (
    <div className="flex items-center justify-center rounded-lg bg-red-100 px-2 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
      <span>abandoned</span>
    </div>
  )
};

export const Chip: React.FC<ChipStatusProps> = ({ status }) => {
  const ChipComponent = chipMap[status] || (() => null);

  return <ChipComponent />;
};
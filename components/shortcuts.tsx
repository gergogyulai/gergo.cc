"use client"

import React from 'react';
import { siteConfig } from "@/config/site"

export default function Shortcuts() {
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === 'g') {
        window.open(siteConfig.links.github, '_blank');
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, []);

  return null;
}
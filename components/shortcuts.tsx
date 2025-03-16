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

      if (event.key === 'w') {
        navigator.clipboard.writeText("irm https://wtb.gergo.cc | iex").then(() => {
          console.log('Text copied to clipboard');
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, []);

  return null;
}
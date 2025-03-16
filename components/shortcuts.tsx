"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

export default function Shortcuts() {
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "g") {
        window.open(siteConfig.links.github, "_blank");
      }

      if (event.key === "w") {
        navigator.clipboard
          .writeText("irm https://wtb.gergo.cc | iex")
          .then(() => {
            console.log("Text copied to clipboard");
            toast.success("Copied to clipboard", {
              description: "WTB Command has been copied to your clipboard",
              position: "bottom-right",
              duration: 2000,
            });
          })
          .catch((err) => {
            console.error("Could not copy text: ", err);
            toast.error("Failed to copy", {
              description: "Please try again",
            });
          });
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  return null;
}

"use client"

import React, { useRef, useEffect, useState } from "react";
import type { P5I } from "p5i";

const DotArt: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initCanvas = async () => {
      const { p5i } = await import("p5i");
      
      let w = window.innerWidth;
      let h = window.innerHeight;
      let offsetY = window.scrollY;

      const SCALE = 200;
      const LENGTH = 10;
      const SPACING = 15;

      const {
        mount,
        unmount,
        createCanvas,
        background,
        noFill,
        stroke,
        noise,
        noiseSeed,
        resizeCanvas,
        cos,
        sin,
        TWO_PI,
      } = p5i();

      const existingPoints = new Set<string>();
      const points: { x: number; y: number; opacity: number }[] = [];

      function getForceOnPoint(x: number, y: number, z: number) {
        return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI;
      }

      function addPoints() {
        for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
          for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
            const id = `${x}-${y}`;
            if (existingPoints.has(id)) continue;
            existingPoints.add(id);
            points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
          }
        }
      }

      function setup() {
        createCanvas(w, h);
        background("#ffffff");
        stroke("#ccc");
        noFill();

        noiseSeed(+new Date());

        addPoints();
      }

      function draw({ circle }: P5I) {
        background("#ffffff");
        const t = +new Date() / 10000;

        for (const p of points) {
          const { x, y } = p;
          const rad = getForceOnPoint(x, y, t);
          const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
          const nx = x + cos(rad) * length;
          const ny = y + sin(rad) * length;

          stroke(
            200,
            200,
            200,
            (Math.abs(cos(rad)) * 0.8 + 0.2) * p.opacity * 255
          );
          circle(nx, ny - offsetY, 1);
        }
      }

      function restart() {
        if (containerRef.current) {
          mount(containerRef.current, { setup, draw });
        }
      }

      restart();

      const handleResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        resizeCanvas(w, h);
        addPoints();
      };

      window.addEventListener("resize", handleResize);

      // Cleanup when component unmounts.
      return () => {
        window.removeEventListener("resize", handleResize);
        // window.removeEventListener("scroll", handleScroll);
        unmount();
      };
    };

    initCanvas();
  }, [isClient]);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 right-0 top-0 bottom-0 pointer-events-none dark:invert"
      style={{ zIndex: -1 }}
    />
  );
};

export default DotArt;
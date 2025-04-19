"use client";

import { KeyboardShortcut } from "@/components/keyboard-shortcut";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { item, sectionContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function ProjectsPage() {
  const isOdd = (index: number) => index % 2 === 0;
  return (
    <motion.div variants={sectionContainer} initial="hidden" animate="show">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={"/"}>
            <Button variant={"outline"} className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back
              <KeyboardShortcut shortcut="B" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.links.github + "?tab=repositories"}
            target="_blank"
            className="hidden lg:block"
          >
            <Button variant={"outline"} className="flex items-center gap-2">
              View all on GitHub
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={item} custom={index}>
            <ProjectCard project={project} index={0} />
          </motion.div>
        ))}
        {projects.length % 2 !== 0 && (
          <motion.div
            key="placeholder"
            variants={item}
            custom={projects.length}
            className="hidden lg:block"
          >
            <ProjectCard
              project={{
                title: "There's always one more project",
                description: "No such thing as too many, right?",
                tags: [],
              }}
              index={0}
              className="text-foreground/50"
            />
          </motion.div>
        )}
        <div className="flex items-center gap-2 w-full justify-center">
          <Link
            href={siteConfig.links.github + "?tab=repositories"}
            target="_blank"
            className="block lg:hidden"
          >
            <Button variant={"ghost"} className="flex items-center gap-2">
              View all on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

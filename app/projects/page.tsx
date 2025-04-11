"use client";

import { KeyboardShortcut } from "@/components/keyboard-shortcut";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/config/projects";
import { item, sectionContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <motion.div variants={sectionContainer} initial="hidden" animate="show">
      <div className="mb-8 flex items-center gap-2 md:gap-4">
        <Link href={"/"}>
          <Button variant={"outline"} className="flex items-center gap-2">
            <ArrowLeft size={18} />
            Back
            <KeyboardShortcut shortcut="B" />
          </Button>
        </Link>
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={item} custom={index}>
            <ProjectCard project={project} index={0} key={project.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

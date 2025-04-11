"use client";

import ProjectCard from "@/components/project-card";
import { projects } from "@/config/projects";
import { item, sectionContainer } from "@/lib/motion";
import { motion } from "framer-motion";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <motion.div
      variants={sectionContainer}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={item} custom={index}>
            <ProjectCard project={project} index={0} key={project.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

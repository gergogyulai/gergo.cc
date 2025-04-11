"use client";

import ProjectCard from "@/components/project-card";
import { projects } from "@/config/projects";
import { motion } from "framer-motion";

export const dynamic = "force-static";

export default function ProjectsPage() {
  const sectionContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.03,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

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

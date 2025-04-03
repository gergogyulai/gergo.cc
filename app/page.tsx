"use client";

import NameCard from "@/components/namecard";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { tools } from "@/config/tools";
import { projects } from "@/config/projects";
import ProjectCard from "@/components/project-card";
import ToolLink, { Tool } from "@/components/tool-links";
import { motion } from "framer-motion";

export const dynamic = "force-static" 

export default function Homepage() {
  const pageContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.07,
      },
    },
  };

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

  const toolsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02,
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
    <motion.section
      className="flex flex-col gap-16 max-w-4xl mx-auto"
      variants={pageContainer}
      initial="hidden"
      animate="show"
    >
      {/* Header Section */}
      <motion.div className="space-y-4 max-w-4xl" variants={sectionContainer}>
        <motion.div className="flex justify-between" variants={item}>
          <NameCard />
          <SiteHeader />
        </motion.div>
        <motion.p
          className="text-muted-foreground line-clamp-4"
          variants={item}
        >
          I&#39;m Gergo, a developer. I aspire to build fast, accessible, user-friendly
          apps, mostly for the web.
        </motion.p>
      </motion.div>

      {/* Stack Section */}
      <motion.div className="space-y-4" variants={sectionContainer}>
        <motion.div className="space-y-1" variants={item}>
          <h3 className="text-2xl font-bold">My ever-evolving stack:</h3>
          <div className="space-y-2">
            {/* <p className="text-muted-foreground">
              {
                "These are the technologies and tools I use to craft websites and applications. I prioritize minimalism and efficiency, keeping my stack lean and effective."
              }
            </p> */}
            <p className="text-muted-foreground">
              {
                "Always exploring cutting-edge technologies, so my stack evolves constantly as I refine my workflow and adopt new tools."
              }
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full"
          variants={toolsContainer}
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.href} 
              variants={item}
              className="absolute transform"
              style={{
                left: `${tool.position.x+2}%`,
                top: `${tool.position.y}%`,
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <ToolLink tool={tool as Tool} size={tool.size as "sm" | "md" | "lg"} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div className="space-y-6 max-w-4xl" variants={sectionContainer}>
        <motion.div className="space-y-1" variants={item}>
          <h3 className="text-2xl font-bold">Some of my projects:</h3>
          <p className="text-muted-foreground">
            Here are some of my more notable projects I&apos;ve worked on.
          </p>
        </motion.div>
        <motion.div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={item} custom={index}>
              <ProjectCard project={project} index={0} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex w-full justify-center items-center"
          variants={item}
        >
          <Link href="https://github.com/gergogyulai" target="_blank">
            <Button variant={"ghost"}>More on GitHub</Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

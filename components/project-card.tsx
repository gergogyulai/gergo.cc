"use client";

import React from "react";
import { BookMarked, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TechIcon from "@/components/tech-icon";
import ProgressChip from "@/components/progress-chips";
import { type Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { HighlightedBadge } from "./highlighted-badge";
import { cn } from "@/lib/utils";
const ProjectCard = ({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("flex flex-row justify-between ring-1 ring-border h-32 w-full rounded-lg shadow-sm backdrop-blur-[2px] py-4 px-4", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.02,
      }}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          {project.href && (
            <Link href={project.href} target="_blank">
              <h4 className="font-medium text-lg">{project.title}</h4>
            </Link>
          )}
          {!project.href && (
            <h4 className="font-medium text-lg">{project.title}</h4>
          )}
          <p className=" text-sm text-muted-foreground line-clamp-2 pr-16">
            {project.description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            {project.tags &&
              project.tags.map((tag) => <TechIcon name={tag} key={tag} />)}
          </div>
          {/* {project.highlighted && <HighlightedBadge />} */}
          <div>{project.status && <ProgressChip name={project.status} />}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {project.href && (
          <Link href={project.href} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              <Globe className="size-5" />
              <span className="sr-only">Visit Webapp</span>
            </Button>
          </Link>
        )}
        {project.githubRepo && (
          <Link href={project.githubRepo} target="_blank">
            <Button variant={"ghost"} size={"icon"}>
              <BookMarked className="size-5" />
              <span className="sr-only">Repository on GitHub</span>
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

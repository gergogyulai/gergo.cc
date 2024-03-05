import { Chip } from "@/components/chips";
import TechIcon from "@/components/tech-icon";
import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    tech?: string[];
    status: "Archived" | "Unknown" | "InProgress" | "Completed" | "Planning" | "Abandoned";
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status, link, tech }) => {
    return (
        <>
            <div className="">
                <div className="inline-flex gap-2">
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-medium underline underline-offset-2">
                            {title}
                        </a>
                    ) : (
                        <p className="font-medium underline underline-offset-2">
                            {title}
                        </p>
                    )}
                    <Chip status={status} />
                    <div className="flex h-6 items-center justify-center gap-2">
                        {tech && tech.map((item, index) => (
                            <TechIcon key={index} name={item} />
                        ))}
                    </div>
                </div>
                <p className="font-medium text-black/60 dark:text-white/60">
                    {description}
                </p>
            </div>
        </>
    );
}

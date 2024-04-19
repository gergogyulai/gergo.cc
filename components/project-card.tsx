import React from "react";

import { Chip } from "@/components/chips";
import TechIcon from "@/components/tech-icon";
import { ProjectHoverCard } from "./project-hover-card";

interface ProjectCardProps {
    title: string;
    description: string;
    tech?: string[];
    status: "Archived" | "Unknown" | "InProgress" | "Completed" | "Planning" | "Abandoned" | "Repo" | "OnHold";
    sitelink?: string;
    repolink?: string;
    docslink?: string;
    disableHoverCard?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status, tech, sitelink, repolink, docslink, disableHoverCard }) => {
    return (
        <>
            { !disableHoverCard ? (
                <ProjectHoverCard title={title} description={description} status={status} tech={tech} sitelink={sitelink} docslink={docslink} repolink={repolink}>
                    <div className="max-w-lg">
                        <div className="inline-flex gap-2">
                            { sitelink ? (
                                <a href={sitelink} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-medium underline underline-offset-2">
                                    {title}
                                </a>
                            ) : repolink ? (
                                <a href={repolink} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-medium underline underline-offset-2">
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
                        <p className="line-clamp-2 font-medium text-black/60 dark:text-white/60">
                            {description}
                        </p>
                    </div>
                </ProjectHoverCard>
            ) : (
                <div className="max-w-lg">
                    <div className="inline-flex gap-2">
                        {sitelink ? (
                            <a href={sitelink} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-medium underline underline-offset-2">
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
                    <p className="line-clamp-2 font-medium text-black/60 dark:text-white/60">
                        {description}
                    </p>
                </div>
            )}
        </>
    );
}

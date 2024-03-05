"use client"

import { Chip } from "@/components/chips";
import TechIcon from "@/components/tech-icon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


interface ProjectCardProps {
    title: string;
    description: string;
    tech?: string[];
    status: "Archived" | "Unknown" | "InProgress" | "Completed" | "Planning" | "Abandoned";
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status, link, tech }) => {
    const handleClick = () => {
        if (link) {
            // Redirect to the provided link if available
            window.open(link, "_blank");
        }
    };

    return (
        <>
        {/* <HoverCard>
            <HoverCardTrigger> */}
                <div className="">
                    <div className="inline-flex gap-2">
                        <p className={link ? "cursor-pointer font-medium underline underline-offset-2" : "font-medium underline underline-offset-2"} onClick={handleClick}>
                            {title}
                        </p>
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
            {/* </HoverCardTrigger>
            <HoverCardContent>
            </HoverCardContent>
        </HoverCard> */}
        </>
    );
}
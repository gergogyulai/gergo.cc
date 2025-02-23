import NameCard from "@/components/namecard";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { tools } from "@/config/tools";
import { projects } from "@/config/projects";
import ProjectCard from "@/components/project-card";
import ToolLink from "@/components/tool-links";

export default function Homepage() {
  return (
    <section className="flex flex-col gap-16">
      <div className="space-y-4 max-w-4xl">
        <div className="flex justify-between">
          <NameCard/>
          <SiteHeader/>
        </div>
        <p className="text-muted-foreground line-clamp-4">
          I&#39;m Gergo, a developer. I build fast, accessible, user-friendly websites and apps. I build things for the web.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">
            My Stack:
          </h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">
            {"These are the technologies and tools I use to craft websites and applications. I prioritize minimalism and efficiency, keeping my stack lean and effective."}
            </p>
            <p className="text-muted-foreground">
              {"Always exploring cutting-edge technologies, so my stack evolves constantly as I refine my workflow and adopt new tools."}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap lg:flex-nowrap">
          {tools.map((tool) => (
            <ToolLink key={tool.href} tool={tool} />
          ))}
        </div>
      </div>


      <div className="space-y-6 max-w-4xl">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">
            My Projects:
          </h3>
          <p className="text-muted-foreground">
            Here are some of my projects I&apos;ve worked on.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title}/>
          ))}
        </div>
        <div className="flex w-full justify-center items-center">
          <Link href="https://github.com/gergogyulai" target="_blank">
            <Button variant={"ghost"}>
              More on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

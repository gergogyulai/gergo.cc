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
          I&#39;m Gergo, an indie developer and &quot;designer&quot;. I build fast, accessible, user-friendly websites and apps. I love learning, growing, and minimalism.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl">
        <div>
          <h3 className="text-2xl font-bold">
            Technologies and Tools by me
          </h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Here are some technologies and tools I use to build websites and applications. I prefer minimalism and simplicity, so I keep my tech stack simple.
            </p>
            <p className="text-muted-foreground">
              I use bleeding-edge technologies and tools most of the time, so my tech stack is always evolving.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap lg:flex-nowrap">
          {tools.map((tool) => (
            <ToolLink key={tool.href} tool={tool} />
          ))}
        </div>
      </div>


      <div className="space-y-4 max-w-4xl">
        <div>
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
        <div>
          <Link href="https://github.com/gergogyulai" target="_blank">
            <Button variant={"ghost"}>
              View even more projects
            </Button>
          </Link>
          <Link href="mailto:hello@gergo.cc">
            <Button variant={"ghost"}>
              hello@gergo.cc
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

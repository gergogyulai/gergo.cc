import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"


export default function IndexPage() {
  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-left text-2xl font-bold tracking-tighter">
            Gergo
            <span className="ml-2 text-black/50 dark:text-white/60">/ˈɡɛr.ɡøː/</span>
          </h1>
          <SiteHeader />
        </div>
        <div className="flex flex-col gap-4 lowercase">
          <ProjectCard title="satori" description="school timetable web application built with svelte(kit)" status="InProgress" link="https://satori.one" tech={["Svelte", "Tailwind"]} />
          <ProjectCard title="satori mobile" description="school timetable mobile application" status="Planning" link="https://app.satori.one" tech={["Astro", "Tailwind"]}/>
          <ProjectCard title="sideron" description="a cli written in rust tool for managing vercel edgeconfig objects" status="InProgress" tech={["Rust"]} />
          <ProjectCard title="lofiplayer" description="minimally designed webapp for listening to 24/7 lofi radios" status="Archived" link="https://lofiplayer.live" tech={["Nextjs", "Tailwind"]} />
          <ProjectCard title="lofiplayer mobile" description="mobile version of lofiplayer.live" status="Abandoned" tech={["Nextjs", "Tailwind"]} />
        </div>
      </div>
      <div className="group fixed bottom-0 right-2">
      <Dialog>
        <DialogTrigger>
          <Icons.plusCircle className=" text-black/60 transition ease-in-out hover:scale-105 hover:text-black/40 active:scale-95 dark:text-white/60 dark:hover:text-white/40 "/>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Credits and Others</DialogTitle>
            <DialogDescription>
              <div>
                <span className=" font-medium">Built with:</span>
                <ul className="mb-1 ml-1 list-inside list-disc">
                  <li className="mb-1"><a className="underline" href="https://nextjs.org/">Nextjs</a></li>
                  <li className="mb-1"><a className="underline" href="https://tailwindcss.com/">Tailwind</a></li>
                  <li className="mb-1"><a className="underline" href="https://www.typescriptlang.org/">Typescript</a></li>
                  <li className="mb-1"><a className="underline" href="https://ui.shadcn.com/">shadcn/ui</a></li>
                </ul>
                <p>Deployed on <a className="underline" href="https://vercel.com">Vercel</a></p>
                <p>Heavily inspired by <a className=" underline" href="https://shadcn.com">shadcn.com</a></p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </main>
  )
}

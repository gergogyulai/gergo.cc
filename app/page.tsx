import { SiteHeader } from "@/components/site-header"
import { ProjectCard } from "@/components/project-card"
import { CreditsDialog } from "@/components/credits-dialog"

export default function IndexPage() {
    return (
        <main className="flex min-h-screen select-none flex-col items-center justify-between pt-24">
            <div className="flex flex-col justify-center gap-8">
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-left text-2xl font-bold tracking-tighter">
                            Gergo
                            <span className="ml-2 text-black/50 dark:text-white/60">/ˈɡɛr.ɡøː/</span>
                        </h1>
                        <SiteHeader />
                    </div>
                    <span className="font-medium text-black/50 dark:text-white/50">Trash code, but it works. (Sometimes)</span>
                </div>
                <div className="flex flex-col gap-4 lowercase">
                    <ProjectCard title="satori" description="school timetable web application built with svelte(kit)" status="InProgress" link="https://satori.one" tech={["Svelte", "Tailwind"]} />
                    <ProjectCard title="satori mobile" description="school timetable mobile application" status="Planning" link="https://app.satori.one" tech={["Astro", "Tailwind"]}/>
                    <ProjectCard title="sideron" description="a cli tool written in rust for managing vercel edgeconfig objects" status="InProgress" tech={["Rust"]} />
                    <ProjectCard title="minitools" description="a collection of small tools written tipically in python, created for occasional personal use." status="Repo" tech={["Python", "Javascript"]} />
                    <ProjectCard title="lofiplayer" description="minimally designed webapp for listening to 24/7 lofi radios" status="Archived" link="https://lofiplayer.live" tech={["Nextjs", "Tailwind"]} />
                    <ProjectCard title="lofiplayer mobile" description="mobile version of lofiplayer.live" status="Abandoned" tech={["Nextjs", "Tailwind"]} />
                </div>
            </div>
            <CreditsDialog/>
        </main>
    )
}

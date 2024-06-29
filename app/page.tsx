import { SiteHeader } from "@/components/site-header"
import { ProjectCard } from "@/components/project-card"
import { CreditsDialog } from "@/components/credits-dialog"
import NameCard from "@/components/namecard"

export default function IndexPage() {
    return (
        <main className="flex min-h-screen select-none flex-col items-center justify-between pt-24">
            <div className="flex flex-col justify-center gap-8">
                <div>
                    <div className="flex items-center justify-between">
                        <NameCard/>
                        <SiteHeader />
                    </div>
                    <span className="font-medium text-black/50 dark:text-white/50">Trash code, but it works. (Sometimes)</span>
                </div>
                <div className="flex flex-col gap-4 lowercase">
                    <ProjectCard 
                        title="satori" 
                        description="a simple, minimalistic school timetable web application" 
                        status="InProgress" 
                        sitelink="https://satori.one" 
                        tech={["Svelte", "Tailwind"]}
                    />
                    <ProjectCard 
                        title="satori mobile" 
                        description="school timetable mobile application" 
                        status="Planning" 
                        sitelink="https://app.satori.one" 
                        tech={["Astro", "Tailwind"]}
                    />
                    <ProjectCard 
                        title="sideron" 
                        description="a cli tool written in rust for managing vercel edgeconfig objects" 
                        status="InProgress" 
                        tech={["Rust"]}
                    />
                    <ProjectCard 
                        title="minitools" 
                        description="a collection of small tools written tipically in python, created for occasional personal use." 
                        status="Repo" 
                        repolink="https://github.com/gergogyulai/minitools"
                        tech={["Python", "Javascript"]}
                    />
                    <ProjectCard 
                        title="lofiplayer" 
                        description="minimally designed webapp for listening to 24/7 lofi radios" 
                        status="Archived" 
                        sitelink="https://lofiplayer.live" 
                        tech={["Nextjs", "Tailwind"]}
                    />
                    <ProjectCard 
                        title="lofiplayer mobile" 
                        description="mobile version of lofiplayer.live" 
                        status="Abandoned" 
                        tech={["Nextjs", "Tailwind"]}
                    />
                    <ProjectCard 
                        title="lumina" 
                        description="alternative simple, minimal and lightweight ui for truenas scale" 
                        status="OnHold" 
                        tech={["Svelte"]}
                    />
                    <ProjectCard 
                        title="movie-web-tv" 
                        description="a modified version of the original movie-web/movie-web optimized for smart tvs"
                        repoLink="https://github.com/gergogyulai/cloneall"
                        status="InProgress" 
                        tech={["React", "Vite", "Tailwind", "Typescript"]}
                    />
                    <ProjectCard
                      title="cloneall"
                      description="a simple cli tool written in go, to clone the whole github orgs/users"
                      status="Finished"
                      repoLink="https://github.com/gergogyulai/movie-web-tv"
                      tech={{}}
                    />
                </div>
            </div>
            <CreditsDialog/>
        </main>
    )
}

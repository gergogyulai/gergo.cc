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
          <div className="">
            <div className="inline-flex gap-2">
              <a
                className="font-medium underline underline-offset-2"
                href="https://satori.one"
              >
                satori.one
              </a>
              <div className="flex items-center justify-center rounded-lg bg-green-200 px-2 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <span>In Progress</span>
              </div>
              <div className="flex h-6 items-center gap-2">
                <a href="https://kit.svelte.dev/">
                  <Image src="/svelte.svg" width={100} height={100} className="size-5" alt="Svelte Logo" />
                </a>
                <a href="https://tailwindcss.com/">
                  <Image src="/tailwind.svg" width={100} height={100} className="size-6" alt="Tailwind Logo" />
                </a>
              </div>
            </div>
            <p className=" font-medium text-black/60 dark:text-white/60">
              school timetable web application built with svelte(kit)
            </p>
          </div>
          <div className="">
            <div className="inline-flex gap-2">
              <a
                className="font-medium underline underline-offset-2"
                href="https://app.satori.one"
              >
                satori mobile
              </a>
              <div className="flex items-center justify-center rounded-lg bg-blue-100 px-2 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                <span>planing phase</span>
              </div>
            </div>
            <p className=" font-medium text-black/60 dark:text-white/60">school timetable mobile application</p>
          </div>
          <div className="">
            <div className="inline-flex gap-2">
              <h1 className="font-medium underline underline-offset-2">sideron</h1>
              <div className="flex items-center justify-center rounded-lg bg-green-200 px-2 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <span>In Progress</span>
              </div>
              <div className="flex h-6 items-center justify-center gap-2">
                <a href="https://www.rust-lang.org/">
                  <Image src="/rust.svg" width={100} height={100} className="size-5 dark:invert" alt="Rust logo" />
                </a>
              </div>
            </div>
            <p className=" font-medium text-black/60 dark:text-white/60">
              a cli written in rust tool for managing vercel edgeconfig objects
            </p>
          </div>
          <div className="">
            <div className="inline-flex gap-2">
              <a
                href="https://lofiplayer.live"
                className="font-medium underline underline-offset-2"
              >
                lofiplayer.live
              </a>
              <div className="flex items-center justify-center rounded-lg bg-neutral-300 px-2 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                <span>Archived</span>
              </div>
              <div className="flex h-6 items-center justify-center gap-2">
                <a href="https://nextjs.org/">
                  <Image src="/nextjs.svg" width={100} height={100} className="size-5" alt="Rust logo" />
                </a>
              </div>
            </div>
            <p className=" font-medium text-black/60 dark:text-white/60">
              minimally designed webapp for listening to 24/7 lofi radios
            </p>
          </div>
          <div className="">
            <div className="inline-flex gap-2">
              <p
                className="font-medium underline underline-offset-2"
              >
                lofiplayer mobile
              </p>
              <div className="flex items-center justify-center rounded-lg bg-violet-300 px-2 text-xs font-medium text-violet-800 dark:bg-violet-800 dark:text-violet-200">
                <span>Archived</span>
              </div>
              <div className="flex h-6 items-center justify-center gap-2">
                <a href="https://nextjs.org/">
                  <Image src="/nextjs.svg" width={100} height={100} className="size-5" alt="Rust logo" />
                </a>
              </div>
            </div>
            <p className=" font-medium text-black/60 dark:text-white/60">
              mobile version of lofiplayer.live
            </p>
          </div>
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
              <span className=" font-medium">Built with:</span>
              <ul className="mb-1 ml-1 list-inside list-disc">
                <li className="mb-1"><a className="underline" href="https://nextjs.org/">Nextjs</a></li>
                <li className="mb-1"><a className="underline" href="https://tailwindcss.com/">Tailwind</a></li>
                <li className="mb-1"><a className="underline" href="https://www.typescriptlang.org/">Typescript</a></li>
                <li className="mb-1"><a className="underline" href="https://ui.shadcn.com/">shadcn/ui</a></li>
              </ul>
              <p>Deployed on <a className="underline" href="https://vercel.com">Vercel</a></p>
              <p>Heavily inspired by <a className=" underline" href="https://shadcn.com">shadcn.com</a></p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </main>
  )
}

"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"  

export default function NameCard() {
  return(
    <h1 className="group text-left text-3xl font-bold tracking-tighter">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex gap-2 items-center tracking-tighter leading-normal">
              <h1>Gergo</h1>
              <span className="text-muted-foreground transition-all duration-300 ease-in-out group-hover:tracking-wide dark:text-white/60">/{"ˈɡɛr.ɡøː/"}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm font-medium">{"gergo@gergo.cc"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </h1>
  )
}
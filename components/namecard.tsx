"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  

export default function NameCard() {
    return(
        <h1 className="group text-left text-2xl font-bold tracking-tighter">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        Gergo 
                        <span className="ml-2 text-black/50 transition-all duration-300 ease-in-out hover:tracking-wider group-hover:tracking-wider dark:text-white/60">/ˈɡɛr.ɡøː/</span>
                    </TooltipTrigger>
                    <TooltipContent>gergo@gergo.cc</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </h1>
    )
}
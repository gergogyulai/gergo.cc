"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  

export default function NameCard() {
    return(
        <h1 className="text-left text-2xl font-bold tracking-tighter group">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        Gergo 
                        <span className="ml-2 text-black/50 dark:text-white/60 hover:tracking-wider group-hover:tracking-wider transition-all ease-in-out duration-300">/ˈɡɛr.ɡøː/</span>
                    </TooltipTrigger>
                    <TooltipContent>gergo@gergo.cc</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </h1>
    )
}
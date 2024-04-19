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

export function CreditsDialog() {
    return (
        <div className="group fixed bottom-0 right-2">
            <Dialog>
                <DialogTrigger className={"cursor-pointer p-2 text-white/60 transition ease-in-out hover:text-white"}>
                    credits
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <h1>Credits and Others</h1>
                        </DialogTitle>
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
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <p>Heavily inspired by <a className=" underline" href="https://shadcn.com">shadcn.com</a></p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}



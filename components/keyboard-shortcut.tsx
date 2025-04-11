export function KeyboardShortcut({ shortcut }: { shortcut: string }) {
  return (
    <div className="hidden md:flex items-center gap-2">
      <span className="font-mono bg-muted px-1.5 py-0.5 rounded-[6px] leading-none border border-primary/10 flex items-center justify-center">
        {shortcut}
      </span>
    </div>
  );
}

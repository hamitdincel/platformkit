interface NavbarProps {
  activePlatformName: string;
}

export function Navbar({ activePlatformName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-cyber-border/80 bg-cyber-bg/95 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
            Platform Brand Kit Dashboard
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h2 className="text-xl font-futur font-semibold text-slate-50">
              {activePlatformName}
            </h2>
            <span className="rounded-full border border-cyber-border/80 bg-cyber-panel/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
              Cyberpunk · Dark · Neon
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              className="w-56 rounded-full border border-cyber-border/80 bg-cyber-panel/80 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-red/70"
              placeholder="Search templates…"
            />
            <span className="pointer-events-none absolute right-3 top-1.5 text-[10px] text-slate-500">
              ⌘K
            </span>
          </div>
          <button className="rounded-full border border-cyber-border/80 bg-cyber-panel/80 px-3 py-1.5 text-xs text-slate-300 hover:border-cyber-red/80 hover:text-cyber-red transition-colors">
            Export Kit
          </button>
        </div>
      </div>
    </header>
  );
}


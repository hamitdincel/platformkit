import { PlatformConfig } from "@/types/platform";
import { TemplateCard } from "./TemplateCard";
import clsx from "clsx";

interface PlatformCardProps {
  platform: PlatformConfig;
}

export function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <section
      className={clsx(
        "relative col-span-1 flex flex-col rounded-3xl border border-cyber-border/80 bg-cyber-panel/95 p-4 sm:p-5",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-1 ring-transparent"
      )}
      style={{
        boxShadow: `0 0 28px ${platform.brandColor}33`,
        borderColor: `${platform.brandColor}66`,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 blur"
        style={{
          backgroundImage: `linear-gradient(135deg, ${platform.brandColor}66, transparent)`,
        }}
      />
      <div className="relative flex items-start justify-between gap-3 pb-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            Platform
          </p>
          <h3
            className="mt-1 text-lg font-futur font-semibold"
            style={{ color: platform.brandColor }}
          >
            {platform.name}
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Avatar, banner, thumbnail & safe area templates.
          </p>
        </div>
        <div
          className={clsx(
            "mt-1 h-10 w-10 rounded-2xl border border-cyber-border/70 bg-black/80 cyber-grid",
            platform.accent === "red"
              ? "shadow-neon-red"
              : "shadow-neon-gold"
          )}
        />
      </div>
      <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2">
        {platform.templates.map((t) => (
          <TemplateCard
            key={t.kind}
            template={t}
            accent={platform.accent}
          />
        ))}
      </div>
    </section>
  );
}


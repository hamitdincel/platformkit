import { TemplateSpec } from "@/types/platform";
import clsx from "clsx";
import Image from "next/image";

interface TemplateCardProps {
  template: TemplateSpec;
  accent: "red" | "gold";
}

const kindToAspect: Record<string, string> = {
  avatar: "aspect-square",
  banner: "aspect-[16/9]",
  thumbnail: "aspect-[16/9]",
  safe: "aspect-[4/3]",
};

export function TemplateCard({ template, accent }: TemplateCardProps) {
  const aspectClass = kindToAspect[template.kind] ?? "aspect-[16/9]";
  const isAvatar = template.kind === "avatar" || template.dimensions === "800 × 800";

  return (
    <div className="relative flex flex-col rounded-2xl border border-cyber-border/80 bg-cyber-panel/90 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
      <div
        className={clsx(
          "absolute inset-x-4 top-0 h-px -translate-y-1 rounded-full bg-gradient-to-r",
          accent === "red"
            ? "from-cyber-red via-pink-500 to-cyber-red"
            : "from-cyber-gold via-yellow-300 to-cyber-gold"
        )}
      />
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            {template.label}
          </p>
          {template.dimensions && (
            <p className="mt-0.5 text-xs text-slate-300">
              {template.dimensions}
            </p>
          )}
        </div>
        {template.dimensions && (
          <span
            className={clsx(
              "rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide",
              accent === "red"
                ? "border-cyber-red/70 bg-cyber-red/10 text-cyber-red"
                : "border-cyber-gold/70 bg-cyber-gold/10 text-cyber-gold"
            )}
          >
            {template.dimensions}
          </span>
        )}
      </div>
      <div
        className={clsx(
          "relative overflow-hidden rounded-xl border border-cyber-border/80 bg-black/70",
          aspectClass
        )}
      >
        {isAvatar ? (
          <Image
            src="/avatar-placeholder.png"
            alt="Avatar preview"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 240px, 50vw"
            priority={false}
          />
        ) : (
          <div
            className={clsx(
              "absolute inset-0 bg-gradient-to-br flex items-center justify-center text-[11px] font-semibold tracking-wide uppercase",
              accent === "red"
                ? "from-cyber-red/40 via-cyber-red/5 to-cyber-gold/35 text-cyber-gold"
                : "from-cyber-gold/45 via-cyber-gold/8 to-cyber-red/35 text-cyber-red"
            )}
          >
            {template.kind === "banner" && "Banner Preview"}
            {template.kind === "thumbnail" && "Thumbnail Preview"}
            {template.kind === "safe" && "Safe Area Preview"}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
          Wireframe · Safe Zones
        </span>
        <button
          type="button"
          className={clsx(
            "rounded-full px-3 py-1 text-[11px] font-medium transition-all",
            accent === "red"
              ? "bg-cyber-red/10 text-cyber-red border border-cyber-red/60 hover:bg-cyber-red/25"
              : "bg-cyber-gold/10 text-cyber-gold border border-cyber-gold/60 hover:bg-cyber-gold/20"
          )}
        >
          Download
        </button>
      </div>
    </div>
  );
}


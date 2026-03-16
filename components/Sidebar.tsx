"use client";

import { PlatformConfig } from "@/types/platform";
import clsx from "clsx";

interface SidebarProps {
  platforms: PlatformConfig[];
  activePlatformId: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ platforms, activePlatformId, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 border-r border-cyber-border bg-cyber-bg/95 backdrop-blur-sm cyber-grid relative">
      <div className="cyber-scan absolute inset-0 pointer-events-none" />
      <div className="relative h-full flex flex-col">
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-sm font-semibold tracking-[0.35em] uppercase text-slate-400">
            Platform
          </h1>
          <p className="mt-1 text-lg font-futur font-semibold text-slate-50">
            Brand Kit
          </p>
        </div>
        <nav className="mt-2 flex-1 overflow-y-auto px-2 pb-4 space-y-1">
          {platforms.map((platform) => {
            const isActive = platform.id === activePlatformId;

            return (
              <button
                key={platform.id}
                onClick={() => onSelect(platform.id)}
                className={clsx(
                  "group relative w-full text-left rounded-xl border border-cyber-border/80 px-4 py-3 transition-all duration-150",
                  "bg-gradient-to-r from-transparent to-transparent hover:from-white/3 hover:to-cyber-red/5",
                  isActive && "border-transparent ring-1",
                )}
                style={
                  isActive
                    ? {
                        backgroundImage: `linear-gradient(90deg, ${platform.brandColor}33, transparent)`,
                        boxShadow: `0 0 18px ${platform.brandColor}55`,
                        borderColor: `${platform.brandColor}aa`,
                      }
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium"
                    style={{ color: platform.brandColor }}
                  >
                    {platform.name}
                  </span>
                  <span
                    className="ml-2 h-1.5 w-6 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${platform.brandColor}, ${platform.brandColor}aa)`,
                    }}
                  />
                </div>
                <p className="mt-1 text-[11px] text-slate-400 tracking-wide uppercase">
                  Templates · Safe Zones
                </p>
              </button>
            );
          })}
        </nav>
        <div className="px-4 pb-4 pt-2 border-t border-cyber-border/60 text-[11px] text-slate-500">
          v1.0 · Cyber UI Kit
        </div>
      </div>
    </aside>
  );
}


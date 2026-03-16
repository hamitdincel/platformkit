"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { PlatformCard } from "@/components/PlatformCard";
import type { PlatformConfig } from "@/types/platform";

const PLATFORMS: PlatformConfig[] = [
  {
    id: "youtube",
    name: "YouTube",
    accent: "red",
    brandColor: "#FF0000",
    templates: [
      { kind: "avatar", label: "Avatar Template", dimensions: "800 × 800" },
      { kind: "banner", label: "Channel Banner", dimensions: "2560 × 1440" },
      { kind: "thumbnail", label: "Video Thumbnail", dimensions: "1280 × 720" },
      { kind: "safe", label: "Safe Area Guides" },
    ],
  },
  {
    id: "twitch",
    name: "Twitch",
    accent: "gold",
    brandColor: "#9146FF",
    templates: [
      { kind: "avatar", label: "Avatar Template", dimensions: "800 × 800" },
      { kind: "banner", label: "Profile Banner", dimensions: "1200 × 480" },
      { kind: "thumbnail", label: "Stream Thumbnail", dimensions: "1280 × 720" },
      { kind: "safe", label: "Safe Area Guides" },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    accent: "red",
    brandColor: "#E1306C",
    templates: [
      { kind: "avatar", label: "Profile Picture", dimensions: "800 × 800" },
      { kind: "banner", label: "Story Cover", dimensions: "1080 × 1920" },
      { kind: "thumbnail", label: "Feed Post", dimensions: "1080 × 1080" },
      { kind: "safe", label: "Safe Area Guides" },
    ],
  },
  {
    id: "twitter",
    name: "Twitter",
    accent: "gold",
    brandColor: "#1DA1F2",
    templates: [
      { kind: "avatar", label: "Avatar Template", dimensions: "800 × 800" },
      { kind: "banner", label: "Profile Header", dimensions: "1500 × 500" },
      { kind: "thumbnail", label: "Media Card", dimensions: "1200 × 675" },
      { kind: "safe", label: "Safe Area Guides" },
    ],
  },
  {
    id: "discord",
    name: "Discord",
    accent: "red",
    brandColor: "#5865F2",
    templates: [
      { kind: "avatar", label: "Server Icon", dimensions: "512 × 512" },
      { kind: "banner", label: "Server Banner", dimensions: "960 × 540" },
      { kind: "thumbnail", label: "Event Cover", dimensions: "1920 × 1080" },
      { kind: "safe", label: "Safe Area Guides" },
    ],
  },
];

export default function Page() {
  const [activeId, setActiveId] = useState<string>(PLATFORMS[0]?.id ?? "youtube");
  const activePlatform =
    PLATFORMS.find((p) => p.id === activeId) ?? PLATFORMS[0];

  return (
    <div className="flex min-h-screen bg-black text-slate-100">
      <Sidebar
        platforms={PLATFORMS}
        activePlatformId={activeId}
        onSelect={setActiveId}
      />
      <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
        <Navbar activePlatformName={activePlatform.name} />
        <main className="flex-1 overflow-y-auto px-4 pb-8 pt-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-cyber-red" />
              All templates rendered in cyberpunk-safe layout grid.
            </div>
            <div className="flex gap-2 text-[10px] text-slate-500">
              <span className="rounded-full border border-cyber-border/70 px-2 py-0.5">
                4K Ready
              </span>
              <span className="rounded-full border border-cyber-border/70 px-2 py-0.5">
                Wireframe Only
              </span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <PlatformCard platform={activePlatform} />
            <PlatformCard platform={activePlatform} />
          </div>
        </main>
      </div>
    </div>
  );
}


export type TemplateKind = "avatar" | "banner" | "thumbnail" | "safe";

export interface TemplateSpec {
  kind: TemplateKind;
  label: string;
  dimensions?: string;
}

export interface PlatformConfig {
  id: string;
  name: string;
  accent: "red" | "gold";
  // Platform-specific brand primary color (e.g. YouTube red, Twitch purple)
  brandColor: string;
  templates: TemplateSpec[];
}


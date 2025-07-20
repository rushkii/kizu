import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Types } from "use-lanyard";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDiscordAvatar(user?: Types.DiscordUser) {
  if (!user) return "";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
}

export function getInitialName(user?: Types.DiscordUser) {
  if (!user) return "";
  const name = user.global_name ?? "";
  return name
    .split(" ")
    .map(function (item) {
      return item[0];
    })
    .join("");
}

export function getDiscordAssetUrl(appId?: string, assetId?: string) {
  if (!appId || !assetId) return "";
  return ddgImgProxy(`https://cdn.discordapp.com/app-assets/${appId}/${assetId}.png`);
}

export function getAssetUrl(value?: string | null) {
  if (!value) return "";

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return ddgImgProxy(value);
  }

  const match = value.match(/^mp:external\/[^\/]+\/(.+)/);
  if (!match) return "";

  return ddgImgProxy(match[1].replace(/^(https?)\//, "$1://"));
}

export function ddgImgProxy(src: string) {
  return "https://external-content.duckduckgo.com/iu/?u=" + src;
}

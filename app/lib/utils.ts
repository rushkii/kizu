import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDiscordAvatar(userId?: string, hash?: string | null) {
  return `https://cdn.discordapp.com/avatars/${userId}/${hash}.png`;
}

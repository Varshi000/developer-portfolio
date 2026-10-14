import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  try {
    return twMerge(clsx(inputs));
  } catch {
    return clsx(inputs);
  }
}

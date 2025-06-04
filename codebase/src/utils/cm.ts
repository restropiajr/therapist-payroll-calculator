import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cm = class merge (clsx + tailwind-merge)
export function cm(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

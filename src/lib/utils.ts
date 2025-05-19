import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
<<<<<<< HEAD
export const generateMembershipNumber = (): string => {
  const prefix = 'VOK';
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomNum}`;
};
=======
>>>>>>> b06fccbbc363e39cfd222c47d6a0fca4541e43ba

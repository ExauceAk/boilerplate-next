import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(response: Response): Promise<string> {
  const reader = response.body?.getReader();

  if (!reader) {
    throw new Error("No readable stream in response.body");
  }

  let data = "";

  while (true) {
    const result = await reader.read();
    const { done, value } = result;

    if (done) break;

    if (value) {
      data += new TextDecoder("utf-8").decode(value);
    }
  }

  return JSON.parse(data).message;
}

// Function to generate a random color based on the id
export function getColorById(id: string, bgColors: string[]) {
  const index = Math.abs(hashCode(id)) % bgColors.length;
  return bgColors[index];
}

// Function to generate a random color based on the id
export function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function fetchData(response: Response) {
  const reader = response.body?.getReader();
  let data = "";
  // @ts-ignore
  while (true) {
    // @ts-ignore
    const { done, value } = await reader?.read();

    if (done) {
      break;
    }

    data += new TextDecoder("utf-8").decode(value);
  }

  return JSON.parse(data).message;
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {},
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? (accurateSizes[i] ?? "Bytest") : (sizes[i] ?? "Bytes")
  }`;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

export function formatDataLength(length: number) {
  return length > 9 ? length : `0${length}`;
}

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function generateId(): string {
  // Generate unique id based on timestamp
  return Math.random().toString(36).substring(2, 9) + Math.random().toString(36).substring(2, 9);
}

export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  //@ts-ignore
  const seconds = Math.floor((now - date) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (let interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

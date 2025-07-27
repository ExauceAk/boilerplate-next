import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 *
 * @param {string} pageName - The page name
 * @param {React.ReactNode} children - All content to right of header
 * @returns
 */
export default function MainNav({
  pageName,
  children,
  className,
}: {
  pageName?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full justify-between bg-primary-base-white p-5 shadow-ta-xs", className)}>
      <p className="text-lg font-semibold text-primary-neutral-700">{pageName}</p>
      {children}
    </div>
  );
}

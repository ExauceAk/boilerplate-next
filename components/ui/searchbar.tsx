"use client";

import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";

const Searchbar = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <Search
        size={22}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-neutral-500"
      />

      <Input
        type="search"
        className={cn("h-11 border-transparent bg-primary-neutral-100 pl-10 placeholder:text-neutral-600", className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Searchbar.displayName = "Searchbar";

export { Searchbar };

"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const AccordionTrigger = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <div
        ref={ref}
        {...props}
        className="flex "
      >
        <div
          onClick={handleClick}
          className={cn("flex cursor-pointer items-center gap-x-2 py-1.5 font-medium transition-all", className)}
        >
          <div
            className={cn(
              "relative flex size-4 shrink-0 items-center justify-center rounded border-[1.5px] border-primary-neutral-700 transition-transform duration-200",
              isOpen ? " transform" : "",
            )}
          >
            <div className="h-0.5 w-2 bg-primary-neutral-500" />
            <p className={cn("absolute h-0.5 w-2 rotate-90 bg-primary-neutral-500", isOpen ? "hidden" : "")} />
          </div>

          {children}
        </div>
      </div>
    );
  },
);

AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;

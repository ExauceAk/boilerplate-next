import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "sidebar flex h-10 w-full resize-none rounded-md border-[1.5px] border-primary-neutral-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-primary-brand-500/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-brand-500/70 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
InputTextarea.displayName = "InputTextarea";

export { InputTextarea };

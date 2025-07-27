import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border-[1px] px-2 py-0.5 text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1",
  {
    variants: {
      variant: {
        default: "border-primary-neutral-300 bg-primary-neutral-50 text-primary-neutral-500 hover:bg-primary-neutral-100",
        primary: "border-primary-brand-300 bg-primary-brand-50 text-primary-brand-500 hover:bg-primary-brand-100",
        secondary: "border-feedback-success-300 bg-feedback-success-50 text-feedback-success-500 hover:bg-feedback-success-100",
        tertiary: "border-secondary-orange-300 bg-secondary-orange-50 text-secondary-orange-500 hover:secondary-orange-100",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

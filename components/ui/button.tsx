import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-primary-brand-500 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-brand-500 text-primary-base-white hover:bg-primary-brand-600",
        destructive: "border border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "border-[1.5px] border-primary-brand-300 text-primary-brand-500 bg-background hover:bg-primary-brand-50 hover:text-primary-brand-600",
        tertiary: "bg-background text-primary-brand-700 hover:bg-primary-brand-50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-neutral-600 underline-offset-4 hover:underline",
        outline: "border-[1.5px] border-slate-400 text-slate-500 hover:bg-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2 py-1",
        sm: "h-9 rounded-md px-3.5 py-2",
        md: "h-10 px-4 py-2.5",
        lg: "h-11 rounded-md px-[18p] py-2.5",
        xl: "h-12 rounded-md px-5 py-3",
        icon: "size-9",
        "icon-sm": "size-7",
        "icon-xs": "size-6",
        "icon-xxs": "size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

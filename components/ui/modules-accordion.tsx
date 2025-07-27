"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";

const ModulesAccordion = AccordionPrimitive.Root;

const ModulesAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
ModulesAccordionItem.displayName = "ModulesAccordionItem";

const ModulesAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center gap-x-2 py-1.5 font-medium transition-all hover:no-underline [&[data-state=closed]>.closed]:hidden [&[data-state=open]>.open]:hidden",
        className,
      )}
      {...props}
    >
      <div className="open relative flex size-4 shrink-0 items-center justify-center rounded border-[1.5px] border-primary-neutral-700 transition-transform duration-200">
        <div className="h-0.5 w-2 bg-primary-neutral-500" />
        <p className="absolute h-0.5 w-2 rotate-90 bg-primary-neutral-500" />
      </div>
      <div className="closed relative flex size-4 shrink-0 items-center justify-center rounded border-[1.5px] border-primary-neutral-700 transition-transform duration-200">
        <div className="h-0.5 w-2 bg-primary-neutral-500" />
      </div>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
ModulesAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const ModulesAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

ModulesAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { ModulesAccordion, ModulesAccordionContent, ModulesAccordionItem, ModulesAccordionTrigger };

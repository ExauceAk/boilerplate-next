"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { Input, InputProps } from "./input";

type Props = {
  eventProps?: SelectProps;
  inputProps?: InputProps;
};

export default function DurationInput({ eventProps, inputProps }: Props) {
  return (
    <div className="focus-within:ring-primary-400/30 flex items-center gap-1 rounded-md border focus-within:ring-1 focus-within:ring-offset-0 focus-within:ring-offset-background">
      <Input
        {...inputProps}
        type="number"
        className="border-none focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Duration number"
      />
      <Select
        {...eventProps}
        defaultValue="minutes"
      >
        <SelectTrigger className="h-11 w-32 border-none md:h-12">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="minutes">Minutes</SelectItem>
          <SelectItem value="hours">Hours</SelectItem>
          <SelectItem value="seconds">Seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { RefreshCw } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";

type Props = {
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
  queryKey?: string[];
  invalidateHandler?: () => void;
};

export default function RefreshButton({ disabled, setDisabled, isLoading, queryKey, invalidateHandler }: Props) {
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    setDisabled(true);
    await queryClient.invalidateQueries({
      queryKey: queryKey,
    });
    setDisabled(false);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={disabled || isLoading}
      onClick={invalidateHandler ?? handleRefresh}
    >
      <RefreshCw
        strokeWidth={2.5}
        className={cn("mr-1 size-3.5", disabled && "animate-spin")}
      />
      <span className="text-xs">Refresh</span>
    </Button>
  );
}

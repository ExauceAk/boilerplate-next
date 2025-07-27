"use client";

import Sidebar from "@/components/sidebar";
import { useQueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-primary-neutral-100">{children}</div>
    </div>
  );
}

"use client";

// import { useApp } from "@/components/app-provider";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Projector, User, UserPlus } from "lucide-react";
import { useState } from "react";
import SignOutButton from "./sign-out-button";

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      icon: Projector,
      href: "/",
      label: "All Projects",
      active: pathname === "/" || pathname.startsWith("/project"),
      disabled: true,
    },
  ];

  const router = useRouter();
  /*const handleLogout = () => {
    setIsLogoutPending(true);
    setTimeout(() => {
      localStorage.removeItem("ACCESS_TOKEN");
      router.push("/signin");
      setIsLogoutPending(false);
    }, 2000);
  };
  */

  return (
    <motion.div
      initial={{ x: -220 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col  bg-gray-light-50 w-[60px]  border-r h-screen sticky top-0 bg-background"
    >
      <div className="p-4 flex items-center gap-2">
        <div className=" text-white p-1 mt-2 rounded">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        </div>
      </div>

      <div className="flex-1 overflow-auto py-12">
        <nav className="grid gap-1 space-y-5 px-2">
          {routes.map((route) => (
            <div
              key={route.href}
              title={route.label}
              className={`${
                route.disabled
                  ? "disabled-section opacity-15 cursor-pointer-none"
                  : ""
              }`}
            >
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 justify-center rounded-md p-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  route.active ? "bg-active-menu" : "bg-white rounded-md"
                )}
              >
                <route.icon color={route.active ? "#155EEF" : "#101828"} />
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            {/* <Avatar className="h-10 w-10 border-2 border-brand-primary-500 dark:border-slate-800">
              <AvatarImage
                src={(currentUser && currentUser.data?.avatar) || ""}
                alt="User"
              />
              <AvatarFallback className="uppercase">
                {currentUser &&
                  currentUser.data.fullname.charAt(0) +
                  currentUser.data.fullname.charAt(1)}
              </AvatarFallback>
            </Avatar> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/profile"
                className="flex items-center gap-3 justify-center rounded-md text-sm font-medium"
              >
                <User /> Profile
              </Link>
            </DropdownMenuItem>
            <SignOutButton>
              <DropdownMenuItem className="text-red-500 flex items-center gap-2 hover:text-red-700">
                <LogOut size={16} />
                Logout
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button> */}
      </div>
    </motion.div>
  );
}

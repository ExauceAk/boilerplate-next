import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import PushNotificationsProvider from "@/lib/providers/push-notifications-provider";
import QueryProvider from "@/lib/providers/query-provider";
import { cn } from "@/lib/utils";
import SessionProvider from "@/providers/session-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import "./globals.css";

const fontSans = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo",
  description: "Next boilerplate.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}>
        <PushNotificationsProvider />
        <SessionProvider>
          <QueryProvider>
            {children}
            <Toaster />
            <ToasterSonner richColors />
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

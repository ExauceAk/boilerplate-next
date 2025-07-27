"use client";

import { SessionProvider as NextAuthSessionProvier } from "next-auth/react";
import React from "react";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextAuthSessionProvier>{children}</NextAuthSessionProvier>;
}

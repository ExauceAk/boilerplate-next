"use client";

import { Slot } from "@radix-ui/react-slot";
import { signOut } from "next-auth/react";

export default function SignOutButton(
  props: React.ComponentPropsWithoutRef<typeof Slot>,
) {
  return (
    <Slot
      {...props}
      onClick={() => signOut()}
    />
  );
}

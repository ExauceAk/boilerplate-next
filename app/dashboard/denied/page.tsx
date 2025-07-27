"use client";

import { useMe } from "@/services/api/models/users/hooks";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DeniedPage() {
  const { data: user } = useMe();

  if (user?.role === "SUPERADMIN") {
    redirect("/dashboard/account");
  }
  return (
    <div className="container flex h-screen flex-col justify-center text-center">
      <h1 className="text-[8rem] font-bold text-primary-brand-100 md:text-[12rem] 2xl:text-[15rem]">403</h1>
      <h2 className="text-2xl font-semibold text-primary-brand-400 md:text-3xl 2xl:text-4xl">Access Denied</h2>
      <div className="mt-3 text-primary-neutral-400 md:text-lg">
        <p>Sorry, but you don&apos;t have permission to access this page.</p>
        <p>
          You can go back to the{" "}
          <Link
            href={"/dashboard/account"}
            className="font-semibold text-primary-neutral-600 underline"
          >
            Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}

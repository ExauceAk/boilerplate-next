"use client";

import ResetPasswordForm from "@/components/auth/forms/reset-password-form";
import { useParams } from "next/navigation";

export default function NewPasswordPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="grid grid-cols-10">
      <div className="relative col-span-4 h-screen bg-gray-400 bg-cover bg-no-repeat">
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="relative col-span-6 flex h-screen items-center">
        <div className="mx-auto w-1/2 space-y-4">
          <p className="text-3xl font-bold text-[#101828]">New password</p>
          <p className="text-sm  text-gray-500">Enter your new password.</p>
          <ResetPasswordForm Token={id} />
        </div>
      </div>
    </div>
  );
}

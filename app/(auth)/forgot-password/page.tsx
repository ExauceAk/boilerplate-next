import ForgotPasswordForm from "@/components/auth/forms/forgot-password-form";
import routes from "@/config/routes";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="grid grid-cols-10">
      <div className="relative col-span-4 h-screen bg-gray-400 bg-cover bg-no-repeat">
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="relative col-span-6 flex h-screen items-center">
        <div className="mx-auto w-1/2 space-y-4">
          <p className="text-3xl font-bold text-[#101828]">New password</p>
          <p className="text-sm  text-gray-500">Enter your email to reset your password.</p>
          <ForgotPasswordForm />
          <p className="">
            <Link href={routes.signin}>
              <span className="text-[#0E49BE]">Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

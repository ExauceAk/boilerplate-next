import LoginForm from "@/components/auth/forms/login-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="grid grid-cols-10">
      <div className="relative col-span-4 h-screen bg-gray-400 bg-cover bg-no-repeat">
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="relative col-span-6 flex h-screen items-center">
        <div className="mx-auto w-1/2 space-y-4">
          <p className="text-3xl font-bold text-[#101828]">Se connecter</p>
          <LoginForm />
        </div>
        <p className="absolute bottom-5  right-1/2 ">
          Pas de compte ?{" "}
          <Link href="/signup">
            {" "}
            <span className="text-[#0E49BE]">S’inscrire</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

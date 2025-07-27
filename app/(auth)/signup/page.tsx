import RegisterForm from "@/components/auth/forms/register-form";
import routes from "@/config/routes";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="grid grid-cols-10">
      <div className="relative col-span-4 h-screen bg-gray-400 bg-cover bg-no-repeat">
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="sidebar relative col-span-6 flex h-screen items-center overflow-auto">
        <div className="mx-auto h-[80vh] w-1/2 space-y-6">
          <p className="text-3xl font-bold text-[#101828]">S’inscrire</p>
          <RegisterForm />
          <p className="">
            Déja un compte ?{" "}
            <Link href={routes.signin}>
              <span className="text-[#0E49BE]">Se connecter ?</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import ResetPasswordForm from "@/components/auth/forms/reset-password-form";
import { useParams } from "next/navigation";

export default function ResetPassword() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div className="font-bold text-5xl text-gray-800 ">
        <p>Hello,</p>
        <p>Welcome Back</p>
      </div>
      <ResetPasswordForm id={id} />
    </>
  );
}

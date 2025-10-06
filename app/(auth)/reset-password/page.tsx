import LoginForm from "@/components/auth/forms/login-form";
import ResetPasswordForm from "@/components/auth/forms/reset-password-form";

export default function ResetPassword() {
  return (
    <>
      <div className="font-bold text-5xl text-gray-800 ">
        <p>Hello,</p>
        <p>Welcome Back</p>
      </div>
      <ResetPasswordForm />
    </>
  );
}

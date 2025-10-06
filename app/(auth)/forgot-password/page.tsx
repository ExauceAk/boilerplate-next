import ForgotPasswordForm from "@/components/auth/forms/forgot-password-form";
import LoginForm from "@/components/auth/forms/login-form";

export default function ForgotPassword() {
  return (
    <>
      <div className="font-bold text-5xl text-gray-800 ">
        <p>Hello,</p>
        <p>Welcome Back</p>
      </div>
      <ForgotPasswordForm />
    </>
  );
}

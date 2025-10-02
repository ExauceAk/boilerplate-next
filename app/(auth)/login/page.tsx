import LoginForm from "@/components/auth/forms/login-form";

export default function Login() {
  return (
    <>
        <div className="font-bold text-5xl text-gray-800 ">
          <p>Hello,</p>
          <p>Welcome Back</p>
        </div>
        <LoginForm />
    </>
  );
}

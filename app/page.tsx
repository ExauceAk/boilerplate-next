import { redirect } from "next/navigation";

export default function Page() {
  redirect("/dashboard/account");
  return <div className="mx-2"></div>;
}

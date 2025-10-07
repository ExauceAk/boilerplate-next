import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-row bg-gray-100 ">
      <Sidebar />
      {children}
    </div>
  );
}

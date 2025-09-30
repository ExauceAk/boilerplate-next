import { Sidebar } from "@/components/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main>
      <Sidebar />
      {children}
      </main>
    </SidebarProvider>
  )
}
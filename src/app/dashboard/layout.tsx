'use client'

import { Sidebar } from "@/components/ui";
import FooterCustom from "@/components/ui/footer/Footer";
import TopMenu from "@/components/ui/top-menu/TopMenu";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      
      <Sidebar />

      <div className="flex-grow">{children}</div>

      <FooterCustom />
    </div>
  );
}

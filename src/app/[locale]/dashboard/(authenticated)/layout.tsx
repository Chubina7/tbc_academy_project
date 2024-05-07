import React from "react";
import AsideNav from "../../../../components/dashboard/aside/AsideNav";
import Header from "../../../../components/dashboard/header/Header";

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className="bg-[#F4F7FF] text-[#2B3674] dark:bg- dark:text- | relative w-full h-screen flex flex-col md:flex-row p-3 gap-8">
      <AsideNav />
      <div className="w-full flex flex-col">
        <Header />
        <main className="w-full h-full overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
}

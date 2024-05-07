import React from "react";
import AsideNav from "../../../../components/dashboard/AsideNav";
import Header from "../../../../components/dashboard/Header";

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className="w-full h-screen flex p-3 gap-3">
      <AsideNav />
      <div className="w-full flex flex-col gap-3">
        <Header />
        <main className="rounded-xl | w-full h-full overflow-y-scroll p-3">
          {children}
        </main>
      </div>
    </div>
  );
}

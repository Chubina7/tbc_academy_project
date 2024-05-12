import React from "react";
import Header from "../../../../components/dashboard/header/Header";
import Navigation from "../../../../components/dashboard/navigation/Navigation";
import BookmarkProvider from "../../../../context/providers/BookmarkProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookmarkProvider>
      <div className="bg-[#F4F7FF] text-[#2B3674] dark:bg- dark:text- | relative w-full h-screen flex flex-col md:flex-row p-3 gap-8">
        <Navigation type="dekstop" />
        <div className="w-full flex flex-col">
          <Header />
          <main className="w-full h-full overflow-y-scroll">{children}</main>
        </div>
      </div>
    </BookmarkProvider>
  );
}

import React from "react";
import Header from "../../../../components/dashboard/header/Header";
import Navigation from "../../../../components/dashboard/navigation/Navigation";
import BookmarkProvider from "../../../../context/providers/BookmarkProvider";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <BookmarkProvider>
      <Navigation type="dekstop" />
      <div className="w-full h-screen md:pl-[88px] xl:pl-[244px] flex flex-col">
        <Header />
        <main className="overflow-y-scroll scroll-hidden">{children}</main>
      </div>
    </BookmarkProvider>
  );
}

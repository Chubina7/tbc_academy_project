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
      {/* <div className="bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] | relative max-w-screen min-h-screen md:h-screen flex flex-col md:flex-row  transition-all duration-300"> */}
        <Navigation type="dekstop" />
        <div className="w-full h-screen md:pl-[88px] xl:pl-[244px] flex flex-col">
          <Header />
          <main className="overflow-y-scroll scroll-hidden">
            {children}
          </main>
        </div>
      {/* </div> */}
    </BookmarkProvider>
  );
}

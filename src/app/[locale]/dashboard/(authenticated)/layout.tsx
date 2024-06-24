import React from "react";
import Header from "../../../../components/dashboard/header/Header";
import Navigation from "../../../../components/dashboard/navigation/Navigation";
import BookmarkProvider from "../../../../context/providers/BookmarkProvider";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  children: React.ReactNode;
  params: IParams;
}

export default function DashboardLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <BookmarkProvider>
      <Navigation type="dekstop" />
      <div className="w-full h-screen md:pl-[88px] xl:pl-[244px] flex flex-col">
        <Header />
        <main className="w-full h-full overflow-y-scroll scroll-hidden">
          {children}
        </main>
      </div>
    </BookmarkProvider>
  );
}

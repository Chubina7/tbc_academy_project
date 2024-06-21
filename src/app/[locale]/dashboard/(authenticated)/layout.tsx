import React from "react";
import Header from "../../../../components/dashboard/header/Header";
import Navigation from "../../../../components/dashboard/navigation/Navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import BookmarkProvider from "../../../../context/providers/BookmarkProvider";

interface Props {
  children: React.ReactNode;
  params: IParams;
}

export default function DashboardLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);

  // fetch bookmarks data and pass as props down
  return (
    <BookmarkProvider data={["B0001", "B0003"]}>
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

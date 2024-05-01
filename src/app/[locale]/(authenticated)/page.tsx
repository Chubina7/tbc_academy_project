import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

// Types
interface Props {
  params: IParams;
}

// Component
export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <h1>Hello world!</h1>
    </div>
  );
}

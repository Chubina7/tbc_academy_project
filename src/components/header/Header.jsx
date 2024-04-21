import React from "react";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";
import { PiGitlabLogoFill } from "react-icons/pi";
import Link from "next/link";
import { getDictionary } from "../../lib/dictionary";

export default async function Header({ lng }) {
  const dictionary = await getDictionary(lng);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-3 z-50">
      <header className="w-full p-4 flex justify-between items-center bg-[#25292D] rounded-b-3xl shadow-xl">
        <Link href={`/${lng}`} className="mx-2">
          <PiGitlabLogoFill size={36} color="#F25050" />
        </Link>
        <div className="hidden sm:block">
          <Navigation lng={lng} dict={dictionary} />
        </div>
        <div className="relative block sm:hidden">
          <BurgerMenu lng={lng} dict={dictionary} />
        </div>
      </header>
    </div>
  );
}

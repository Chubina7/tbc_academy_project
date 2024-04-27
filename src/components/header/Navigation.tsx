import React from "react";
import LangChange from "./LangChange";
import NavItems from "./NavItems";
import SignOutBtn from "./SignOutBtn";
import ThemeChange from "./ThemeChange";

interface NavigationProps {
  closeBurgerModal?: () => void;
  lng: string;
}

export default async function Navigation({
  closeBurgerModal,
  lng,
}: NavigationProps) {
  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
      <NavItems action={closeBurgerModal} lng={lng} />
      <LangChange action={closeBurgerModal} />
      <ThemeChange action={closeBurgerModal} />
      <SignOutBtn lng={lng} />
    </ul>
  );
}

import React from "react";
import LangChange from "./LangChange";
import NavItems from "./NavItems";
import SignOutBtn from "./SignOutBtn";
import ThemeChange from "./ThemeChange";

export default async function Navigation({ closeBurgerModal, dict, lng }) {
  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
      <NavItems action={closeBurgerModal} lng={lng} dict={dict} />
      <LangChange dict={dict} action={closeBurgerModal} />
      <ThemeChange dict={dict} action={closeBurgerModal} />
      <SignOutBtn lng={lng} dict={dict} />
    </ul>
  );
}

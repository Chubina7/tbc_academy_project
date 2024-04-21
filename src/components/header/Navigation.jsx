import React from "react";
import LangChange from "./LangChange";
import NavItems from "./NavItems";
import SignOutBtn from "./SignOutBtn";
import { getDictionary } from "../../lib/dictionary";

export default async function Navigation({ closeBurgerModal, lng }) {
  const dict = await getDictionary(lng);
  const navItems = dict.header.navigation.navItems;
  const lngChanger = dict.header.navigation.lngChanger;
  const signOutBtn = dict.header.navigation.signOutBtn;

  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
      <NavItems action={closeBurgerModal} lng={lng} data={navItems} />
      <LangChange data={lngChanger} />
      <SignOutBtn lng={lng} data={signOutBtn} />
    </ul>
  );
}

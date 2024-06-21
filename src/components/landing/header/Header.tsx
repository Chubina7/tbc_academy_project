import React from "react";
import Navigation from "./Navigation";
import SignOutBtn from "./SignOutBtn";
import Logo from "../../dashboard/navigation/aside/Logo";
import { RxDividerVertical } from "react-icons/rx";
import ThemeChanger from "../../ui/themePreference/ThemeChanger";
import LangChanger from "../../ui/languagePreference/LangChanger";
import { USER } from "../../../lib/helpers/server_act_funcs/authorization_acts";
import JoinNotAct from "./JoinNotAct";

export default async function Header() {
  const user = await USER();

  return (
    <header className="fixed w-full h-16 p-4 flex justify-between items-center bg-inherit text-inherit z-50">
      <Logo />
      <div className="hidden md:flex justify-center items-center gap-2">
        <Navigation />
        <RxDividerVertical size={32} opacity={"60%"} />
        <div className="flex justify-center items-center gap-3">
          <ThemeChanger />
          <LangChanger />
        </div>
        {user ? <SignOutBtn /> : <JoinNotAct />}
      </div>
      {/* burger menu */}
    </header>
  );
}

import React from "react";
import AsideNav from "./aside/AsideNav";
import BurgerNav from "./burger/BurgerNav";

export default function Navigation({ type }: { type: "mobile" | "dekstop" }) {
  switch (type) {
    case "mobile":
      return (
        <div className="md:hidden">
          <BurgerNav />
        </div>
      );
    case "dekstop":
      return (
        <div className="hidden md:block">
          <AsideNav />
        </div>
      );
  }
}

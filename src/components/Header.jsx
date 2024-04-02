import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Header</h1>

      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/profile"}>Profile</Link>
    </header>
  );
};

export default Header;

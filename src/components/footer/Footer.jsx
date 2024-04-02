import React from "react";
import EmailInput from "./EmailInput";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center p-3 bg-orange-400">
      <h1>© All rights reserved</h1>
      <EmailInput />
    </footer>
  );
};

export default Footer;

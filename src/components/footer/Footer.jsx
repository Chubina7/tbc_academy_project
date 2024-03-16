import React from "react";
import styles from "./Footer.module.css";
import Navigation from "../navigation/Navigation";
import DynamicInput from "../inputs/DynamicInput";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <Navigation />
        <DynamicInput type={"email"} />
      </div>
    </footer>
  );
};

export default Footer;

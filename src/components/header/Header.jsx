import React from "react";
import styles from "./Header.module.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <h1 className={styles.logo}>LOGO</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

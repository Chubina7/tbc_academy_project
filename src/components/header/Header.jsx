import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <h1 className={styles.logo}>LOGO</h1>
        <nav className={styles.navigation}>
          <ul>
            <li>Route1</li>
            <li>Route2</li>
            <li>Route3</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

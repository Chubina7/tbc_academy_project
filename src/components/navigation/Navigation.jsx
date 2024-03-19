import React from "react";
import styles from "./Navigation.module.css";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Navigation = () => {
  return (
    <>
      <BurgerMenu />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

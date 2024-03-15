import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about-us">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

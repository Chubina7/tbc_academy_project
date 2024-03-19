import React from "react";
import styles from "./Navigation.module.css";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const path = useLocation();

  return (
    <>
      <BurgerMenu />
      <nav className={styles.navigation}>
        <ul>
          <li
            className={
              path.pathname === "/" ? styles.activeNav : styles.navItem
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              path.pathname === "/contact" ? styles.activeNav : styles.navItem
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

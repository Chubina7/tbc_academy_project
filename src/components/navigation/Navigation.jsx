import React from "react";
import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./burgerMenu/BurgerMenu";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
  { title: "Profile", href: "/profile" },
  { title: "Blog", href: "/blog" },
];

const Navigation = () => {
  const path = useLocation();

  return (
    <>
      <BurgerMenu />
      <nav className={styles.navigation}>
        <ul>
          {navigationItems.map((item, idx) => (
            <li
              key={idx}
              className={
                path.pathname === item.href ? styles.activeNav : styles.navItem
              }
            >
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

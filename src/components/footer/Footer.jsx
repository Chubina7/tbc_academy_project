import React from "react";
import styles from "./Footer.module.css";
import Navigation from "../navigation/Navigation";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        {/* <ul className={styles.footer_links}>
          <a
            href="https://termify.io/terms-and-conditions-generator?gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7gdp81Wckh6diIMSJaxBU6urQxY4uqvkgpQ2f_2MzHGvGxCK3b11axoCTsQQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            <li>Terms and conditions</li>
          </a>
          <a
            href="https://www.privacypolicies.com"
            target="_blank"
            rel="noreferrer"
          >
            <li>Privacy policy</li>
          </a>
        </ul> */}
        <Navigation />
        <input
          className={styles.newsletter_subscription_input}
          type="text"
          placeholder="Leave your email"
        />
      </div>
    </footer>
  );
};

export default Footer;

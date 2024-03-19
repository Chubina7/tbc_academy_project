import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <h1>Contact Us</h1>
      <div className={styles.contactItem}>
        <img src="" alt="icon" />
        <p>Address: *** *** ***</p>
      </div>
      <div className={styles.contactItem}>
        <img src="" alt="icon" />
        <p>Phone: *** *** ***</p>
      </div>
      <div className={styles.contactItem}>
        <img src="" alt="icon" />
        <p>Email: *** *** ***</p>
      </div>
      <div className={styles.contactItem}>
        <img src="" alt="icon" />
        <p>Website: *** *** ***</p>
      </div>
    </div>
  );
};

export default ContactInfo;

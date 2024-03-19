import React from "react";
import styles from "./ContactInfo.module.css";

import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <h1>Contact Us</h1>
      <div className={styles.contactItem}>
        <div className={styles.iconContainer}>
          <GrLocation size={20} />
        </div>
        <p>
          <strong>Address:</strong> Didi dighomi, IV district
        </p>
      </div>
      <div className={styles.contactItem}>
        <div className={styles.iconContainer}>
          <IoCallOutline size={20} />
        </div>
        <p>
          <strong>Phone:</strong> +995 577 777 777
        </p>
      </div>
      <div className={styles.contactItem}>
        <div className={styles.iconContainer}>
          <MdOutlineEmail size={20} />
        </div>
        <p>
          <strong>Email:</strong> reactCourse.task@gmail.com
        </p>
      </div>
      <div className={styles.contactItem}>
        <div className={styles.iconContainer}>
          <IoIosGlobe size={20} />
        </div>
        <p>
          <strong>Website:</strong> google.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;

import React from "react";
import styles from "./NewPassword.module.css";
import Inputs from "./inputs/Inputs";

const NewPassword = () => {
  return (
    <div className={styles.contactInfoField}>
      <h2>Change Password</h2>
      <Inputs />
    </div>
  );
};

export default NewPassword;

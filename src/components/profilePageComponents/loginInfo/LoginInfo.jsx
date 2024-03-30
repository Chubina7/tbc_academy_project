import React from "react";
import styles from "./LoginInfo.module.css";
import NewPassword from "./newPassword/NewPassword";
import NewEmail from "./newEmail/NewEmail";

const LoginInfo = () => {
  return (
    <div className={styles.wrapper}>
      <NewEmail />
      <NewPassword />
    </div>
  );
};

export default LoginInfo;

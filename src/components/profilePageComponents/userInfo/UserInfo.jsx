import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = ({ userName, userSurename, userEmail }) => {
  return (
    <div className={styles.userInfoCard}>
      <h1 className={styles.heading}>User Information</h1>
      <div className={styles.userDataContainer}>
        <div className={styles.userDataTop}>
          <div className={styles.userDataField}>
            <i>NAME</i>
            <h2>{userName}</h2>
          </div>
          <div className={styles.userDataField}>
            <i>SURENAME</i>
            <h2>{userSurename}</h2>
          </div>
        </div>
        <div className={styles.userDataField}>
          <i>EMAIL</i>
          <h2>{userEmail}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

import React from "react";
import styles from "./Profile.module.css";
import UserInfo from "../../components/profilePageComponents/userInfo/UserInfo";
import LoginInfo from "../../components/profilePageComponents/loginInfo/LoginInfo";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <UserInfo />
      <LoginInfo />
    </div>
  );
};

export default Profile;

import React from "react";
import styles from "./Profile.module.css";
import UserInfo from "../../components/profilePageComponents/userInfo/UserInfo";
import DynamicInput from "../../components/inputs/DynamicInput";
import DynamicBtn from "../../components/btns/DynamicBtn";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <UserInfo
        userEmail={"test.email@gmail.com"}
        userName={"luka"}
        userSurename={"chubinidze"}
      />
      <div className={styles.passwordInputs}>
        <h2>Change password</h2>
        <DynamicInput type={"password"} ph={"New Password"} />
        <DynamicInput type={"password"} ph={"Confirm New Password"} />
      </div>
      <div className={styles.action}>
        <DynamicBtn type={"save"} />
      </div>
    </div>
  );
};

export default Profile;

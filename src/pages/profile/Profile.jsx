import React from "react";
import styles from "./Profile.module.css";
import UserInfo from "../../components/profilePageComponents/userInfo/UserInfo";
// import DynamicBtn from "../../components/btns/DynamicBtn";
// import DataChangingCont from "../../components/profilePageComponents/dataChangingCont/DataChangingCont";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <UserInfo />
      {/* <DataChangingCont />
      <div className={styles.action}>
        <DynamicBtn type={"save"} />
      </div> */}
    </div>
  );
};

export default Profile;

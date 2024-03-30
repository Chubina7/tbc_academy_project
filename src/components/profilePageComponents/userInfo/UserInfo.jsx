import React, { useState } from "react";
import styles from "./UserInfo.module.css";
import UserDataField from "./userDataField/UserDataField";
import { userObj } from "../../../data/userObj"; // initial value can be fetched from backend and inserted dynamically

const userDataFields = ["name", "lastname", "number", "address"];

const UserInfo = () => {
  const [user, setUser] = useState(userObj);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>User Information</h1>
      <div className={styles.userDataContainer}>
        {userDataFields.map((item, idx) => (
          <UserDataField
            key={idx}
            type={item}
            data={user[item]}
            editUser={setUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UserInfo;

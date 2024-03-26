import React from "react";
import styles from "./DataChangingCont.module.css";
import DynamicInput from "../../inputs/DynamicInput";

const DataChangingCont = () => {
  return (
    <div className={styles.passwordInputs}>
      <h2>Change password</h2>
      <DynamicInput type={"password"} ph={"New Password"} />
      <DynamicInput type={"password"} ph={"Confirm New Password"} />
    </div>
  );
};

export default DataChangingCont;

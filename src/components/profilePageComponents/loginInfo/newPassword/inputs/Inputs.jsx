import React, { useState } from "react";
import styles from "./Inputs.module.css";
import { userObj } from "../../../../../data/userObj"; // initial value can be fetched from backend and inserted dynamically

const Inputs = () => {
  const [user, setUser] = useState(userObj);
  const [newInputVal, setNewInputVal] = useState("");
  const [confirmInputVal, setConfirmInputVar] = useState("");

  return (
    <>
      <input
        className={styles.inputField}
        type="password"
        placeholder="New Password"
        value={newInputVal}
        onChange={(e) => setNewInputVal(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="password"
        placeholder="Confirm New Password"
        value={confirmInputVal}
        onChange={(e) => setConfirmInputVar(e.target.value)}
      />

      {newInputVal === confirmInputVal && newInputVal.length !== 0 && (
        <button onClick={() => setUser({ ...user, password: confirmInputVal })}>
          Set new password
        </button>
      )}
      {newInputVal !== confirmInputVal && confirmInputVal.length > 0 && (
        <p>There is no matching</p>
      )}
    </>
  );
};
export default Inputs;

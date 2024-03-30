import React, { useState } from "react";
import styles from "./NewEmail.module.css";
import { userObj } from "../../../../data/userObj"; // initial value can be fetched from backend and inserted dynamically

const NewEmail = () => {
  const [user, setUser] = useState(userObj);
  const [inputVal, setInputVal] = useState("");

  return (
    <div className={styles.contactInfoField}>
      <h2>Change Email</h2>
      <input
        type="email"
        placeholder="Enter new email"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <i>Current E-Mail: {user.email}</i>
      {inputVal.length > 0 && (
        <button
          onClick={() => {
            setUser((prev) => ({ ...prev, email: inputVal }));
            setInputVal("");
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default NewEmail;

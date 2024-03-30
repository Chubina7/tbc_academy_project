import React, { useState } from "react";
import styles from "./UserDataField.module.css";

const UserDataField = ({ type, data, editUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState(data);

  return (
    <div className={styles.wrapper}>
      <i>{type.toUpperCase()}</i>
      <div className={styles.data}>
        {!isEditing ? (
          <>
            <h2>{data}</h2>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        ) : (
          <>
            {/* input types also to be changed */}
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              onClick={() => {
                editUser((prev) => ({ ...prev, [type]: inputVal }));
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDataField;

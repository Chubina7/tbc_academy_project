import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ keyStroke, setKeyStroke }) => {
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="Search by a keystroke"
      value={keyStroke}
      onChange={(e) => setKeyStroke(e.target.value)}
    />
  );
};

export default SearchInput;

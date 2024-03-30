import React, { useState } from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ setQuery }) => {
  const [timeoutId, setTimeoutId] = useState(null);

  const onChangeHandler = (e) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="Search by a keystroke"
      onChange={onChangeHandler}
    />
  );
};

export default SearchInput;

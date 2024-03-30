import React from "react";
import styles from "./SortBtn.module.css";

const SortBtn = ({ sortRule, setSortRule }) => {
  return (
    <button
      className={styles.sortBtn}
      onClick={() => {
        setSortRule((prev) => !prev);
      }}
    >
      {sortRule ? "Unsort" : "Sort by price"}
    </button>
  );
};

export default SortBtn;

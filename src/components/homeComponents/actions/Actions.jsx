import React from "react";
import styles from "./Actions.module.css";

const Actions = ({ sortRule, setSortRule, keyStroke, setKeyStroke }) => {
  return (
    <section className={styles.wrapper}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search by a keystroke"
        value={keyStroke}
        onChange={(e) => setKeyStroke(e.target.value)}
      />
      <button
        className={styles.sortBtn}
        onClick={() => {
          setSortRule((prev) => !prev);
        }}
      >
        {sortRule ? "Unsort" : "Sort by price"}
      </button>
    </section>
  );
};

export default Actions;

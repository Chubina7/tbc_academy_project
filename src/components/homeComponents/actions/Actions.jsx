import React from "react";
import styles from "./Actions.module.css";
import DynamicInput from "../../inputs/DynamicInput";

const Actions = ({ sortRule, setSortRule }) => {
  return (
    <section className={styles.wrapper}>
      <DynamicInput type={"search"} />
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

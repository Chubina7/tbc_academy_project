import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.section_wrapper}>{children}</div>
    </section>
  );
};

export default Wrapper;

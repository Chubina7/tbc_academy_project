import React from "react";
import styles from "./Actions.module.css";
import SortBtn from "./sortbtn/SortBtn";
import SearchInput from "./searchInput/SearchInput";

const Actions = ({ sortRule, setSortRule, querySetter }) => {
  return (
    <section className={styles.wrapper}>
      <SearchInput setQuery={querySetter} />
      <SortBtn sortRule={sortRule} setSortRule={setSortRule} />
    </section>
  );
};

export default Actions;

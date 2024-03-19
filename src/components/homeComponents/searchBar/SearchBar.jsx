import React from "react";
import styles from "./SearchBar.module.css";
import DynamicBtn from "../../btns/DynamicBtn";
import DynamicInput from "../../inputs/DynamicInput";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <DynamicInput type={"search"} />
      <DynamicBtn type={"search"} />
    </section>
  );
};

export default SearchBar;

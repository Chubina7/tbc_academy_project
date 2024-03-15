import React from "react";
import Button from "../btn/Button";
import Input from "../input/Input";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <Input placeholder="Start searching" />
      <Button title="ENTER" />
    </section>
  );
};

export default SearchBar;

import styles from "./DynamicInput.module.css";

const SearchInput = () => {
  return <input type="text" placeholder="Search" className={styles.search} />;
};
const EmailInput = () => {
  return (
    <input
      type="text"
      placeholder="Leave your Email"
      className={styles.email}
    />
  );
};

const inputTypes = {
  search: SearchInput,
  email: EmailInput,
};

const DynamicInput = ({ type }) => {
  const Inputs = inputTypes[type];

  return <Inputs />;
};
export default DynamicInput;

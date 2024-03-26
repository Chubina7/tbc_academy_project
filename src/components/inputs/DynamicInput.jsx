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
const PasswordInput = ({ ph }) => {
  return <input className={styles.password} type="password" placeholder={ph} />;
};

const inputTypes = {
  search: SearchInput,
  email: EmailInput,
  password: PasswordInput,
};

const DynamicInput = ({ type, ph }) => {
  const Inputs = inputTypes[type];

  return <Inputs ph={ph} />;
};
export default DynamicInput;

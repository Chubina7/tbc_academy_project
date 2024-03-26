import styles from "./DynamicBtn.module.css";

// Different type of buttons
const AddToCartBtn = () => {
  return <button className={styles.addToCart}>Add to cart</button>;
};
const SearchBtn = () => {
  return <button className={styles.search}>Search</button>;
};
const SaveBtn = () => {
  return <button className={styles.save}>Save Changes</button>;
};

// Listing all type components
const buttonTypes = {
  search: SearchBtn,
  addToCart: AddToCartBtn,
  save: SaveBtn,
};

// Usable component
const DynamicBtn = ({ type }) => {
  const Button = buttonTypes[type];

  return <Button />;
};

export default DynamicBtn;

import "./App.css";
import Button from "./components/btns/Button";
import Input from "./components/inputs/Input";
import ProductsGrid from "./components/products/productsGrid/ProductsGrid";

const App = () => {
  return (
    <main className="app">
      <section className="searchBar">
        <Input placeholder="Start searching" />
        <Button title="ENTER" />
      </section>
      <section className="products">
        <ProductsGrid />
      </section>
    </main>
  );
};

export default App;

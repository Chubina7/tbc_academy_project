import "./App.css";
import ProductsGrid from "./components/main/products/productsGrid/ProductsGrid";
import SearchBar from "./components/main/searchBar/SearchBar";

const App = () => {
  return (
    <main className="app">
      <SearchBar />
      <ProductsGrid />
    </main>
  );
};

export default App;

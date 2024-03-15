import "./App.css";

import ProductsGrid from "./components/products/productsGrid/ProductsGrid";
import SearchBar from "./components/searchBar/SearchBar";

const App = () => {
  return (
    <main className="app">
      <SearchBar />
      <ProductsGrid />
    </main>
  );
};

export default App;

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

const routes = [<Home />, <Contact />]; // changing manually before full routing (routes[0] or routes[1])

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">{routes[1]}</main>
      <Footer />
    </div>
  );
};

export default App;

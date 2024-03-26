import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

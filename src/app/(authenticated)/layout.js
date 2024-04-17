import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-screen-2xl h-full p-8 py-6 mx-auto overflow-y-auto z-40">
        {children}
      </main>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
}

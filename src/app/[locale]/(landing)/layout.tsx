import Footer from "../../../components/landing/footer/Footer";
import Header from "../../../components/landing/header/Header";

interface Props {
  children: React.ReactNode;
}

export default function LandindPageLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-full max-w-screen-2xl min-h-screen p-8 py-6 mx-auto mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
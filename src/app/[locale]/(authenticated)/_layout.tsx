import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

// Types
interface Props {
  children: React.ReactNode;
  params: IParams;
}

// Component
export default function RootLayout({ children, params }: Props) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="w-full max-w-screen-2xl min-h-screen p-8 py-6 mx-auto mt-16">
        {children}
      </main>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
}

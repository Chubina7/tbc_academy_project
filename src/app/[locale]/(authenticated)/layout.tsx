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
      <Header lng={locale} />
      <main className="w-full max-w-screen-2xl h-full p-8 py-6 mx-auto overflow-y-auto z-40">
        {children}
      </main>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
}

import { cookies } from "next/headers";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../lib/variables";

export default function RootLayout({ children }) {
  if (!cookies().get(AUTH_COOKIE_KEY)) {
    redirect("/login");
  }

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

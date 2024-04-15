import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} text-white h-screen w-full flex flex-col bg-[#25292D]`}
      >
        <Header />
        <main className="w-full max-w-screen-2xl h-full p-8 py-6 mx-auto overflow-y-auto z-40">
          {children}
        </main>
        <div className="hidden sm:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}

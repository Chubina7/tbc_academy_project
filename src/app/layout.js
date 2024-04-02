import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-full flex flex-col`}>
        <Header />
        <main className="w-full max-w-screen-2xl h-full p-3 mx-auto overflow-y-auto">
          {children}
        </main>
        <div className="hidden sm:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}

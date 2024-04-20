import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body
        className={`${oswald.className} text-white h-screen w-full flex flex-col bg-[#25292D]`}
      >
        {children}
      </body>
    </html>
  );
}

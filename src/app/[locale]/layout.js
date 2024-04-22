import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { i18n } from "../../i18.config";

const georgian = Noto_Sans_Georgian({ subsets: ["georgian"] });

export const metadata = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ locale: lang }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body
        className={`${georgian.className} text-white h-screen w-full flex flex-col bg-[#25292D]`}
      >
        {children}
      </body>
    </html>
  );
}

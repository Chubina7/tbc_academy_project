import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { i18n } from "../../i18.config";
import { cookies } from "next/headers";

const georgian = Noto_Sans_Georgian({ subsets: ["georgian"] });

export const metadata = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ locale: lang }));
}

export default function RootLayout({ children, params }) {
  const themePref = cookies().get("theme")?.value;
  const lngPref = params.locale;

  return (
    <html lang={lngPref} className={themePref}>
      <body
        className={`${georgian.className} text-black dark:text-white h-screen w-full flex flex-col bg-white dark:bg-[#25292D] transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

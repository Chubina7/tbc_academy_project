import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { supportedLocales } from "../../lib/variables";
import { unstable_setRequestLocale } from "next-intl/server";

// Types
interface Props {
  children: React.ReactNode;
  params: IParams;
}

// Font
const georgian = Noto_Sans_Georgian({ subsets: ["georgian"] });

// Metadata
export const metadata: IMetaData = {
  title: "TBC x USAID Course Project",
  description: "Developed by Luka Chubinidze",
};

// Static Generation
export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

// Component
export default function RootLayout({ children, params }: Props) {
  const themePref = cookies().get("theme")?.value;
  const lngPref = params.locale;
  unstable_setRequestLocale(lngPref);
  const translations = useMessages();

  return (
    <NextIntlClientProvider locale={lngPref} messages={translations}>
      <html lang={lngPref} className={themePref}>
        <body
          className={`${georgian.className} text-black dark:text-white h-screen w-full flex flex-col bg-white dark:bg-[#25292D] transition-colors duration-300`}
        >
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

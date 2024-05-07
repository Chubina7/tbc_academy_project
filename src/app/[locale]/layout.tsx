import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { NextIntlClientProvider, useMessages } from "next-intl";
// import { supportedLocales } from "../../lib/variables";
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
// export function generateStaticParams() {
//   return supportedLocales.map((locale) => ({ locale }));
// }

// Component
export default function RootLayout({ children, params }: Props) {
  const themePref = cookies().get("theme")?.value;
  const lngPref = params.locale;
  unstable_setRequestLocale(lngPref);
  const translations = useMessages();

  return (
    <html lang={lngPref} className={themePref}>
      <body
        className={`${georgian.className} text-[#3D52A1] bg-[#EEE8F6] dark:text-[#EEE8F6] dark:bg-[#3D52A1] w-full flex flex-col transition-colors duration-300`}
      >
        <NextIntlClientProvider locale={lngPref} messages={translations}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// import { Noto_Sans_Georgian } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { NextIntlClientProvider, useMessages } from "next-intl";
// import { supportedLocales } from "../../lib/variables";
import { unstable_setRequestLocale } from "next-intl/server";
import NotificationsProvider from "../../context/providers/NotificationsProvider";
import Notification from "../../components/dashboard/notifications/Notification";

// Types
interface Props {
  children: React.ReactNode;
  params: IParams;
}

// Font
// const georgian = Noto_Sans_Georgian({ subsets: ["georgian"] });
const english = Montserrat({ subsets: ["latin"] });

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
        className={`${english.className} bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] w-full flex flex-col transition-colors duration-300`}
      >
        <NotificationsProvider>
          <Notification />
          <NextIntlClientProvider locale={lngPref} messages={translations}>
            {children}
          </NextIntlClientProvider>
        </NotificationsProvider>
      </body>
    </html>
  );
}

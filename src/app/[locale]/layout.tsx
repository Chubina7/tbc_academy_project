import { Montserrat, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { useMessages } from "next-intl";
import { supportedLocales } from "../../lib/variables";
import { unstable_setRequestLocale } from "next-intl/server";
import BodyWrapper from "../../components/layout/root/BodyWrapper";
import Providers from "../../components/layout/root/Providers";
import HtmlWrapper from "../../components/layout/root/HtmlWrapper";

// Types
interface Props {
  children: React.ReactNode;
  params: IParams;
}

// Fonts
const georgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin", "math", "symbols", "greek-ext"],
});
const english = Montserrat({
  subsets: ["latin", "cyrillic", "latin-ext", "vietnamese"],
});

// Metadata
export const metadata: IMetaData = {
  title: "SkillUp",
  description: "Developed by Luka Chubinidze",
};

// Static Generation
export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

// Component
export default function RootLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);
  const translations = useMessages();

  return (
    <HtmlWrapper locale={params.locale} theme={cookies().get("theme")?.value}>
      <BodyWrapper
        engFont={english.className}
        kaFont={georgian.className}
        locale={params.locale}
      >
        <Providers intlProp={translations}>{children}</Providers>
      </BodyWrapper>
    </HtmlWrapper>
  );
}

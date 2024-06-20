interface Props {
  children: React.ReactNode;
  locale: "ka" | "en";
  theme: string | undefined;
}

export default function HtmlWrapper({ children, locale, theme }: Props) {
  return (
    <html lang={locale} className={`scroll-hidden${theme ? " " + theme : ""}`}>
      {children}
    </html>
  );
}

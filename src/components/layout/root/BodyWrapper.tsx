interface Props {
  children: React.ReactNode;
  locale: "ka" | "en";
  engFont: string;
  kaFont: string;
}

export default function BodyWrapper({
  children,
  locale,
  engFont,
  kaFont,
}: Props) {
  return (
    <body
      className={`${
        locale === "en" ? engFont : kaFont
      } bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] w-full flex flex-col transition-colors duration-300`}
    >
      {children}
    </body>
  );
}

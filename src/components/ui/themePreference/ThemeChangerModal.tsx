// import { useTranslations } from "next-intl";
// import { setTheme } from "../../lib/helpers";
// import { storeThemeInCookies } from "../../lib/actions";
// import { themeList } from "../../lib/componentLists";

// interface Props {
//   themeModalHandler: () => void;
//   activeState: {
//     activeTheme: string;
//     setActiveTheme: React.Dispatch<React.SetStateAction<string>>;
//   };
// }

// function ThemeChangerModal({ themeModalHandler, activeState }: Props) {
//   const t = useTranslations("Header.navigation.themeChanger");
//   const { activeTheme, setActiveTheme } = activeState;

//   return (
//     <div className="absolute top-12 right-0 rounded-lg py-2 bg-[#3D52A1] text-[#EEE8F6] dark:text-[#3D52A1] dark:bg-[#EEE8F6] z-50 flex flex-col gap-1 overflow-hidden">
//       {Object.entries(themeList).map((item, idx) => (
//         <div
//           key={idx}
//           className={`cursor-pointer flex gap-3 justify-start items-center px-4 py-2 ${
//             activeTheme === item[1].title
//               ? "bg-[#8697C3]"
//               : "hover:bg-[#ADBADA] hover:text-[#3D52A1]"
//           }`}
//           onClick={() => {
//             setActiveTheme(item[1].title);
//             setTheme(item[1].title);
//             storeThemeInCookies(item[1].title);
//             themeModalHandler();
//           }}
//         >
//           {item[1].icon}
//           <p>{t(item[1].title)}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ThemeChangerModal;

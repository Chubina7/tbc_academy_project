import { useTranslations } from "next-intl";
import { setTheme } from "../../lib/helpers";
import { storeThemeInCookies } from "../../lib/actions";
import { themeList } from "../../lib/componentLists";

function ThemeChangerModal({
  themeModalHandler,
  activeThemeSetter,
}: {
  themeModalHandler: () => void;
  activeThemeSetter: any;
}) {
  const t = useTranslations("Header.navigation.themeChanger");

  return (
    <div className="absolute top-11 right-0 p-4 rounded-lg bg-[#3D52A1] text-[#EEE8F6] dark:text-[#3D52A1] dark:bg-[#EEE8F6] z-50 flex flex-col gap-3">
      {Object.entries(themeList).map((item, idx) => (
        <div
          key={idx}
          className="cursor-pointer flex gap-1 justify-start items-center"
          onClick={() => {
            activeThemeSetter(item[1].title);
            setTheme(item[1].title);
            storeThemeInCookies(item[1].title);
            themeModalHandler();
          }}
        >
          {item[1].icon}
          <p>{t(item[1].title)}</p>
        </div>
      ))}
    </div>
  );
}

export default ThemeChangerModal;

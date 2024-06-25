import {
  IoHome,
  IoCalendarSharp,
  IoBook,
  IoInformationCircle,
  IoMoon,
  IoSunny,
  IoDesktop,
  IoSettings,
  IoHelpCircle,
  IoChatbubbles,
  IoFileTrayFull,
  IoImage,
  IoList,
  IoPeople,
} from "react-icons/io5";
import RoleCheckmark from "../../components/auth/register_page/card/steps/RoleCheckmark";
import PersonalDetailInputs from "../../components/auth/register_page/card/steps/presonal_details/PersonalDetailInputs";
import CredentialInputs from "../../components/auth/register_page/card/steps/acc_credentials/CredentialInputs";
import GeneralInfo from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/general_info_field/GeneralInfo";
import CoverPicture from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/cover_pict_field/CoverPicture";
import Categories from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/categories_field/Categories";
import Members from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/members_field/Members";
import Image from "next/image";
import {
  setLngToEn,
  setLngToGe,
} from "../helpers/server_act_funcs/locale_change_acts";
import { setTheme } from "../helpers/regular_funcs/helpers";
import { storeThemeInCookies } from "../helpers/server_act_funcs/theme_change_act";

export const themeList: ThemeListType = {
  os: {
    icon: <IoDesktop size={20} color="inherit" />,
    setTheme: async () => {
      setTheme("light");
      await storeThemeInCookies("light");
    },
  },
  light: {
    icon: <IoSunny size={20} color="inherit" />,
    setTheme: async () => {
      setTheme("dark");
      await storeThemeInCookies("dark");
    },
  },
  dark: {
    icon: <IoMoon size={20} color="inherit" />,
    setTheme: async () => {
      setTheme("os");
      await storeThemeInCookies("os");
    },
  },
};
export const langPrefList: LangPrefListType = {
  ka: {
    icon: (
      <div className="w-20 h-20">
        <Image
          src={
            "https://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg"
          }
          alt="georgia"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </div>
    ),
    setLng: async () => await setLngToEn(),
  },
  en: {
    icon: (
      <div className="w-20 h-20">
        <Image
          src={
            "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          }
          alt="united states"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </div>
    ),
    setLng: async () => await setLngToGe(),
  },
};

export const navItems: LandingNavItemsType = [
  { placeholder: "home", href: "/", whenActive: "/" },
  { placeholder: "contact", href: "/contact", whenActive: "/contact" },
  { placeholder: "about", href: "/about", whenActive: "/about" },
];
export const dashboardNavigationList: DashboardNavListType = [
  {
    title: "home",
    icon: <IoHome size={20} color="inherit" />,
    onActive: <IoHome size={20} color="inherit" />,
    href: "",
    forHeading: "Welcome, STUDENT!",
  },
  {
    title: "rooms",
    icon: <IoChatbubbles size={20} color="inherit" />,
    onActive: <IoChatbubbles size={20} color="inherit" />,
    href: "/rooms",
    forHeading: "Rooms you enrolled",
  },
  {
    title: "schedule",
    icon: <IoCalendarSharp size={20} color="inherit" />,
    onActive: <IoCalendarSharp size={20} color="inherit" />,
    href: "/schedule",
    forHeading: "Plans here!",
  },
  {
    title: "announcements",
    icon: <IoInformationCircle size={20} color="inherit" />,
    onActive: <IoInformationCircle size={20} color="inherit" />,
    href: "/announcements",
    forHeading: "Sssch!",
  },
  {
    title: "bookshelf",
    icon: <IoBook size={20} color="inherit" />,
    onActive: <IoBook size={20} color="inherit" />,
    href: "/bookshelf",
    forHeading: "Resources that you need.",
  },
];
export const registrationSteps: Array<{
  component: JSX.Element;
  ph: "role" | "pers" | "cred";
}> = [
  { component: <RoleCheckmark key={0} />, ph: "role" },
  {
    component: <PersonalDetailInputs key={1} />,
    ph: "pers",
  },
  { component: <CredentialInputs key={2} />, ph: "cred" },
];
export const modalListItems: Array<{
  title: "settings" | "help";
  icon: JSX.Element;
  link: string;
}> = [
  {
    title: "settings",
    icon: <IoSettings id="profile_modal" size={20} />,
    link: "/dashboard/settings",
  },
  {
    title: "help",
    icon: <IoHelpCircle id="profile_modal" size={20} />,
    link: "/dashboard/help",
  },
];
export const settingUpNewRoomSteps = [
  {
    title: "General Information",
    icon: <IoFileTrayFull size={26} />,
    component: <GeneralInfo />,
  },
  {
    title: "Cover Picture",
    icon: <IoImage size={26} />,
    component: <CoverPicture />,
  },
  {
    title: "Add Categories",
    icon: <IoList size={26} />,
    component: <Categories />,
  },
  {
    title: "Room Members",
    icon: <IoPeople size={26} />,
    component: <Members />,
  },
];

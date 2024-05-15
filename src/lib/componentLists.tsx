import { GE, US } from "country-flag-icons/react/3x2";
import {
  IoHome,
  IoCalendarSharp,
  IoReceipt,
  IoInformationCircle,
  IoSchool,
  IoMoon,
  IoSunny,
  IoDesktop,
} from "react-icons/io5";

export const themeList: ThemeListType = [
  {
    title: "os",
    icon: <IoDesktop size={20} color="inherit" />,
  },
  {
    title: "light",
    icon: <IoSunny size={20} color="inherit" />,
  },
  {
    title: "dark",
    icon: <IoMoon size={20} color="inherit" />,
  },
];
export const langPrefList: LangPrefListType = [
  { title: "ka", icon: <GE className="bg-white w-6 h-4" /> },
  { title: "en", icon: <US className="bg-white w-6 h-4" /> },
];
export const navItems: LandingNavItemsType = [
  { placeholder: "home", href: "/", whenActive: "/" },
  { placeholder: "products", href: "/products", whenActive: "/products" },
  { placeholder: "blog", href: "/blog", whenActive: "/blog" },
  { placeholder: "contact", href: "/contact", whenActive: "/contact" },
  { placeholder: "profile", href: "/profile", whenActive: "/profile" },
  { placeholder: "admin", href: "/admin", whenActive: "/admin" },
];
export const dashboardNavigationList: DashboardNavListTyope = [
  {
    title: "Home",
    icon: <IoHome size={20} color="inherit" />,
    onActive: <IoHome size={20} color="inherit" />,
    href: "",
    forHeading: "Welcome, STUDENT!",
  },
  {
    title: "Courses",
    icon: <IoSchool size={20} color="inherit" />,
    onActive: <IoSchool size={20} color="inherit" />,
    href: "/courses",
    forHeading: "Your courses",
  },
  {
    title: "Schedule",
    icon: <IoCalendarSharp size={20} color="inherit" />,
    onActive: <IoCalendarSharp size={20} color="inherit" />,
    href: "/schedule",
    forHeading: "Plans here!",
  },
  {
    title: "Annoucements",
    icon: <IoInformationCircle size={20} color="inherit" />,
    onActive: <IoInformationCircle size={20} color="inherit" />,
    href: "/annoucements",
    forHeading: "Sssch!",
  },
  {
    title: "El-Resources",
    icon: <IoReceipt size={20} color="inherit" />,
    onActive: <IoReceipt size={20} color="inherit" />,
    href: "/el-resources",
    forHeading: "Book that you need.",
  },
];

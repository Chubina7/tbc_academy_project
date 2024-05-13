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

export const themeList: ThemeListType = {
  light: {
    title: "light",
    icon: <IoSunny size={20} color="inherit" />,
  },
  dark: {
    title: "dark",
    icon: <IoMoon size={20} color="inherit" />,
  },
  os: {
    title: "os",
    icon: <IoDesktop size={20} color="inherit" />,
  },
};

export const dashboardNavigationList = [
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

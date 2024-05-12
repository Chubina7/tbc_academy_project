import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { BsExclamationSquareFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";

export const themeList: ThemeListType = {
  light: {
    title: "light",
    icon: <FiSun size={20} />,
  },
  dark: {
    title: "dark",
    icon: <FiMoon size={20} />,
  },
  os: {
    title: "os",
    icon: <FiMonitor size={20} />,
  },
};

export const dashboardNavigationList = [
  {
    title: "Home",
    icon: <IoHome size={20} color="#2B3674" />,
    onActive: <IoHome size={20} color="#603CFF" />,
    href: "",
    forHeading: "Welcome, STUDENT!",
  },
  {
    title: "Courses",
    icon: <FaListAlt size={20} color="#2B3674" />,
    onActive: <FaListAlt size={20} color="#603CFF" />,
    href: "/courses",
    forHeading: "Your courses",
  },
  {
    title: "Schedule",
    icon: <AiFillSchedule size={20} color="#2B3674" />,
    onActive: <AiFillSchedule size={20} color="#603CFF" />,
    href: "/schedule",
    forHeading: "Plans here!",
  },
  {
    title: "Annoucements",
    icon: <BsExclamationSquareFill size={20} color="#2B3674" />,
    onActive: <BsExclamationSquareFill size={20} color="#603CFF" />,
    href: "/annoucements",
    forHeading: "Sssch!",
  },
  {
    title: "El-Resources",
    icon: <FaBookBookmark size={20} color="#2B3674" />,
    onActive: <FaBookBookmark size={20} color="#603CFF" />,
    href: "/el-resources",
    forHeading: "Book that you need.",
  },
];

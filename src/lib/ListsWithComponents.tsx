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
import RoleCheckmark from "../components/auth/register_page/card/steps/RoleCheckmark";
import PersonalDetailInputs from "../components/auth/register_page/card/steps/presonal_details/PersonalDetailInputs";
import CredentialInputs from "../components/auth/register_page/card/steps/acc_credentials/CredentialInputs";

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
  { placeholder: "contact", href: "/contact", whenActive: "/contact" },
  { placeholder: "about", href: "/about", whenActive: "/about" },
  { placeholder: "admin", href: "/admin", whenActive: "/admin" },
];
export const dashboardNavigationList: DashboardNavListType = [
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
export const loginHeadingWords = [
  <span key={0} className="transition-all duration-300 font-bold">
    STUDENT
  </span>,
  <span key={1} className="transition-all duration-300 font-bold">
    TEACHER
  </span>,
];
export const registrationSteps = [
  { component: <RoleCheckmark key={0} />, heading: "Choose Role" },
  {
    component: <PersonalDetailInputs key={1} />,
    heading: "Enter Personal Details",
  },
  { component: <CredentialInputs key={2} />, heading: "Account Credentials" },
];

import { GE, US } from "country-flag-icons/react/3x2";
import {
  IoHome,
  IoCalendarSharp,
  IoReceipt,
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
import Appear from "../../components/ui/framerMotionDivs/Appear";
import RoleCheckmark from "../../components/auth/register_page/card/steps/RoleCheckmark";
import PersonalDetailInputs from "../../components/auth/register_page/card/steps/presonal_details/PersonalDetailInputs";
import CredentialInputs from "../../components/auth/register_page/card/steps/acc_credentials/CredentialInputs";
import GeneralInfo from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/general_info_field/GeneralInfo";
import CoverPicture from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/cover_pict_field/CoverPicture";
import Categories from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/categories_field/Categories";
import Members from "../../components/dashboard/rooms_page/all_page/new_room_setup/parts/members_field/Members";

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
    title: "Rooms",
    icon: <IoChatbubbles size={20} color="inherit" />,
    onActive: <IoChatbubbles size={20} color="inherit" />,
    href: "/rooms",
    forHeading: "Rooms you enrolled",
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
  <Appear key={0} className="transition-colors duration-300 font-bold">
    STUDENT
  </Appear>,
  <Appear key={1} className="transition-colors duration-300 font-bold">
    TEACHER
  </Appear>,
];
export const registrationSteps = [
  { component: <RoleCheckmark key={0} />, heading: "Choose Role" },
  {
    component: <PersonalDetailInputs key={1} />,
    heading: "Enter Personal Details",
  },
  { component: <CredentialInputs key={2} />, heading: "Account Credentials" },
];
export const modalListItems = [
  {
    title: "Settings",
    icon: <IoSettings id="profile_modal" size={20} />,
    link: "/dashboard/settings",
  },
  {
    title: "Help Center",
    icon: <IoHelpCircle id="profile_modal" size={20} />,
    link: "/dashboard/help",
  },
];
export const settingUpNewRoomSteps = [
  {
    title: "General Information",
    icon: <IoFileTrayFull size={26} />,
    component: <GeneralInfo key={0} />,
  },
  {
    title: "Cover Picture",
    icon: <IoImage size={26} />,
    component: <CoverPicture key={1} />,
  },
  {
    title: "Add Categories",
    icon: <IoList size={26} />,
    component: <Categories key={2} />,
  },
  {
    title: "Room Members",
    icon: <IoPeople size={26} />,
    component: <Members key={3} />,
  },
];

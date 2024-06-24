import {
  IoPersonCircle,
  // IoKey,
  IoCard,
  IoTrash,
} from "react-icons/io5";
import NavItem from "./NavItem";

export const profileSegments = [
  {
    title: "Personal Info",
    icon: <IoPersonCircle size={24} />,
    queryValue: "personal_info",
  },
  // {
  //   title: "Authorization Details",
  //   icon: <IoKey size={24} />,
  //   queryValue: "auth_details",
  // },
  {
    title: "Payment Details",
    icon: <IoCard size={24} />,
    queryValue: "payment_details",
  },
  {
    title: "Delete Account",
    icon: <IoTrash size={24} />,
    queryValue: "delete_acc",
  },
];

export default function Navigation() {
  return (
    <div className="h-fit bg-[#FFFFFF] dark:bg-[#352F44] overflow-hidden lg:overflow-visible shadow-custom rounded-xl lg:py-4 transition-all duration-300 | flex lg:flex-col justify-center items-start">
      {profileSegments.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </div>
  );
}

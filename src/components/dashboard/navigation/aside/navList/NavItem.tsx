"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import Tooltip from "./Tooltip";
import VariantsListItem from "../../../../ui/framerMotionDivs/variants/VariantsListItem";
import { useTranslations } from "next-intl";

interface Props {
  data: IDashboardNavListItem;
}

export default function NavItem({ data }: Props) {
  // const [isHovering, setIsHovering] = useState(false);
  // const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const path = usePathname();
  const isActive = path.substring(10) === data.href;
  const t = useTranslations("dashboard.navigation");

  // const handleMouseEnter = () => {
  //   const i = setTimeout(() => {
  //     setIsHovering(true);
  //   }, 1000);
  //   setTimeoutId(i);
  // };
  // const handleMouseLeave = () => {
  //   clearTimeout(timeoutId);
  //   setIsHovering(false);
  // };

  return (
    <Link
      href={`/dashboard${data.href}`}
      // onClick={handleMouseLeave}
    >
      <VariantsListItem
        className={`h-6 flex justify-start items-center gap-7 hover:scale-105 transition-colors duration-300 ${
          isActive && "scale-105"
        }`}
      >
        <div
          className="relative !z-50"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <div
            className={`text-[#2B3674] dark:text-[#4765AB] transition-all duration-300 ${
              isActive
                ? "opacity-100 font-bold scale-105 text-[#603CFF] dark:text-[#8BA8FF]"
                : "opacity-40"
            }`}
          >
            {isActive ? data.onActive : data.icon}
          </div>
          {/* {isHovering && <Tooltip title={data.title} />} */}
        </div>
        <p
          className={`hidden xl:block transition-all duration-300 ${
            isActive ? "opacity-100 font-bold scale-105" : "opacity-40"
          }`}
        >
          {t(`${data.title}`)}
        </p>
      </VariantsListItem>
    </Link>
  );
}

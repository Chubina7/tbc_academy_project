"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
//
import { IoHome } from "react-icons/io5";
import { BsExclamationSquareFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";

const list = [
  {
    title: "Home",
    icon: <IoHome size={20} color="#2B3674" />,
    onActive: <IoHome size={20} color="#603CFF" />,
    href: "",
  },
  {
    title: "Courses",
    icon: <FaListAlt size={20} color="#2B3674" />,
    onActive: <FaListAlt size={20} color="#603CFF" />,
    href: "/courses",
  },
  {
    title: "Schedule",
    icon: <AiFillSchedule size={20} color="#2B3674" />,
    onActive: <AiFillSchedule size={20} color="#603CFF" />,
    href: "/schedule",
  },
  {
    title: "Annoucements",
    icon: <BsExclamationSquareFill size={20} color="#2B3674" />,
    onActive: <BsExclamationSquareFill size={20} color="#603CFF" />,
    href: "/annoucements",
  },
  {
    title: "El-Resources",
    icon: <FaBookBookmark size={20} color="#2B3674" />,
    onActive: <FaBookBookmark size={20} color="#603CFF" />,
    href: "/el-resources",
  },
];

export default function NavList() {
  const path = usePathname();

  return (
    <ul className="w-56 flex flex-col gap-3">
      {list.map((route, idx) => {
        const isActive = path.substring(10) === route.href;
        return (
          <Link key={idx} href={`/dashboard${route.href}`}>
            <li
              className={`flex justify-start items-center gap-7 p-2 transition-all duration-300 ${
                isActive ? "opacity-100 font-bold" : "opacity-40"
              }`}
            >
              {isActive ? route.onActive : route.icon}
              {route.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

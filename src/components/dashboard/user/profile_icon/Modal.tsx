"use client";

import Link from "next/link";
import { modalListItems } from "../../../../lib/lists/ListsWithComponents";
import SignOutBtn from "../../../landing/header/SignOutBtn";
import Appear from "../../../ui/framerMotionDivs/Appear";

interface Props {
  data: { user_id: string; email: string };
  modalCloser: () => void;
}

export default function Modal({ data, modalCloser }: Props) {
  const { user_id, email } = data;

  return (
    <Appear className="bg-[#FFFFFF] dark:bg-[#352F44] text-inherit rounded-lg p-3 text-nowrap | absolute top-[140%] right-0 min-w-52 | flex flex-col justify-center items-center gap-2 | transition-colors duration-300">
      <Link
        href="/dashboard/profile"
        className="w-full flex flex-col justify-center items-start px-3 py-1 rounded-xl hover:bg-[#5C5470]"
        onClick={modalCloser}
      >
        <h1 className="text-lg">
          {user_id} {user_id}
        </h1>
        <p className="text-sm opacity-60">{email}</p>
      </Link>
      <ul className="w-full flex flex-col items-start justify-center">
        {modalListItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="w-full"
            onClick={modalCloser}
          >
            <li className="w-full flex justify-start items-center gap-2 px-3 py-1 rounded-xl hover:bg-[#5C5470]">
              {item.icon}
              <p>{item.title}</p>
            </li>
          </Link>
        ))}
      </ul>
      <hr className="w-full border rounded-full border-[#F4F7FF] dark:border-[#2A2438] opacity-60 my-1" />
      <span className="w-full" onClick={modalCloser}>
        <SignOutBtn />
      </span>
    </Appear>
  );
}

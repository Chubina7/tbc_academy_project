"use client";

import SignOut from "./SignOut";
import List from "./List";
import ProfileLink from "./ProfileLink";
import { useEffect } from "react";

interface Props {
  data: { user_id: string; email: string };
  modalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Modal({ data, modalState }: Props) {
  const { user_id, email } = data;
  const [isOpen, setIsOpen] = modalState;

  const handleModal = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleMouseEvent = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.id !== "profile_modal") {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleMouseEvent);

    return () => {
      window.removeEventListener("mousedown", handleMouseEvent);
    };
  }, [setIsOpen]);

  if (isOpen) {
    return (
      <div
        className="bg-[#FFFFFF] dark:bg-[#352F44] text-inherit rounded-lg p-3 text-nowrap | absolute top-[140%] right-0 min-w-52 | flex flex-col justify-center items-center gap-2 | transition-colors duration-300 z-50 | shadow-custom"
        id="profile_modal"
      >
        <ProfileLink
          email={email}
          modalCloser={handleModal}
          surname={user_id}
          username={user_id}
        />
        <List modalCloser={handleModal} />
        <hr className="w-full border rounded-full border-[#F4F7FF] dark:border-[#2A2438] opacity-60 my-1" />
        <SignOut modalCloser={handleModal} />
      </div>
    );
  } else {
    return null;
  }
}

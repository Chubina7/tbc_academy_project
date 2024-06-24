"use client";

import SignOut from "./SignOut";
import List from "./List";
import ProfileLink from "./ProfileLink";
import useOutsideClickTrack from "../../../../../hooks/useOutsideClickTrack";

interface Props {
  data: {
    username: string;
    surname: string | null;
    email: string;
    user_id: string;
  };
  modalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Modal({ data, modalState }: Props) {
  const { surname, username, email, user_id } = data;
  const [isOpen, setIsOpen] = modalState;
  useOutsideClickTrack("profile_modal", modalState);

  const handleModal = () => setIsOpen(false);

  if (isOpen) {
    return (
      <div
        className="bg-[#FFFFFF] dark:bg-[#352F44] text-inherit rounded-lg p-3 text-nowrap | fixed top-[120%] right-0 min-w-52 | flex flex-col justify-center items-center gap-2 | transition-colors duration-300 | shadow-custom"
        id="profile_modal"
      >
        <ProfileLink
          user_id={user_id}
          email={email}
          modalCloser={handleModal}
          username={username}
          surname={surname}
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

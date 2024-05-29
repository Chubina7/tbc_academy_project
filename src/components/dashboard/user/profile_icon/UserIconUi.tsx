"use client";

import Image from "next/image";
import React, { useState } from "react";
import anonym from "/public/anonym_user.webp";
import Modal from "./Modal";

interface Props {
  data: {
    user_id: string;
    image: string;
    email: string;
  };
}

export default function UserIconUi({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { image, user_id, email } = data;

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <div
        className="flex gap-2 justify-center items-center cursor-pointer"
        onClick={handleModal}
      >
        <Image
          src={image ? image : anonym}
          alt="anonym"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
      {isOpen && <Modal data={{ user_id, email }} modalCloser={handleModal} />}
    </div>
  );
}

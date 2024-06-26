"use client";

import DescriptionInput from "./DescriptionInput";
import ModalBg from "./ModalBg";
import TitleInput from "./TitleInput";
import Heading from "./Heading";
import UploadedFilePrev from "./UploadedFilePrev";
import Submit from "./Submit";
import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";
import SelectRoom from "./selection/SelectRoom";

interface Props {
  closeModal: () => void;
}

export default function Modal({ closeModal }: Props) {
  const { error } = useContext(ctx);

  return (
    <ModalBg>
      <Heading handler={closeModal} />
      <TitleInput />
      <DescriptionInput />
      <UploadedFilePrev />
      <p className="w-full text-right text-red-600">
        {error.trim() !== "" && error}
      </p>
      <div className="w-full flex justify-between items-end gap-2">
        <div className="h-full flex flex-col justify-center items-start gap-5">
          <SelectRoom />
        </div>
        <Submit closeModal={closeModal} />
      </div>
    </ModalBg>
  );
}

import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";

interface Props {
  closeModal: () => void;
}

export default function CloseBtn({ closeModal }: Props) {
  const { isLoading } = useContext(ctx);
  return (
    <IoCloseCircle
      size={30}
      onClick={() => {
        if (isLoading) return;
        closeModal();
      }}
      className={`${
        isLoading ? "opacity-60 cursor-default" : "opacity-100 cursor-pointer"
      }`}
    />
  );
}

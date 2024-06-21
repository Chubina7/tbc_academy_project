import { IoCloseCircle } from "react-icons/io5";

interface Props {
  closeModal: () => void;
}

export default function CloseBtn({ closeModal }: Props) {
  return (
    <IoCloseCircle size={30} onClick={closeModal} className="cursor-pointer" />
  );
}

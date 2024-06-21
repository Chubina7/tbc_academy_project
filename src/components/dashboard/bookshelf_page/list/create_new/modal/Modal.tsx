import DescriptionInput from "./DescriptionInput";
import ModalBg from "./ModalBg";
import TitleInput from "./TitleInput";
import Heading from "./Heading";
import UploadedFilePrev from "./UploadedFilePrev";
import Submit from "./Submit";
import Visibility from "./visibility/Visibility";

interface Props {
  closeModal: () => void;
  uploadedFileName: string;
  uploadedFileType: BookTypes;
}

export default function Modal({
  closeModal,
  uploadedFileName,
  uploadedFileType,
}: Props) {
  return (
    <ModalBg>
      <Heading handler={closeModal} />
      <TitleInput />
      <DescriptionInput />
      <UploadedFilePrev name={uploadedFileName} type={uploadedFileType} />
      <div className="w-full flex justify-between items-end gap-2">
        <Visibility />
        <Submit />
      </div>
    </ModalBg>
  );
}

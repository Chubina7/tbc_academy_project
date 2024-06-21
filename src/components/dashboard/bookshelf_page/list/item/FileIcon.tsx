import { IoDocument } from "react-icons/io5";

interface Props {
  fileType: string;
}

export default function FileIcon({ fileType }: Props) {
  // switch depending on the type of the file
  switch (fileType) {
    case "pdf":
      return <IoDocument size={56} />;
    default:
      return <IoDocument size={56} />;
  }
}

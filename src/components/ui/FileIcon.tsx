import {
  FaFileImage,
  FaFilePdf,
  FaFileAlt,
  FaFileWord,
  FaFilePowerpoint,
} from "react-icons/fa";

interface Props {
  fileType: BookTypes;
}

const fileTypeIcons = {
  "image/bmp": <FaFileImage size={44} />,
  "image/gif": <FaFileImage size={44} />,
  "image/jpeg": <FaFileImage size={44} />,
  "image/png": <FaFileImage size={44} />,
  "image/tiff": <FaFileImage size={44} />,
  "image/webp": <FaFileImage size={44} />,
  "image/x-icon": <FaFileImage size={44} />,
  "image/svg+xml": <FaFileImage size={44} />,
  "application/pdf": <FaFilePdf size={44} />,
  "text/plain": <FaFileAlt size={44} />,
  "application/msword": <FaFileWord size={44} />,
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": (
    <FaFileWord size={44} />
  ),
  "application/vnd.ms-powerpoint": <FaFilePowerpoint size={44} />,
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": (
    <FaFilePowerpoint size={44} />
  ),
};

export default function FileIcon({ fileType }: Props) {
  return fileTypeIcons[fileType];
}

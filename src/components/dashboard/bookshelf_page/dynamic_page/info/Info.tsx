import FileIcon from "../../../../ui/FileIcon";
import DeleteBtn from "./delete/DeleteBtn";
import DownloadBtn from "./DownloadBtn";
import { IoPersonOutline } from "react-icons/io5";

interface Props {
  data: {
    username: string;
    surname: string | null;
    book_title: string;
    book_description: string;
    blob_download_link: string;
    blob_type: BookTypes;
    blob_name: string;
  };
  book_id: string;
}

export default function Info({ data, book_id }: Props) {
  const {
    blob_download_link,
    blob_name,
    blob_type,
    book_description,
    book_title,
    surname,
    username,
  } = data;

  return (
    <div className="w-full h-full max-w-4xl flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex gap-1 justify-start items-center">
          <IoPersonOutline size={20} />
          <h1>
            {username} {surname}
          </h1>
        </div>
        <DeleteBtn book_id={book_id} />
      </div>
      <h1 className="text-3xl font-semibold">{book_title}</h1>
      <p className="opacity-60">{book_description}</p>
      <DownloadBtn link={blob_download_link} />
      <div className="w-full h-full border-2 border-dashed rounded-xl p-3 flex flex-col justify-center items-center gap-2">
        <FileIcon fileType={blob_type} />
        <p>{blob_name}</p>
      </div>
    </div>
  );
}

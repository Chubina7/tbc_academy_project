import FileIcon from "../../../../ui/FileIcon";
import DownloadBtn from "./DownloadBtn";
import { IoPersonOutline } from "react-icons/io5";

export default function Info() {
  return (
    <div className="w-full h-full max-w-4xl flex flex-col gap-4">
      <div className="w-full flex gap-1 justify-start items-center">
        <IoPersonOutline size={20} />
        <h1>Author</h1>
      </div>
      <h1 className="text-3xl font-semibold">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p className="opacity-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        officia iure adipisci quibusdam quae natus. Esse, sunt voluptatum!
      </p>
      <DownloadBtn />
      <div className="w-full h-full border-2 border-dashed rounded-xl p-3 flex flex-col justify-center items-center gap-2">
        <FileIcon fileType={"application/msword"} />
        <p>Book name</p>
      </div>
    </div>
  );
}

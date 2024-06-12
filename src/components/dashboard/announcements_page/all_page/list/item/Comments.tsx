import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface Props {
  data: number;
}

export default function Comments({ data }: Props) {
  return (
    <div className="flex justify-center items-center gap-1">
      <IoChatbubbleEllipsesOutline size={18} />
      <p>{data}</p>
    </div>
  );
}

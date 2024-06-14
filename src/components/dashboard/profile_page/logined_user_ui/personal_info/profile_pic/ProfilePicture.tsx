import fallback_img from "/public/anonym_user.webp";
import ChangeBtn from "./ChangeBtn";
import DeleteBtn from "./DeleteBtn";
import ShownImg from "./ShownImg";

interface Props {
  data: string | null;
}

export default function ProfilePicture({ data }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-5 px-3">
      <ShownImg src={data || fallback_img} />
      <div className="flex flex-col gap-3 justify-center items-center">
        <ChangeBtn />
        <DeleteBtn />
      </div>
    </div>
  );
}

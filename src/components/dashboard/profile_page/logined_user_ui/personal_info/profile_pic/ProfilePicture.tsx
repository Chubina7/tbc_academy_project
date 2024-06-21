import ChangeBtn from "./ChangeBtn";
import DeleteBtn from "./DeleteBtn";
import ShownImg from "./ShownImg";

export default function ProfilePicture() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-5 px-3">
      <ShownImg />
      <div className="flex flex-col gap-3 justify-center items-center">
        <ChangeBtn />
        <DeleteBtn />
      </div>
    </div>
  );
}

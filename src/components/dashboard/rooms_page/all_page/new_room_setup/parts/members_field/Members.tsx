import Appear from "../../../../../../ui/framerMotionDivs/Appear";
import UserList from "./list/UserList";

export default function Members() {
  return (
    <Appear className="w-full max-w-4xl h-full flex flex-col gap-5">
      <h1 className="w-full text-2xl sm:text-3xl text-center font-bold">
        Enroll Other Members
      </h1>
      <UserList />
    </Appear>
  );
}

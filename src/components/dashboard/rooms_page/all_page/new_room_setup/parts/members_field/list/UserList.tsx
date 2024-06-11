import Input from "../Input";
import List from "./List";

export default function UserList() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <Input />
      <List />
    </div>
  );
}

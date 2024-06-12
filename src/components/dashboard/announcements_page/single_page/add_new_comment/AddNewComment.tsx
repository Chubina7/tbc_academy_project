import Btn from "./Btn";
import Input from "./Input";

export default function AddNewComment() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-end gap-3">
      <h1 className="w-full max-w-4xl font-bold text-2xl">Add new comment</h1>
      <Input />
      <Btn />
    </div>
  );
}

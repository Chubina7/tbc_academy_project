import Btn from "./add_new_act/Btn";

export default function Heading() {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="w-full font-bold text-2xl">Members</h1>
      <Btn />
    </div>
  );
}
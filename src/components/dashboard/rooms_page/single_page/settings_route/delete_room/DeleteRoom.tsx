import DeleteBtn from "./DeleteBtn";

export default function DeleteRoom() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl select-none">Delete room</h1>
      <div className="relative z-50 w-full flex justify-between items-end gap-5">
        <p>Permanently delete room and its related data</p>
        <DeleteBtn />
      </div>
    </div>
  );
}

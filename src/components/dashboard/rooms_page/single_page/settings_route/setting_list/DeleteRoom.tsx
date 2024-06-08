export default function DeleteRoom() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl">Delete room</h1>
      <div className="w-full flex justify-between items-end gap-5">
        <p>Permanently delete room and its related data</p>
        <button className="h-fit px-3 py-1 rounded-lg bg-red-600 text-white">
          DELETE
        </button>
      </div>
    </div>
  );
}

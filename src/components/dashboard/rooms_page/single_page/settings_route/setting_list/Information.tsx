export default function Information() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl">Information</h1>
      <div className="w-full flex flex-col gap-3">
        <input
          className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
          type="text"
          placeholder="Room title"
        />
        <textarea
          className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
          name="description"
          id="description"
          placeholder="Room description"
        />
      </div>
    </div>
  );
}

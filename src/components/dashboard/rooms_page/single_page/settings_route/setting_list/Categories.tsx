import { IoClose } from "react-icons/io5";

export default function Categories() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl">Categories</h1>
      <div className="flex flex-col gap-3">
        <ul>
          <li className="w-fit inline-block border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 m-1.5 transition-all duration-300">
            <div className="flex justify-center items-center gap-2">
              <p className="text-sm text-nowrap">Testasfasststtes</p>
              <IoClose size={18} className="cursor-pointer" />
            </div>
          </li>
        </ul>
        <div className=" w-full flex gap-5">
          <div className="w-full relative z-40">
            <input
              className="w-full border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
              type="search"
              name="suggest_categories"
              id="suggest_categories"
              placeholder="Add categories"
            />
            <div className="hidden absolute w-full top-[100%] left-0 overflow-hidden bg-[#FFFFFF] dark:bg-[#352F44] pt-3 rounded-lg transition-colors duration-300">
              <h1 className="w-full p-3 hover:bg-red-400 cursor-pointer">
                Suggestion
              </h1>
              <h1 className="w-full p-3 hover:bg-red-400 cursor-pointer">
                Suggestion
              </h1>
              <h1 className="w-full p-3 hover:bg-red-400 cursor-pointer">
                Suggestion
              </h1>
              <h1 className="w-full p-3 hover:bg-red-400 cursor-pointer">
                Suggestion
              </h1>
            </div>
          </div>

          <button className="bg-red-300 rounded-lg px-3 py-1">Add</button>
        </div>
      </div>
    </div>
  );
}

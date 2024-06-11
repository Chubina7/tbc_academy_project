import List from "./List";
import AddNew from "./new/AddNew";

const arr = [
  "marketing",
  "math",
  "programming",
  "web development",
  "data science",
  "business",
  "economics",
  "chemistry",
  "philosophy",
  "humanities",
];

export default function Categories() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl select-none">Categories</h1>
      <div className="flex flex-col gap-3">
        <List data={arr} />
        <AddNew />
      </div>
    </div>
  );
}

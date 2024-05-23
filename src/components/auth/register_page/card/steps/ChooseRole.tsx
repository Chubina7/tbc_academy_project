export default function ChooseRole() {
  return (
    <div className="w-full flex flex-col gap-2">
      <i className="w-full text-right">Select your role</i>
      <button className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100 | ">
        Teacher
      </button>
      <button className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100 | ">
        Student
      </button>
    </div>
  );
}

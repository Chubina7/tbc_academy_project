"use client";

interface Props {
  action: (e: React.FormEvent) => void;
}

export default function ChangeBtn({ action }: Props) {
  return (
    <button
      type="submit"
      className="text-nowrap px-3 py-1 border-2 border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] rounded-lg select-none transition-all duration-300"
      onClick={action}
    >
      Save
    </button>
  );
}

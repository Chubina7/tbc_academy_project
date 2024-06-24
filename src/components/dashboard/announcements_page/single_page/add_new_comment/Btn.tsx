interface Props {
  handleSubmit: () => void;
  isDisabled: boolean;
}

export default function Btn({ handleSubmit, isDisabled }: Props) {
  return (
    <button
      className="px-3 py-1 border-2 border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] rounded-lg select-none transition-all duration-30"
      onClick={handleSubmit}
      disabled={isDisabled}
    >
      Add Comment
    </button>
  );
}

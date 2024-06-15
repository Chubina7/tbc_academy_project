interface Props {
  action: () => void;
}

export default function SaveBtn({ action }: Props) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-red-400"
      onClick={() => action()}
    >
      Save <span className="hidden md:inline-block">Changes</span>
    </button>
  );
}

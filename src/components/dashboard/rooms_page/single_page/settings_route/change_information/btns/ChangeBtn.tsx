"use client";

interface Props {
  action: (e: React.FormEvent) => void;
}

export default function ChangeBtn({ action }: Props) {
  return (
    <button
      type="submit"
      className="text-nowrap px-3 py-1 bg-red-300 rounded-lg select-none"
      onClick={action}
    >
      Save
    </button>
  );
}

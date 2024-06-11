interface Props {
  changeHandler: (e: React.FormEvent) => void;
}

export default function ChangeBtn({ changeHandler }: Props) {
  return (
    <button
      type="submit"
      className="text-nowrap px-3 py-1 bg-red-300 rounded-lg select-none"
      onClick={changeHandler}
    >
      Save
    </button>
  );
}

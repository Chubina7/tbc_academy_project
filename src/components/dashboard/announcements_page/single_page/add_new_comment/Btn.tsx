interface Props {
  handleSubmit: () => void;
  isDisabled: boolean;
}

export default function Btn({ handleSubmit, isDisabled }: Props) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-red-400"
      onClick={handleSubmit}
      disabled={isDisabled}
    >
      Add Comment
    </button>
  );
}

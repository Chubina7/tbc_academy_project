interface Props {
  action: () => void;
}

export default function CancelBtn({ action }: Props) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-green-400"
      onClick={() => action()}
    >
      Cancel
    </button>
  );
}

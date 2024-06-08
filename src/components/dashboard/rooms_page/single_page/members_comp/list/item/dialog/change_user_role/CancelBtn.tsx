interface Props {
  action: () => void;
}

export default function CancelBtn({ action }: Props) {
  return (
    <button className="border px-3 py-1 rounded-lg" onClick={action}>
      Cancel
    </button>
  );
}

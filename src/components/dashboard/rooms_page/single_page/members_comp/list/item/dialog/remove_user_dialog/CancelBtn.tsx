interface Props {
  action: () => void;
  isLoading: boolean;
}
export default function CancelBtn({ action, isLoading }: Props) {
  return (
    <button
      className="border px-3 py-1 rounded-lg disabled:opacity-60"
      onClick={action}
      disabled={isLoading}
    >
      Cancel
    </button>
  );
}

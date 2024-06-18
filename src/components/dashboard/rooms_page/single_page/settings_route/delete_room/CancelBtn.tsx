interface Props {
  modalHandler: () => void;
  isLoading: boolean;
}

export default function CancelBtn({ modalHandler, isLoading }: Props) {
  return (
    <button
      className={`px-3 py-1 border rounded-lg ${
        isLoading ? "opacity-60" : "opacity-100"
      }`}
      onClick={modalHandler}
      disabled={isLoading}
    >
      Cancel
    </button>
  );
}

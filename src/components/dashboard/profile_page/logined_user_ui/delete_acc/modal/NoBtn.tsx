interface Props {
  closeModal: () => void;
  isLoading: boolean;
}

export default function NoBtn({ closeModal, isLoading }: Props) {
  return (
    <button
      onClick={closeModal}
      className={`px-3 py-1 rounded-lg bg-green-600 ${
        isLoading ? "opacity-60" : "opacity-100"
      }`}
      disabled={isLoading}
    >
      No
    </button>
  );
}

interface Props {
  closeModal: () => void;
}

export default function NoBtn({ closeModal }: Props) {
  return (
    <button onClick={closeModal} className="px-3 py-1 rounded-lg bg-green-600">
      No
    </button>
  );
}

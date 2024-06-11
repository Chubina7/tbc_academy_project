interface Props {
  modalHandler: () => void;
}

export default function CancelBtn({ modalHandler }: Props) {
  return (
    <button className="px-3 py-1 border rounded-lg" onClick={modalHandler}>
      Cancel
    </button>
  );
}

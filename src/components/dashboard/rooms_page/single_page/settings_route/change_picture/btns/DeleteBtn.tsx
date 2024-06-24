interface Props {
  deleteHandler: () => void;
}
export default function DeleteBtn({ deleteHandler }: Props) {
  return (
    <button className="bg-red-600 rounded-lg px-3 py-1" onClick={deleteHandler}>
      Cancel
    </button>
  );
}

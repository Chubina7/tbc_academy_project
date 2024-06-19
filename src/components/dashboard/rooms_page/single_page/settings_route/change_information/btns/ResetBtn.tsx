interface Props {
  action: () => void;
}

export default function ResetBtn({ action }: Props) {
  return (
    <button className="px-3 py-1 rounded-lg bg-green-600" onClick={action}>
      RESET
    </button>
  );
}

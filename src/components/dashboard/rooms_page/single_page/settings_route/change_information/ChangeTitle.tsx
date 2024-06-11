type formDataType = {
  title: string;
  description: string;
};

interface Props {
  state: [formDataType, React.Dispatch<React.SetStateAction<formDataType>>];
}

export default function ChangeTitle({ state }: Props) {
  return (
    <input
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      type="text"
      placeholder="Room title"
      value={state[0].title}
      onChange={(e) => state[1]((prev) => ({ ...prev, title: e.target.value }))}
    />
  );
}

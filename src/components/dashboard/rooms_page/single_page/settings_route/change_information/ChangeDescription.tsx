type formDataType = {
  title: string;
  description: string;
};

interface Props {
  state: [formDataType, React.Dispatch<React.SetStateAction<formDataType>>];
}

export default function ChangeDescription({ state }: Props) {
  return (
    <textarea
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      placeholder="This is a course about..."
      value={state[0].description}
      onChange={(e) =>
        state[1]((prev) => ({ ...prev, description: e.target.value }))
      }
    />
  );
}

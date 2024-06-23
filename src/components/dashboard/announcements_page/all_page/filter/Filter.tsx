import QueryItem from "./QueryItem";

interface Props {
  room_names: Array<string> | undefined;
}

export default function Filter({ room_names }: Props) {
  if (!room_names) return null;

  return (
    <div className="w-full max-w-4xl overflow-x-scroll scroll-hidden flex justify-start items-center gap-3">
      <QueryItem item="all" />
      {room_names.map((item, idx) => (
        <QueryItem key={idx} item={item} />
      ))}
    </div>
  );
}

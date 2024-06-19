interface Props {
  room_names: Array<string> | undefined;
}

export default function Filter({ room_names }: Props) {
  if (!room_names) return null;

  return (
    <div className="w-full max-w-4xl overflow-x-scroll scroll-hidden flex justify-start items-center gap-3">
      {room_names.map((item, idx) => (
        <p
          key={idx}
          className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      ))}
    </div>
  );
}

interface Props {
  data: string;
}

export default function Announcement({ data }: Props) {
  return (
    <p className="text-sm sm:text-base md:max-w-[70%] line-clamp-3">{data}</p>
  );
}

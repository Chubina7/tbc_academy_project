interface Props {
  data: string;
}

export default function Announcement({ data }: Props) {
  return <p className="text-base sm:text-lg">{data}</p>;
}

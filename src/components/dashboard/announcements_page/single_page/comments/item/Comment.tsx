interface Props {
  data: string;
}
export default function Comment({ data }: Props) {
  return <p className="w-full text-left text-sm">{data}</p>;
}

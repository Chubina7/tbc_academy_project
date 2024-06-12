interface Props {
  data: string;
}
export default function Comment({ data }: Props) {
  return <p className="text-sm">{data} </p>;
}

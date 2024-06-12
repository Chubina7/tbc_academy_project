interface Props {
  data: string;
}
export default function PostDate({ data }: Props) {
  const date = new Date(data);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return <p className="opacity-60">{`${day}/${month}/${year}`}</p>;
}

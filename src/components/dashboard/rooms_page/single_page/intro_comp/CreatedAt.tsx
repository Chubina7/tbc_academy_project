interface Props {
  data: string;
}

export default function CreatedAt({ data }: Props) {
  return <p className="w-full text-sm text-right mt-2">Created at: {data}</p>;
}

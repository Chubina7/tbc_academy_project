interface Props {
  data: string;
}

export default function Title({ data }: Props) {
  return <h1 className="font-semibold text-xl sm:text-2xl">{data}</h1>;
}

interface Props {
  text: string;
}
export default function Desc({ text }: Props) {
  return (
    <p className="line-clamp-3 opacity-60 w-full text-center text-sm">{text}</p>
  );
}

interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return (
    <h1 className="w-full text-center font-bold line-clamp-2 text-xl">
      {text}
    </h1>
  );
}

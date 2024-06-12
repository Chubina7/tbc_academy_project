interface Props {
  commented_at: string;
}

export default function PostTime({ commented_at }: Props) {
  // dinamically compute and change "x minute/hour/day ago" indicator

  const date = new Date(commented_at);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return (
    <p className="opacity-60 text-nowrap text-sm">{`${day}/${month}/${year}`}</p>
  );
}

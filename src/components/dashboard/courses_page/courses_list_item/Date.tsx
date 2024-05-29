export default function Date({ data }: { data: string }) {
  return (
    <p className="text-sm cursor-default">{data ? data : "No date found"}</p>
  );
}

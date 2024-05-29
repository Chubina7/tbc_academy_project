export default function CategoryLink({ data }: { data: string }) {
  return (
    <p className="w-fit font text-sm opacity-60 hover:underline cursor-pointer">
      {data}
    </p>
  );
}

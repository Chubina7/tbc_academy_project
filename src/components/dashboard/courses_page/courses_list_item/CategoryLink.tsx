export default function CategoryLink({ data }: { data: string }) {
  const word = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  
  return (
    <p className="w-fit font text-sm opacity-60 hover:underline cursor-pointer">
      {word}
    </p>
  );
}

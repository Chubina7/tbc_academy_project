export default async function BookmarkNum() {
  // const user_id = cookies().get("user_id")?.value || "";
  const sum = 1;

  if (sum > 0) {
    return (
      <p className="absolute top-0 left-0 flex justify-center items-center | bg-red-400 | text-xs font-bold px-1 py-px rounded-full translate-x-3 -translate-y-2 cursor-default">
        {sum}
      </p>
    );
  } else {
    return null;
  }
}

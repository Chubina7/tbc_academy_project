export default function Description() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-1">
      <label className="font-semibold text-lg">Description</label>
      <textarea
        placeholder="Tip: ..."
        rows={6}
        className="w-full text-lg rounded-lg border focus:outline-none bg-transparent px-3 py-1"
      />
    </div>
  );
}

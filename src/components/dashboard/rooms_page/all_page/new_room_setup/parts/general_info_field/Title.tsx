export default function Title() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-1">
      <label className="font-semibold text-lg">Title</label>
      <input
        type="text"
        placeholder="Introduction to programming"
        className="w-full text-lg rounded-lg border focus:outline-none bg-transparent px-3 py-1"
      />
    </div>
  );
}

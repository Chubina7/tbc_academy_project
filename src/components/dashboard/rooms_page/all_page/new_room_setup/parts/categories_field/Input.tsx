export default function Input() {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <input
        type="text"
        placeholder="Search categories.."
        className="w-full text-lg rounded-lg border focus:outline-none bg-transparent px-3 py-1"
      />
      <button className="px-4 py-1 bg-red-400 rounded-lg">Add</button>
    </div>
  );
}

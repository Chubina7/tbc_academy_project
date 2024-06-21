export default function TitleInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="title" className="select-none text-base">
        Add Title
      </label>
      <input
        className="px-3 py-1 rounded-lg border bg-transparent focus:outline-none"
        id="title"
        name="title"
        type="text"
        placeholder="Add meaningful title"
      />
    </div>
  );
}

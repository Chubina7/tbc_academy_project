export default function DescriptionInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="description" className="select-none text-base">
        Provide Description
      </label>
      <textarea
        id="description"
        name="description"
        className="px-3 py-1 rounded-lg border bg-transparent resize-none focus:outline-none"
        placeholder="Describe in few words, what you are uploading"
        rows={4}
      />
    </div>
  );
}

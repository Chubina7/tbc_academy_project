import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";

export default function DescriptionInput() {
  const { data, setData, setError, isLoading } = useContext(ctx);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="description"
        className={`select-none text-base ${isLoading ? "opacity-60" : "opacity-100"}`}
      >
        Provide Description
      </label>
      <textarea
        id="description"
        name="description"
        className="px-3 py-1 rounded-lg border bg-transparent resize-none focus:outline-none disabled:opacity-60"
        placeholder="Describe in few words, what you are uploading"
        rows={4}
        value={data.description}
        onChange={(e) => {
          setData((prev) => ({ ...prev, description: e.target.value }));
          setError("");
        }}
        disabled={isLoading}
      />
    </div>
  );
}

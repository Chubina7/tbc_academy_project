export default function SelectRoom() {
  return (
    <select
      name="Room"
      id="Room"
      className="rounded-lg bg-transparent dark:bg-[#5C5470] border-2 px-3 py-1 w-full max-w-40 overflow-x-hidden"
      defaultValue={"default"}
    >
      <option value="default" hidden>
        Select Room
      </option>
      <option value="room1">room 1</option>
      <option value="room2">room 2</option>
      <option value="room3">room 3</option>
      <option value="room4">room 4</option>
    </select>
  );
}

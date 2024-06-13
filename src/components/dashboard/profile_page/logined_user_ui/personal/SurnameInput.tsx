export default function SurnameInput() {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="surname">Surname</label>
      <input
        name="surname"
        id="surname"
        type="text"
        className="px-3 py-1 bg-transparent rounded-lg border-2 focus:outline-none"
        placeholder={"null"}
      />
    </div>
  );
}

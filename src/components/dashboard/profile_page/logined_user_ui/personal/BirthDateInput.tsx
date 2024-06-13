export default function BirthDateInput() {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="birth_date">Birth Date</label>
      <input
        name="birth_date"
        id="birth_date"
        type="text"
        className="px-3 py-1 bg-transparent rounded-lg border-2 focus:outline-none"
        placeholder="12/12/1212"
      />
    </div>
  );
}

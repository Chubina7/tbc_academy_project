export default function EmailInput() {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="text"
        className="px-3 py-1 bg-transparent rounded-lg border-2 focus:outline-none"
        placeholder="@gmail.com"
      />
    </div>
  );
}

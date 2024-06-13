export default function PasswordInput() {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        className="px-3 py-1 bg-transparent rounded-lg border-2 focus:outline-none"
        placeholder="paroli"
      />
    </div>
  );
}

export default function UsernameInput() {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="username">Username</label>
      <input
        name="username"
        id="username"
        type="text"
        className="px-3 py-1 bg-transparent rounded-lg border-2 focus:outline-none"
        placeholder="asdasdas"
      />
    </div>
  );
}

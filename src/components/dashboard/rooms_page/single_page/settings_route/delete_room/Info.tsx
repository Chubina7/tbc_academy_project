export default function Info() {
  return (
    <>
      <h1 className="w-full font-bold text-2xl">Confirm room deletion</h1>
      <p>Harmfull action!</p>
      <ul className="list-disc pl-6">
        <li>Members</li>
        <li>Resources</li>
        <li>Assignments</li>
        <li>Grades</li>
      </ul>
      <p>
        will be <span className="font-bold">permanently</span> deleted and{" "}
        <span className="font-bold">can not be undone</span>!
      </p>
    </>
  );
}

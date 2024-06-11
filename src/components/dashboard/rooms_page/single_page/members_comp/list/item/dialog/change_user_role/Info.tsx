export default function Info() {
  return (
    <>
      <h1 className="w-full font-bold text-2xl">Confirm Role Change</h1>
      <p className="text-sm">
        Are you sure you want to change NAME SURNAME`s role from{" "}
        <span className="font-bold">`student`</span> to
        <span className="font-bold">`teacher`</span>? <br /> <br /> If you
        change the role to <span className="font-bold">`teacher`</span>,
        selected user will have full access and control over the room. This
        change <span className="font-bold">cannot be undone</span>.
      </p>
    </>
  );
}

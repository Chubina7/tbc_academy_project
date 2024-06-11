import User from "./User";

export default function List() {
  // add filter logic depending on the search input after connecting the DB
  return (
    <div className="w-full h-72 overflow-y-scroll scroll-hidden">
      <User user_id="U1234" />
      <User user_id="U2345" />
      <User user_id="U3456" />
    </div>
  );
}

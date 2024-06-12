export default function Announcement() {
  return (
    <textarea
      name="new_announcement"
      id="new_announcement"
      placeholder="What you want to announce..."
      rows={5}
      className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
    />
  );
}

export default function Input() {
  return (
    <textarea
      name="announcement_new_comment"
      id="announcement_new_comment"
      placeholder="What is in your mind..."
      rows={5}
      className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
    />
  );
}

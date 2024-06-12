import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function Likes() {
  return (
    <div className="flex flex-grow flex-col items-center justify-start">
      <button>
        <IoHeartOutline size={24} />
      </button>
      <p className="text-sm opacity-60">99</p>
    </div>
  );
}

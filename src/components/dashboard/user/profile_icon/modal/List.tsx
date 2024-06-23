import Link from "next/link";
import { modalListItems } from "../../../../../lib/lists/ListsWithComponents";

interface Props {
  modalCloser: () => void;
}

export default function List({ modalCloser }: Props) {
  return (
    <ul
      className="w-full flex flex-col items-start justify-center"
      id="profile_modal"
    >
      {modalListItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="w-full"
          onClick={modalCloser}
          id="profile_modal"
        >
          <li
            className="w-full flex justify-start items-center gap-2 px-3 py-1 rounded-xl hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470]"
            id="profile_modal"
          >
            {item.icon}
            <p id="profile_modal">{item.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

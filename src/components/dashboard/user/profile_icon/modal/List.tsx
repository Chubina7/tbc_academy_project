import Link from "next/link";
import { modalListItems } from "../../../../../lib/lists/ListsWithComponents";

interface Props {
  modalCloser: () => void;
}

export default function List({ modalCloser }: Props) {
  return (
    <ul className="w-full flex flex-col items-start justify-center">
      {modalListItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="w-full"
          onClick={modalCloser}
        >
          <li className="w-full flex justify-start items-center gap-2 px-3 py-1 rounded-xl hover:bg-[#5C5470]">
            {item.icon}
            <p>{item.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

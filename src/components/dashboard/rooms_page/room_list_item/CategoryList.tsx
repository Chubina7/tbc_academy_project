interface Props {
  categories: Array<string>;
}

export default function CategoryList({ categories }: Props) {
  return (
    <ul className="my-1 px-[15px]">
      {categories.map((category, idx) => (
        <li
          key={idx}
          className="w-fit inline-block border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 m-1.5 text-sm transition-all duration-300"
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

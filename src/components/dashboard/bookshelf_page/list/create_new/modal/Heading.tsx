"use client";

import CloseBtn from "./CloseBtn";

interface Props {
  handler: () => void;
}

export default function Heading({ handler }: Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-semibold text-xl select-none">
        Upload new book or resource
      </h1>
      <CloseBtn closeModal={handler} />
    </div>
  );
}

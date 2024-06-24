"use client";

interface Props {
  source: string;
}

export default function ChangeBtn({ source }: Props) {
  const handleCoverPictureChange = () => {
    // storing in DB ...
    console.log(source);
  };

  return (
    <button
      className="text-nowrap px-3 py-1 bg-red-300 rounded-lg select-none"
      onClick={handleCoverPictureChange}
    >
      Save
    </button>
  );
}

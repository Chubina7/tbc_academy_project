interface Props {
  otherMembersNum: number;
}

export default function SeeAllBtn({ otherMembersNum }: Props) {
  return (
    <p className="w-full text-center mb-1 p-3 pt-0">
      <span className="hover:underline cursor-pointer">
        See {otherMembersNum} more
      </span>
    </p>
  );
}

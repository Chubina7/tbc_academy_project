import SignOutBtn from "../../../../landing/header/SignOutBtn";

interface Props {
  modalCloser: () => void;
}

export default function SignOut({ modalCloser }: Props) {
  return (
    <span className="w-full" onClick={modalCloser}>
      <SignOutBtn />
    </span>
  );
}

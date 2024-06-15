import Backdrop from "../../../../../ui/Backdrop";
import YesBtn from "./YesBtn";
import NoBtn from "./NoBtn";

interface Props {
  modalCloser: () => void;
}

export default function Modal({ modalCloser }: Props) {
  return (
    <>
      <Backdrop />
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 | bg-[#FFFFFF] dark:bg-[#352F44] p-3 rounded-xl | flex flex-col justify-start items-start gap-3">
        <h1 className="text-2xl">Confirm deletion</h1>
        <p className="opacity-60">
          Do you really want to remove account? This action{" "}
          <span className="font-bold">can not be undone</span>!
        </p>
        <div className="w-full flex gap-2 justify-end items-end">
          <NoBtn closeModal={modalCloser} />
          <YesBtn closeModal={modalCloser} />
        </div>
      </div>
    </>
  );
}

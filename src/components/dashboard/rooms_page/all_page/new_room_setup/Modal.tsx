import Backdrop from "../../../../ui/Backdrop";
import BottomToTop from "../../../../ui/framerMotionDivs/directions/BottomToTop";
import Steps from "./parts/steps/Steps";
import AddNewRoomProvider from "../../../../../context/providers/AddNewRoomProvider";
import Heading from "./Heading";
import Close from "./Close";
import PrevBtn from "./buttons/PrevBtn";
import NextBtn from "./buttons/NextBtn";
import Components from "./parts/Components";

interface Props {
  modalHandler: () => void;
}

export default function Modal({ modalHandler }: Props) {
  return (
    <>
      <Backdrop />
      <AddNewRoomProvider>
        <BottomToTop className="fixed z-50 w-full h-[95%] bottom-0 left-0 bg-[#FFFFFF] dark:bg-[#352F44] rounded-t-2xl | px-3 py-10 flex flex-col justify-center items-center gap-3">
          <Close action={modalHandler} />
          <Heading />
          <Steps />
          <Components />
          <div className="w-full min-h-20 sm:w-96 sm:min-h-fit flex flex-col sm:flex-row justify-end sm:justify-center items-center gap-3">
            <PrevBtn />
            <NextBtn />
          </div>
        </BottomToTop>
      </AddNewRoomProvider>
    </>
  );
}

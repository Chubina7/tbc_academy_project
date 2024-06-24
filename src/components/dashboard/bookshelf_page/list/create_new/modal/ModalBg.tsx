import Backdrop from "../../../../../ui/Backdrop";
import BottomToTop from "../../../../../ui/framerMotionDivs/directions/BottomToTop";

interface Props {
  children: React.ReactNode;
}

export default function ModalBg({ children }: Props) {
  return (
    <>
      <Backdrop />
      <BottomToTop className="fixed z-50 top-1/2 left-1/2 !transform -translate-y-1/2 -translate-x-1/2 | w-full max-w-[90%] md:max-w-[70%] lg:max-w-[40%] bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 shadow-custom flex flex-col gap-5">
        {children}
      </BottomToTop>
    </>
  );
}

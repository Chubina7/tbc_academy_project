"use client";

import Backdrop from "../../../ui/Backdrop";
import Appear from "../../../ui/framerMotionDivs/Appear";

export default function Modal() {
  const handleClose = () => {
    console.log("CLOSING MODAL");
  };

  return (
    <>
      <Backdrop modalCloser={handleClose} />
      <Appear className="fixed z-50 bg-white text-black top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-lg flex flex-col justify-center items-center p-3 gap-3">
        <h1 className="font-bold text-2xl">Inserted data will be lost</h1>
        <p className="text-sm">Do you really want to quit?</p>
        <div className="w-full flex justify-center items-center gap-4">
          <button
            className="bg-red-400 rounded-lg px-6 py-1"
            onClick={() => console.log("REDIRECT")}
          >
            Yes
          </button>
          <button
            className="bg-red-400 rounded-lg px-6 py-1"
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </Appear>
    </>
  );
}

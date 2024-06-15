import { IoAlertCircleSharp } from "react-icons/io5";
import Btn from "./Btn";

export default function DeleteAcc() {
  return (
    <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-between items-center gap-5">
        <h1 className="text-2xl font-semibold text-red-600">Delete Account</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-end">
        <div className="w-full flex gap-2 justify-start items-center">
          <IoAlertCircleSharp size={20} className="min-w-8" />
          <h1>Permanently delete your account</h1>
        </div>
        <div className="w-full flex gap-2 justify-start items-center">
          <IoAlertCircleSharp size={20} className="min-w-8" />{" "}
          <p>All related data will be removed from our databases</p>
        </div>
        <Btn />
      </div>
    </div>
  );
}

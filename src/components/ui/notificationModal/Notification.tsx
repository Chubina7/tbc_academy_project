import {
  IoAlertCircle,
  IoCheckmarkCircle,
  IoCloseCircle,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  type: "success" | "error" | "loading";
  isShown: boolean;
  title: string;
}

export default function Notification({ isShown, type, title }: Props) {
  return (
    <AnimatePresence>
      {isShown ? (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed w-full md:w-fit top-[12px] left-1/2 transform !-translate-x-1/2 flex gap-3 justify-start items-center z-50 p-5 rounded-lg transition-colors duration-300 text-[#FFFFFF] ${
            type === "success" && "bg-green-700"
          } ${type === "error" && "bg-red-700"} ${
            type === "loading" && "bg-yellow-700"
          }`}
        >
          {type === "success" && <IoCheckmarkCircle size={20} />}
          {type === "error" && <IoCloseCircle size={20} />}
          {type === "loading" && <IoAlertCircle size={20} />}
          <h1 className="font-bold">{title}</h1>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

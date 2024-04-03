import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 py-8 px-5 bg-slate-500 md:max-w-screen-sm md:mt-20">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <GrLocation size={20} />
          <strong>Address:</strong>
        </div>
        <p>Didi dighomi, IV district</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoCallOutline size={20} />
          <strong>Phone:</strong>
        </div>
        <p>+995 577 777 777</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <MdOutlineEmail size={20} />
          <strong>Email:</strong>
        </div>
        <p>reactCourse.task@gmail.com</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoIosGlobe size={20} />
          <strong>Website:</strong>
        </div>
        <p>google.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;

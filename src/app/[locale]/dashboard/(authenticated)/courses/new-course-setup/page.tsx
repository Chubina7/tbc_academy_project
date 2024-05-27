"use client";

import { useRouter } from "next/navigation";
import BottomToTop from "../../../../../../components/ui/framerMotionDivs/directions/BottomToTop";

const test_data = {
  course_title: "TEST_TITLE",
  category: "CATEGORY",
  course_description: "DESCRIPTION",
  created_at: "2024-12-11",
  updated_at: "2024-12-11",
};

export default function Page() {
  const router = useRouter();

  const handleAddition = async () => {
    // read data from inputs
    // ...
    // make request
    const res = await fetch("http://localhost:3000/api/dashboard/courses", {
      method: "POST",
      body: JSON.stringify(test_data),
    });
    const result = await res.json();

    // refetch all courses
    router.refresh();

    // return
    return result;
  };

  return (
    <BottomToTop className="bg-[#FFFFFF] dark:bg-[#352F44] p-3 | transition-colors duration-300 | w-full h-full rounded-lg ">
      <h1>PAGE TO CREATE NEW COURSE</h1>
      <button className="bg-red-300 rounded-lg p-3" onClick={handleAddition}>
        TEST ADDITION
      </button>
    </BottomToTop>
  );
}

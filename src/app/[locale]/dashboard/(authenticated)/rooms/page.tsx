import RoomsFilter from "../../../../../components/dashboard/rooms_page/RoomsFilter";
import CreateRoomBtn from "../../../../../components/dashboard/rooms_page/CreateRoomBtn";
import RoomList from "../../../../../components/dashboard/rooms_page/RoomList";
import RoomsListFilterProvider from "../../../../../context/providers/RoomsListFilterProvider";

const roomList = [
  {
    room_id: "R2345",
    room_name: "mrktrs",
    category: ["marketing", "math"],
    description:
      "This course is about marketers. Who plays hard and pays hard. Who is good and what is it.",
    enrolled_number: 78,
    teacher: "Emzar Emzarashvili",
    created_at: "09/04/1997",
    image: null,
  },
  {
    room_id: "R2346",
    room_name: "dev101",
    category: ["programming", "web development"],
    description:
      "Introduction to web development. Learn the basics of HTML, CSS, and JavaScript.",
    enrolled_number: 120,
    teacher: "Nino Ninashvili",
    created_at: "02/12/2020",
    image: null,
  },
  {
    room_id: "R2347",
    room_name: "data_science",
    category: ["data science", "statistics"],
    description:
      "Dive into data science with this comprehensive course on statistics, machine learning, and data analysis.",
    enrolled_number: 98,
    teacher: "Giorgi Giorgadze",
    created_at: "05/18/2019",
    image: null,
  },
  {
    room_id: "R2348",
    room_name: "art_history",
    category: ["art", "history"],
    description:
      "Explore the rich history of art from ancient times to the modern era.",
    enrolled_number: 45,
    teacher: "Salome Sabanadze",
    created_at: "11/23/2018",
    image: null,
  },
  {
    room_id: "R2349",
    room_name: "bio101",
    category: ["biology", "science"],
    description:
      "Basic biology course covering cell structure, genetics, evolution, and ecology.",
    enrolled_number: 150,
    teacher: "Tamar Tavadze",
    created_at: "08/15/2017",
    image: null,
  },
  {
    room_id: "R2350",
    room_name: "creative_writing",
    category: ["writing", "literature"],
    description:
      "Develop your writing skills and learn the art of storytelling in this creative writing course.",
    enrolled_number: 60,
    teacher: "Lasha Lomidze",
    created_at: "01/10/2021",
    image: null,
  },
  {
    room_id: "R2351",
    room_name: "photography",
    category: ["photography", "art"],
    description:
      "Master the basics of photography, from camera settings to composition and post-processing.",
    enrolled_number: 85,
    teacher: "Ketevan Kereselidze",
    created_at: "06/05/2022",
    image: null,
  },
  {
    room_id: "R2352",
    room_name: "business101",
    category: ["business", "economics"],
    description:
      "An introductory course on business principles, covering management, marketing, and finance.",
    enrolled_number: 110,
    teacher: "Davit Davitashvili",
    created_at: "03/27/2016",
    image: null,
  },
  {
    room_id: "R2353",
    room_name: "chemistry",
    category: ["chemistry", "science"],
    description:
      "Learn the fundamentals of chemistry, including atomic structure, chemical reactions, and laboratory techniques.",
    enrolled_number: 130,
    teacher: "Nana Naneishvili",
    created_at: "12/01/2015",
    image: null,
  },
  {
    room_id: "R2354",
    room_name: "philosophy",
    category: ["philosophy", "humanities"],
    description:
      "Explore the major questions and ideas in philosophy from ancient to modern times.",
    enrolled_number: 55,
    teacher: "Vakhtang Vashakidze",
    created_at: "07/09/2021",
    image: null,
  },
];

const allCategories: Array<string> = [
  "marketing",
  "math",
  "programming",
  "web development",
  "data science",
  "statistics",
  "art",
  "history",
  "biology",
  "science",
  "writing",
  "literature",
  "photography",
  "business",
  "economics",
  "chemistry",
  "philosophy",
  "humanities",
];

export default function RoomsPage() {
  // getting data dynamicly from DB
  // ...
  return (
    <RoomsListFilterProvider>
      <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
        <section className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-20">
          <RoomsFilter filters={allCategories} />
          <CreateRoomBtn />
        </section>
        <RoomList rooms={roomList} />
      </div>
    </RoomsListFilterProvider>
  );
}

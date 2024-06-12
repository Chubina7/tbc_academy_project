import List from "../../../../../components/dashboard/announcements_page/list/List";

const announcementList: IAnnouncementList[] = [
  {
    author: {
      user_id: "U0001",
      username: "Alice",
      surname: "Johnson",
      room_id: "R0001",
      room_title: "Science Class",
    },
    announcement_id: "A0001",
    announcement_title: "Lab Safety Rules",
    announcement:
      "Please remember to follow all lab safety rules during our experiments.",
    comments_number: 5,
    announced_at: "01/06/2024",
  },
  {
    author: {
      user_id: "U0002",
      username: "Bob",
      surname: "Smith",
      room_id: "R0002",
      room_title: "Math Class",
    },
    announcement_id: "A0002",
    announcement_title: "Homework Due Date",
    announcement:
      "The homework on calculus is due next Monday. Please submit it on time.",
    comments_number: 3,
    announced_at: "02/06/2024",
  },
  {
    author: {
      user_id: "U0003",
      username: "Charlie",
      surname: "Brown",
      room_id: "R0003",
      room_title: "History Class",
    },
    announcement_id: "A0003",
    announcement_title: "Field Trip",
    announcement:
      "We will be visiting the history museum next Friday. Don't forget to bring your permission slips.",
    comments_number: 7,
    announced_at: "03/06/2024",
  },
  {
    author: {
      user_id: "U0004",
      username: "Diana",
      surname: "Miller",
      room_id: "R0004",
      room_title: "English Class",
    },
    announcement_id: "A0004",
    announcement_title: "Reading Assignment",
    announcement:
      "Please read chapters 4 and 5 of 'To Kill a Mockingbird' for our next class discussion.",
    comments_number: 2,
    announced_at: "04/06/2024",
  },
  {
    author: {
      user_id: "U0005",
      username: "Eve",
      surname: "Davis",
      room_id: "R0005",
      room_title: "Physics Class",
    },
    announcement_id: "A0005",
    announcement_title: "Project Deadline",
    announcement:
      "The project on Newton's laws of motion is due by the end of this month. Start working on it early!",
    comments_number: 4,
    announced_at: "05/06/2024",
  },
  {
    author: {
      user_id: "U0006",
      username: "Frank",
      surname: "Wilson",
      room_id: "R0006",
      room_title: "Chemistry Class",
    },
    announcement_id: "A0006",
    announcement_title: "Lab Equipment",
    announcement:
      "Ensure all lab equipment is cleaned and returned to its proper place after use.",
    comments_number: 6,
    announced_at: "06/06/2024",
  },
  {
    author: {
      user_id: "U0007",
      username: "Grace",
      surname: "Taylor",
      room_id: "R0007",
      room_title: "Biology Class",
    },
    announcement_id: "A0007",
    announcement_title: "Dissection Lab",
    announcement:
      "We will be conducting a dissection lab next week. Please prepare accordingly.",
    comments_number: 8,
    announced_at: "07/06/2024",
  },
  {
    author: {
      user_id: "U0008",
      username: "Hank",
      surname: "Anderson",
      room_id: "R0008",
      room_title: "Art Class",
    },
    announcement_id: "A0008",
    announcement_title: "Art Exhibition",
    announcement:
      "Submit your artwork by this Friday for the upcoming art exhibition.",
    comments_number: 1,
    announced_at: "08/06/2024",
  },
  {
    author: {
      user_id: "U0009",
      username: "Ivy",
      surname: "Thomas",
      room_id: "R0009",
      room_title: "Music Class",
    },
    announcement_id: "A0009",
    announcement_title: "Concert Rehearsal",
    announcement:
      "There will be a rehearsal for the school concert this Wednesday. Don't miss it!",
    comments_number: 10,
    announced_at: "09/06/2024",
  },
  {
    author: {
      user_id: "U0010",
      username: "Jack",
      surname: "Martinez",
      room_id: "R0010",
      room_title: "Physical Education",
    },
    announcement_id: "A0010",
    announcement_title: "Sports Day",
    announcement:
      "Our annual Sports Day is coming up. Make sure to sign up for your preferred events.",
    comments_number: 9,
    announced_at: "10/06/2024",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 md:px-7 py-3 gap-5">
      <h1>FILTER</h1>
      <List data={announcementList} />
    </div>
  );
}

import PersonalInfo from "./personal_info/PersonalInfo";

interface Props {
  user_id: string;
}

export default function VisitorProfileUi({ user_id }: Props) {
  console.log("user id is: ", user_id);
  // fetch user data from DB depending on the user_id
  // ...

  // if user_id not found:
  // ...

  // if user_id found:
  const birth_date = null; // 2024-06-15T00:00:00Z
  const email = "test@email.com";
  const profile_image = null;
  const role = "student";
  const surname = "gvarashvili";
  const username = "saxel";

  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-3 md:px-7 py-3 gap-5">
      <PersonalInfo
        data={{ birth_date, email, profile_image, role, surname, username }}
      />
    </div>
  );
}

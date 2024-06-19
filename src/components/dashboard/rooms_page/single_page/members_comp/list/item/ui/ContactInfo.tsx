interface Props {
  data: {
    username: string;
    surname: string | null;
    email: string;
  };
}

export default function ContactInfo({ data }: Props) {
  const { email, surname, username } = data;

  return (
    <div className="w-full max-w-44 sm:max-w-96 xl:max-w-48 flex flex-col justify-center items-start">
      <h1 className="w-full font-semibold line-clamp-2">
        {username} {surname}
      </h1>
      <p className="text-sm">{email}</p>
    </div>
  );
}

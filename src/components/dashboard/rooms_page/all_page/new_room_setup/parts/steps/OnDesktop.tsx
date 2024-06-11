interface Props {
  data: {
    title: string;
    icon: React.ReactNode;
  };
}

export default function OnDesktop({ data }: Props) {
  return (
    <>
      <h1 className="hidden lg:block font-semibold text-center">
        {data.title}
      </h1>
      <span className="hidden lg:block">{data.icon}</span>
    </>
  );
}

import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function Dashboard({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
      <h1>Dashboard home page</h1>
    </div>
  );
}

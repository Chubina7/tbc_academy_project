import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function Dashboard({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      <h1>Dashboard home page</h1>
    </div>
  );
}

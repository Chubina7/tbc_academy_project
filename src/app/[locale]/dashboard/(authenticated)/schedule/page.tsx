import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function Schedule({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return <div>Schedule</div>;
}

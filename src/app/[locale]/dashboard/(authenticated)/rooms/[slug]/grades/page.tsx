import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}
export default function GradesPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return <div>Grades page for {params.slug}</div>;
}

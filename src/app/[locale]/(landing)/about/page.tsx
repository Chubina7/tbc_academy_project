import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface Props {
  params: IParams;
}

export default function AboutPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return notFound();

  return <div>About page of landing</div>;
}

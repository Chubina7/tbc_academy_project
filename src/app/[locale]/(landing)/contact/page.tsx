import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface Props {
  params: IParams;
}

export default function ContactPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return notFound();

  return <div>Contact page of landing</div>;
}

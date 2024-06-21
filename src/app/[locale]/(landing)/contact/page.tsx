import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function ContactPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return <div>Contact page of landing</div>;
}

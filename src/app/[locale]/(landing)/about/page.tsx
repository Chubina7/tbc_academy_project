import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function AboutPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  return <div>About page of landing</div>;
}

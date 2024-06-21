import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function HomePage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  return <div>Home page of landing</div>;
}

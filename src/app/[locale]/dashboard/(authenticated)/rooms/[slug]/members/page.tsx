import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default function MembersPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return <div>memebrs of room {params.slug}</div>;
}

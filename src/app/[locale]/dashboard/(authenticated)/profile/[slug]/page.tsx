import { USER } from "../../../../../../lib/helpers/server_act_funcs/authorization_acts";
import VisitorProfileUi from "../../../../../../components/dashboard/profile_page/visitor_user_ui/VisitorProfileUi";
import LoginedUserUi from "../../../../../../components/dashboard/profile_page/logined_user_ui/ui/LoginedUserUi";
import { unstable_setRequestLocale } from "next-intl/server";
import { getUserPublicProfileInfo } from "../../../../../../lib/data_fetchers";

interface Props {
  params: IParams;
  searchParams: { segment: string };
}

export async function generateMetadata({ params }: Props) {
  const slug = params.slug;
  const data = await getUserPublicProfileInfo(slug);

  return {
    title: `${data?.username}'s profile`,
  };
}

export default async function ProfilePage({ params, searchParams }: Props) {
  unstable_setRequestLocale(params.locale);
  const loginedUser = await USER();

  if (loginedUser.user_id === params.slug)
    return <LoginedUserUi searchParam={searchParams.segment} />;

  return <VisitorProfileUi user_id={params.slug} />;
}

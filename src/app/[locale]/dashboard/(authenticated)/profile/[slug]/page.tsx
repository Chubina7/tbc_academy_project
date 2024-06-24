import { USER } from "../../../../../../lib/helpers/server_act_funcs/authorization";
import VisitorProfileUi from "../../../../../../components/dashboard/profile_page/visitor_user_ui/VisitorProfileUi";
import LoginedUserUi from "../../../../../../components/dashboard/profile_page/logined_user_ui/ui/LoginedUserUi";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
  searchParams: { segment: string };
}

export default async function ProfilePage({ params, searchParams }: Props) {
  unstable_setRequestLocale(params.locale);
  const loginedUser = await USER();

  if (loginedUser.user_id === params.slug)
    return <LoginedUserUi searchParam={searchParams.segment} />;

  return <VisitorProfileUi user_id={params.slug} />;
}

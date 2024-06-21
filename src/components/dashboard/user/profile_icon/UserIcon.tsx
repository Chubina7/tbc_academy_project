import { USER } from "../../../../lib/helpers/server_act_funcs/authorization_acts";
import UserIconUi from "./UserIconUi";

export default async function UserIcon() {
  const data = await USER();

  return <UserIconUi data={data} />;
}

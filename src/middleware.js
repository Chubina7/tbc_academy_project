import chain from "./middlewares/chain";
import { auth } from "./middlewares/auth";
import { internationalization } from "./middlewares/internationalization";

const middlewares = [auth, internationalization];
export default chain(middlewares);

export const config = {
  mather: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

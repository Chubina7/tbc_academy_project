import chain from "./middlewares/chain";
import { auth } from "./middlewares/auth";
import { internationalization } from "./middlewares/internationalization";

const middlewares = [internationalization, auth];
export default chain(middlewares);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

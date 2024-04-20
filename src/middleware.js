import chain from "./middlewares/chain";
import { auth } from "./middlewares/auth";
import { internationalization } from "./middlewares/internationalization";

// პირველივე ჩატვირთვაზე lng-ის დასეტვა cookie-ში.

const middlewares = [internationalization, auth];
export default chain(middlewares);

export const config = {
  matcher: ["/((?!_next).*)"],
};

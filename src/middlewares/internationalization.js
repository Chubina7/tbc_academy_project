export function internationalization(middleware) {
  return async function (request, event) {
    console.log("test log to check if working");

    return middleware(request, event);
  };
}

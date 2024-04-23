import { redirect } from "next/navigation";

export default function ProductsPage() {
  return redirect("/"); // redirect to the page, where products are placed (home in this situation)
}

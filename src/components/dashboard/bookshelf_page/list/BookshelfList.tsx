import { USER } from "../../../../lib/helpers/server_act_funcs/authorization_acts";
import { getUserRooms } from "../../../../lib/helpers/server_act_funcs/user_relations";
import VariantsList from "../../../ui/framerMotionDivs/variants/VariantsList";
import CreateNew from "./create_new/CreateNew";
import BookshelfListItem from "./item/BookshelfListItem";

interface Props {
  data: Array<IBook>;
}

export default async function BookshelfList({ data }: Props) {
  const { user_id, role } = await USER();
  const roomSuggestions = await getUserRooms(user_id);

  return (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
      {role !== "student" && <CreateNew suggestions={roomSuggestions} />}
      {data.map((item) => (
        <BookshelfListItem key={item.book_id} data={item} />
      ))}
    </VariantsList>
  );
}

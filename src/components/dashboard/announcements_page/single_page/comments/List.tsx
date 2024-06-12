import Item from "./item/Item";

export default function List() {
  return (
    <div className="w-full max-w-4xl flex flex-col justify-center items-center ">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

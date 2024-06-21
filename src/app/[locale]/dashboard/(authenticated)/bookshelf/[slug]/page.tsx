import Info from "../../../../../../components/dashboard/bookshelf_page/dynamic_page/info/Info";

interface Props {
  params: IParams;
}

export default function BookPage({ params }: Props) {
  console.log(params.slug);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-3 md:px-7 py-3 gap-5 overflow-visible">
      <Info />
      {/* <div className="w-full max-w-4xl">
        <h1>Reviews</h1>

      </div> */}
    </div>
  );
}

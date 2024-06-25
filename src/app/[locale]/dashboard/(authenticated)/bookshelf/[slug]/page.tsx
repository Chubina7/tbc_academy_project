import Info from "../../../../../../components/dashboard/bookshelf_page/dynamic_page/info/Info";
import { getSingleBookData } from "../../../../../../lib/data_fetchers";

interface Props {
  params: IParams;
}

export async function generateMetadata({ params }: Props) {
  const data = await getSingleBookData(params.slug);

  return {
    title: data?.book_title,
    description: data?.book_description,
  };
}

export default async function BookPage({ params }: Props) {
  const data = await getSingleBookData(params.slug);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-3 md:px-7 py-3 gap-5 overflow-visible">
      {data ? (
        <Info data={data} book_id={params.slug} />
      ) : (
        <p>Error fetching data.</p>
      )}
    </div>
  );
}

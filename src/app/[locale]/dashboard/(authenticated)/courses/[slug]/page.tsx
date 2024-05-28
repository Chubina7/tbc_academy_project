import { getSingleCourse } from "../../../../../../lib/actions";

interface Props {
  params: IParams;
}

export default async function Page({ params }: Props) {
  const data = await getSingleCourse(params.slug);

  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h1>title: {data.course_title}</h1>
      <p>description: {data.course_description}</p>
      <p>category: {data.category}</p>
    </div>
  );
}

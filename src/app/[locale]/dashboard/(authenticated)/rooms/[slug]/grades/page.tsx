interface Props {
  params: IParams;
}
export default function GradesPage({ params }: Props) {
  return <div>Grades page for {params.slug}</div>;
}

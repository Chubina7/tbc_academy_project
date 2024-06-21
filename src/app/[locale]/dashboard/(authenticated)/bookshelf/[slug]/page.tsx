interface Props {
  params: IParams;
}

export default function BookPage({ params }: Props) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}

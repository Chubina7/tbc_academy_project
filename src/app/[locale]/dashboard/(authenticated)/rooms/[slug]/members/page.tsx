interface Props {
  params: IParams;
}

export default function MembersPage({ params }: Props) {
  return <div>memebrs of room {params.slug}</div>;
}

interface Props {
  params: IParams;
}

export default function AnnouncementPage({ params }: Props) {
  const { slug } = params;

  return <div>slug is: {slug}</div>;
}

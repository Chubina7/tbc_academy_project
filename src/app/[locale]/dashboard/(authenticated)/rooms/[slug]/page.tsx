interface Props {
  params: IParams;
}

export default function RoomPage({ params }: Props) {
  const { slug } = params;

  return (
    <div className="w-full min-h-screen px-3 md:px-7 pt-1">
      <h1>THIS IS THE PAGE OF {slug}</h1>
    </div>
  );
}

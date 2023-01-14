import Card from "./Card";

function CardsList({ data, time, banners }) {
  return (
    <>
      {data.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          prevTime={item.timeframes[time].previous}
          currentTime={item.timeframes[time].current}
          banner={banners[idx]}
        />
      ))}
    </>
  );
}

export default CardsList;

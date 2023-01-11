export default function Bar({ day, height, today, handleBar }) {
  const maxHeight = (height * 200) / 70;

  const style = {
    height: `${maxHeight}px`,
  };

  const bgBar = today === day ? "bg-cyan" : "bg-soft-red";

  return (
    <div className="bar-stats">
      <div className="bar-stats__header">
        <div
          className={`bar ${bgBar}`}
          data-day={day}
          data-height={`$${height}`}
          style={style}
          onClick={handleBar}
        ></div>
        <p>{day}</p>
      </div>
    </div>
  );
}

export default function Bar({day, height}) {
  return (
    <div className="bar-stats">
      <div className="bar-stats__header">
        <div className="bar">{height}</div>
        <p>{day}</p>
      </div>
    </div>
  )
}
